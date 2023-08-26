import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Graph from "../../assets/Graph.jpg"
import useApi from '../../helpers/useApi'
import Pagination from "../../component/pagination"

function List_Movie() {
    const dateRef = useRef(null);
    const api = useApi()

    const [pickdate, setpickdate] = useState('')
    const [movies, setmovies] = useState([]);
    const [metamovies, setmetamovies] = useState([]);
    const [pageactive, setpageactive] = useState(1)
    const [sort, setsort] = useState('')
    const [search, setsearch] = useState('')
    const [by_genre, setby_genre] = useState('')


    const getMovies = async () => {
        try {
            const { data } = await api({ method: 'GET', url: `/movies/?search=${search}&order_by=${sort}&page=${pageactive}&limit=5&by_genre=${by_genre}` })
            setmovies(data.data)
            setmetamovies(data.meta)
        } catch (error) {
            setmovies(false)
            setmetamovies(false)
            console.log(error.response.data)
        }
    }

    function capitalTitle(text) {
        return (text.replace(/\w\S*/g, function (word) {
            const newWord = word.slice(0, 1).toUpperCase() + word.substr(1);
            return newWord
        }))
    }

    useEffect(() => {
        document.title = 'List Movie';
        getMovies()
    }, []);
    return (
        <>
            <Navbar />
            <section className='mx-auto bg-background h-full'>
                <div className="p-5 bg-background">
                    <div className="grid grid-row-3 bg-white rounded-2xl px-10 py-5">
                        <div className="flex">
                            <div className="w-full font-[#14142B] font-semibold text-xl">
                                List Movie
                            </div>
                            <div className="w-92 flex justify-between">
                                <div className="relative mb-3 mr-3">
                                    <i className="fa fa-calendar absolute left-2 top-[12px]" aria-hidden="true" />
                                    <input type="date" ref={dateRef} onChange={(e) => setpickdate(e.target.value)} className="bg-[#EFF0F6] h-10 w-40 pl-8 rounded-md appearance-none" />
                                    <i onClick={() => { dateRef.current.showPicker(); }} className="fa fa-sort-desc absolute right-0 top-[10px] bg-[#EFF0F6] w-5 h-5" aria-hidden="true" />
                                </div>
                                <div className="h-10 w-28 bg-primary rounded-md">
                                    <button className="h-full w-full text-sm text-[#F7F7FC]">Add Movie</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <table className="w-full text-center">
                                <tr className="text-[12px] font-semibold h-10">
                                    <td>No</td>
                                    <td>Tumbnail</td>
                                    <td>Movie Name</td>
                                    <td>Category</td>
                                    <td>Release Date</td>
                                    <td>Duration</td>
                                    <td>Action</td>
                                </tr>
                                {
                                    movies ? (
                                        movies.map((v, i) => {
                                            return (
                                                <tr className="text-[12px] font-semibold h-10 border-t">
                                                    <td>{i + 1}</td>
                                                    <td>
                                                        <div className="h-[50px] w-[50px] my-2">
                                                            <img className="h-full object-cover rounded-lg" src={v.image} alt="" />
                                                        </div>
                                                    </td>
                                                    <td>{v.title}</td>
                                                    <td>{v.genres.map((v) => v.name_genre + ", ")}</td>
                                                    <td>{v.release_date}</td>
                                                    <td>{v.duration_hour + " hour " + v.duration_minute + " minute"}</td>
                                                    <td>Action</td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        <div className="mb-5">
                                            <h1 className="text-[#4E4B66]">Data not found</h1>
                                        </div>
                                    )
                                }
                            </table>
                        </div>
                        <div className="">
                            <Pagination meta={metamovies} page_active={pageactive} set_page_active={setpageactive} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default List_Movie