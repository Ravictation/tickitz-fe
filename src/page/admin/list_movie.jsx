import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import useApi from '../../helpers/useApi'
import Pagination from "../../component/pagination"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { logout } from '../../store/reducer/user'

function List_Movie() {
    const dateRef = useRef(null);
    const api = useApi()
    const navigates = useNavigate();
    const dispatch = useDispatch()

    const [pickdate, setpickdate] = useState('')
    const [movies, setmovies] = useState([]);
    const [metamovies, setmetamovies] = useState([]);
    const [pageactive, setpageactive] = useState(1)
    const [sort, setsort] = useState('')
    const [search, setsearch] = useState('')
    const [by_genre, setby_genre] = useState('')


    const getMovies = async () => {
        try {
            const { data } = await api({ method: 'GET', url: `/movies/?search=${search}&order_by=${sort}&page=${pageactive}&limit=1&by_genre=${by_genre}` })
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

    // DELETE DATA
    const [delid_movie, setdelid_movie] = useState("");
    const hidden_modal_delete = () => {
        setdelid_movie("");
    };

    const delete_data = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api({ method: 'delete', url: `/movies/${delid_movie}` });
            console.log(data);
            hidden_modal_delete();
            // setsuccess_message(data.message)
        } catch (error) {
            if (error.response.data.status == 401) {
                // seterror_message(error.response.data.message)
                dispatch(logout())
                navigates(`/sign-in`)
            }
            // seterror_message(error.response.data.message)
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        document.title = 'List Movie';
        getMovies()
    }, []);

    useEffect(() => {
        getMovies()
    }, [pageactive, sort, search, by_genre, delid_movie]);
    return (
        <>
            <Navbar />
            <section className='bg-background px-5 md:px-20 py-10'>
                <div className="">
                    <div className="grid grid-row-3 bg-white rounded-2xl px-10 py-5">
                        <div className="flex">
                            <div className="w-full font-[#14142B] font-semibold text-xl">
                                List Movie
                            </div>
                            <div className="w-92 flex justify-between">
                                <div className="relative mb-3 mr-3">
                                    <i className="fa fa-calendar absolute left-2 top-[12px]" aria-hidden="true" />
                                    <input type="date" ref={dateRef} onChange={(e) => setpickdate(e.target.value)} className="bg-[#EFF0F6] h-10 w-40 pl-8 rounded-md appearance-none text-sm" />
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
                                    <td className="">No</td>
                                    <td className="">Tumbnail</td>
                                    <td className="">Movie Name</td>
                                    <td className="">Category</td>
                                    <td className="">Release Date</td>
                                    <td className="">Duration</td>
                                    <td className="">Action</td>
                                </tr>
                                {
                                    movies ? (
                                        movies.map((v, i) => {
                                            return (
                                                <tr className="text-[12px] font-semibold h-10 border-t">
                                                    <td>{i + 1}</td>
                                                    <td className="flex justify-center">
                                                        <div className="h-[50px] w-[50px] my-2">
                                                            <img className="h-full object-cover rounded-lg" src={v.image} alt="" />
                                                        </div>
                                                    </td>
                                                    <td>{v.title}</td>
                                                    <td>{v.genres.map((vv, i) => capitalTitle(vv.name_genre) + (i + 1 == v.genres.length ? "" : ", "))}</td>
                                                    <td>{v.release_date}</td>
                                                    <td>{v.duration_hour + " hour " + v.duration_minute + " minute"}</td>
                                                    <td><button
                                                        onClick={() => setdelid_movie(v.id_movie)}
                                                        className="mt-3 h-7 w-full rounded border border-[#ED2E7E] text-[#ED2E7E] text-sm font-semibold leading-none hover:bg-[#ED2E7E] active:bg-[#3604c3] hover:text-white"
                                                    >
                                                        Delete
                                                    </button></td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        <tr>
                                            <td colspan="7">
                                                <div className="mb-5">
                                                    <h1 className="text-[#4E4B66]">Data not found</h1>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            </table>
                        </div>
                        <div
                            className={
                                delid_movie == ""
                                    ? "hidden"
                                    : "block absolute h-full w-full top-0 left-0 right-0 button-0 bg-black bg-opacity-50 text-center grid items-center justify-around"
                            }
                        >
                            <div className="bg-white p-5 rounded-lg">
                                <div className="flex pb-2 border-b justify-between items-center">
                                    <h1 className="tracking-wider font-bold">Delete Movie</h1>
                                    <Link onClick={hidden_modal_delete}>
                                        <i className="fa fa-times" aria-hidden="true" />
                                    </Link>
                                </div>
                                <div className="py-5">
                                    <p>Are you sure you want to delete movie {delid_movie} ?</p>
                                </div>
                                <div className="flex pt-2 border-t justify-between items-center">
                                    <button
                                        onClick={delete_data}
                                        className="bg-[#dc2626] h-8 w-20 rounded-lg text-white font-bold text-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex pb-10 md:py-10 justify-around">
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