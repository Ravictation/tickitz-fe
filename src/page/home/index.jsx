import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar";
import ImageSlide from "../../component/imageslide";
import Footer from "../../component/footer";
import BgSubscribe from '../../component/bgsubscribe'
import useApi from '../../helpers/useApi'
import CardMovie from "../../component/card";
import Pagination from '../../component/pagination'

import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../../store/reducer/user';
import { useNavigate } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([])
    const [filterGenre, setFilterGenre] = useState('')
    const [filterSearch, setFilterSearch] = useState([])
    const [pageActive, setPageActive] = useState(1)
    const [metaMovies, setMetaMovies] = useState([])
    //const [release, setRelease] = useState('')
    const api = useApi();
    const limit = 11
    const dispatch = useDispatch();
    const { isAuth } = useSelector((s) => s.users);
    const navigate = useNavigate()

    const getMovies = async()=>{
        api({
            method : 'GET',
            url : `/movies?page=${pageActive}&limit=${limit}&by_genre=${filterGenre}&search=${filterSearch}` ,
            data: movies    
        }) 
            .then(({data})=>{
                setMovies(data.data)
                setMetaMovies(data.meta)
                //setRelease(movies.release_date)
                console.log(data.data)
            })
            .catch((err)=>{
                setMovies(false)
                setMetaMovies(false)
                console.log(err)
        })
    }
    //console.log(release)

    
    console.log(movies)
    console.log()
    const getGenre = async() =>{
        try {
            const {data} = await api(`http://localhost:8081/genres?${limit}`)
            setGenres(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUser = async () => {
        try {
            const { data } = await api.get('http://localhost:8081/user/');
            dispatch(addData(data.data));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handlerSearch = (e) =>{
        if(e.target.value !== ''){
            setFilterSearch(e.target.value)
        }else{
            setFilterSearch('')
        }
    };

    useEffect(()=>{
        fetchUser()
        if(!isAuth){
            navigate('/')
        }
    },[])

    useEffect(() => {
        getMovies();

        if (isAuth) {
            fetchUser();
        }
    }, [isAuth]);

    useEffect(()=>{
        getGenre()
    },[limit])




    useEffect(()=>{
        getMovies()
    },[pageActive, filterSearch, filterGenre, limit])

    useEffect(()=>{
        setPageActive(1)
        getMovies()
    },[])

    return (
        <>
            <Navbar />
            <ImageSlide/>

            <section className="main-section px-20 mt-20">
                <div className="flex xs:flex-col lg:flex-row xs:gap-y-5 lg:gap-y-0 genre-search-movie w-full">
                    <div className="lg:w-2/6 xs:w-full">
                        <label>Cari Event</label>
                        <form className="w-full mt-3 flex border border-gray p-3 sm:gap-x-5 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-6 lg:h-6 sm:w-5 sm:h-5 xs:hidden sm:flex">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>

                            <input
                                placeholder="Search Movie"
                                onChange={handlerSearch}
                                type="text"
                                className="outline-none"
                            />
                        </form>
                    </div>

                    <div className="filter-genre lg:w-3/5 xs:w-full">
                    <label className="lg:ms-6">Filter</label>
                    <div className="p-2 px-3 flex flex-row lg:gap-x-5 lg:mt-2 md:-ms-6 lg:ms-0 xs:overflow-x-scroll md:overflow-x-hidden">
                        {genres ?
                            genres.map((v)=>{
                                return (
                                    <div>
                                    <div className="p-2 px-3 rounded-md hover:bg-button hover:cursor-pointer hover:text-white bg-white text-black" onClick={()=> setFilterGenre(v.id_genre)}>{v.name_genre}</div>
                                    </div>
                                )
                            }):(
                                <h1>Data Not Found</h1>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-5 flex flex-wrap gap-x-5 gap-y-5 justify-center ">
                    {movies ? (
                        movies.map((v) => {
                            return <CardMovie id={v.id_movie} image={v.image} name={v.title} genre={v.genres} release={v.release_date} />
                        })
                    ) : (
                        <h1>Data Not Found</h1>
                    )
                    }
                </div>
            </section>



            <div className="w-full pagination flex justify-center">
                    <Pagination meta={metaMovies} page_active={pageActive} set_page_active={setPageActive}/>
            </div>
            
       <div className="subscribe px-20 mt-10">
            <BgSubscribe/>
       </div>
    
            <Footer />
        </>
    )
}

export default Home