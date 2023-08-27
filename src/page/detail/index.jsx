import React, { useEffect, useState } from "react";
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'
import { Link, useNavigate, useParams } from "react-router-dom";
import useApi from '../../helpers/useApi'
import moment from "moment/moment"
import MovieDetail from '../../component/moviedetail'
import Pagination from "../../component/pagination"

function Detail() {
    const params = useParams()
    const paramsId = params.id
    const [detail, setDetail] = useState([])
    const [pickTime, setPickTime] = useState([])
    const [pickDate, setPickDate] = useState([])
    const [pickLoc, setPickLock] = useState([])
    const [sch, setSch] = useState([])
    const [meta_sch, setmeta_Sch] = useState([])

    const [pageactive, setpageactive] = useState(1)
    const [pickSch, setPickSch] = useState('')

    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [loc, setloc] = useState("")
    const api = useApi()
    const navigate = useNavigate()
    const limitSch = 4

    const getDetail = async () => {
        api({
            method: 'GET',
            url: `/movies/${paramsId}`,
            data: detail
        })
            .then(({ data }) => {
                setDetail(data.data)
                setPickLock(data.data[0].locations)
                setPickTime(data.data[0].times)
                setPickDate(data.data[0].set_dates)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function capitalTitle(text) {
        return (text.replace(/\w\S*/g, function (word) {
            const newWord = word.slice(0, 1).toUpperCase() + word.substr(1);
            return newWord
        }))
    }

    const getSch = async () => {
        api({
            method: 'GET',
            url: `/times_schedules/?movie=${paramsId}&limit=${limitSch}&page=${pageactive}&location=${loc}&time=${time}&date=${date}`
        })
            .then(({ data }) => {
                setSch(data.data)
                setmeta_Sch(data.meta)
            })
            .catch((err) => {
                setSch(false)
                setmeta_Sch(false)
                console.log(err)
            })
    }

    const filters = async () => {
        getSch()
    }

    useEffect(() => {
        getDetail()
        getSch()
    }, [])

    useEffect(() => {
        getSch()
    }, [pickSch, pageactive])

    return (
        <div>
            <Navbar />

            {detail ? (
                detail.map((v) => {
                    return <MovieDetail key={v} title={v.title} genre={v.genres} release={v.release_date} directed={v.directors} hour={v.duration_hour} time={v.duration_minute} casts={v.casts} foto={v.image} bgFoto={v.cover_image} synopsis={v.synopsis} />
                })
            ) : (
                <h1>Data Not Found</h1>
            )}

            <div className="main-book">
                <div className="hidden lg:flex text-3xl md:px-16 lg:px-20 w-full font-semibold">
                    Book Tickets
                </div>

                <div className="flex lg:hidden text-center justify-center xs:-mt-10 xs:mb-5 md:mt-8 text-2xl md:px-16 lg:px-20 w-full">
                    Showtimes and Tickets
                </div>

                <div className="flex xl:justify-between xs:flex-col xs:gap-y-5 lg:flex-row lg:gap-x-5 w-full xs:px-10 md:px-16 lg:px-16 lg:mt-8">

                    <div className="choose-date flex flex-col">
                        <label className="font-semibold lg:ms-4 mb-3">Choose Date</label>
                        <div className="border rounded-md bg-fontInput flex flex-row p-2 lg:ms-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>


                            <select
                                onChange={(e) => setdate(e.target.value)}
                                className="w-full lg:ms-5 p-0.5 text-black bg-fontInput outline-none"
                                placeholder="Purwokerto">
                                {

                                    pickDate.map((v) => (
                                        <option key={v}>{v}</option>
                                    ))}
                            </select>

                        </div>
                    </div>

                    <div className="choose-date flex flex-col">
                        <label className="font-semibold lg:ms-4 mb-3">Choose Time</label>
                        <div className="border rounded-md bg-fontInput flex flex-row p-2 lg:ms-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>


                            <select
                                onChange={(e) => settime(e.target.value)}
                                className="w-full lg:ms-5 p-0.5 text-black bg-fontInput outline-none"
                                placeholder="Purwokerto">
                                {
                                    pickTime.map((v) => (
                                        <option key={v}>{v}</option>
                                    ))}
                            </select>

                        </div>
                    </div>


                    <div className="choose-date flex flex-col">
                        <label className="font-semibold lg:ms-4 mb-3">Choose Location</label>
                        <div className="border rounded-md bg-fontInput flex flex-row p-2 lg:ms-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            <select
                                onChange={(e) => setloc(e.target.value)}
                                className="w-full lg:ms-5 p-0.5 text-black bg-fontInput outline-none"
                                placeholder="Purwokerto">
                                {
                                    pickLoc.map((v) => (
                                        <option key={v}>{v}</option>
                                    ))}
                            </select>

                        </div>
                    </div>

                    <button className="filter rounded-md bg-button text-white xs:p-4 lg:p-0 lg:mt-9 ml-5 lg:w-1/5 flex items-center justify-center " onClick={filters}>Filter</button>
                </div>

                <div className="Choose-Cinema mt-5 lg:px-20">
                    <div className="text-cinema flex xs:flex-col lg:flex-row xs:w-full lg:w-1/4 justify-between">
                        <p className="font-semibold hidden lg:flex">Choose Cinema</p>
                        <p className="text-font xs:text-center lg:text-normal">{meta_sch.total_data > 0 ? meta_sch.total_data : 0} Result</p>
                    </div>

                    <div className="flex xs:flex-col xs:gap-y-5 lg:gap-x-3 md:px-16 lg:gap-y-0 xs:px-10 lg:px-0 lg:flex-row mt-5 w-full justify-between">


                        {sch ?
                            sch.map((v) => {
                                return (
                                    <div key={v.id_time_schedule}>
                                        <div className={(pickSch == v.id_time_schedule ? 'border-button' : 'bg-white') + " hover:border-button border rounded-md cinema xs:p-3 xs:flex-col lg:p-16 lg:max-h-[120px] flex lg:justify-center lg:items-center"} onClick={() => setPickSch(v.id_time_schedule)}>
                                            <img src={v.image_premier} alt="" className="xs:max-h-[25px] lg:max-h-[150px] w-fit" />
                                            <p className="xs:flex lg:hidden mt-2 text-md font-semibold">{v.name_premier}</p>
                                            <p className="xs:flex text-xs mt-2 text-font lg:hidden">{capitalTitle(v.regency)}</p>
                                            <div className="my-3 flex w-full lg:hidden">
                                                <hr className="w-full" />
                                            </div>
                                            <div className="w-full flex flex-row justify-between lg:hidden">
                                                <p className="text-lg font-semibold">Price</p>
                                                <p>{"Rp. " + v.price}</p>
                                            </div>

                                            <div className="w-full flex flex-row justify-between lg:hidden">
                                                <p className="text-lg font-semibold">Date</p>
                                                <p>{moment.utc(v.set_date).utc().format('MMMM D, YYYY')}</p>
                                            </div>
                                            <div className="w-full flex flex-row justify-between lg:hidden">
                                                <p className="text-lg font-semibold">Time</p>
                                                <p>{moment.utc(v.set_date).utc().format('MMMM D, YYYY')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ""}

                    </div>
                </div>

                <div className="flex pt-10 justify-around">
                    {meta_sch ?
                        <Pagination meta={meta_sch} page_active={pageactive} set_page_active={setpageactive} />
                        : (
                            <div className="mb-20">Data Not Found</div>
                        )}

                </div>
                {meta_sch ?
                    <button className="w-full flex justify-center items-center my-10" onClick={() => navigate(`/order/${pickSch}`)}>
                        <div className="text-white bg-button px-5 py-3 rounded-md">
                            Book Now
                        </div>
                    </button>
                    : ""
                }

            </div>

            <Footer />
        </div>
    )
}

export default Detail