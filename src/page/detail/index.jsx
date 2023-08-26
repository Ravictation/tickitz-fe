import React from "react";
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'
//import { useParams } from "react-router-dom";
//import useApi from '../../helpers/useApi'
import MovieDetail from '../../component/moviedetail'
import bgFoto from '../../assets/background-1.png'
import foto from '../../assets/card1.png'
//import Select from 'react-select'

function Detail (){
    // const params= useParams()
    // const paramsId = params.id
    // const api = useApi()


    // const getDetail = async () =>{
    //     const respone = await api(``)
    //     const data = await respone.data.data
    // }


    return (
        <div>
            <Navbar/>

            <MovieDetail bgFoto={bgFoto} foto={foto}/>

            <div className="main-book">
                <div className="hidden lg:flex text-2xl md:px-16 lg:px-20 w-full">
                    Book Tickets
                </div>

                <div className="flex lg:hidden text-center justify-center xs:-mt-10 xs:mb-5 md:mt-8 text-2xl md:px-16 lg:px-20 w-full">
                    Showtimes and Tickets 
                </div>

                <div className="flex xl:justify-between xs:flex-col xs:gap-y-5 lg:flex-row lg:gap-x-5 w-full xs:px-10 md:px-16 lg:px-16 lg:mt-8">
                    <div className="choose-date flex flex-col">
                        <label className="font-semibold lg:ms-4">Choose Date</label>
                        <div className="border rounded-md bg-fontInput flex flex-row p-2 lg:ms-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>

                            <input
                            className="w-full lg:ms-5 text-black bg-fontInput"
                            placeholder="21/07/20"/>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="choose-time hidden lg:flex flex-col">
                        <label className="font-semibold lg:ms-4">Choose Time</label>
                        <div className="border rounded-md bg-fontInput flex flex-row p-2 lg:ms-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <input
                            className="w-full lg:ms-5 text-black bg-fontInput"
                            placeholder="08 : 30 AM"/>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="choose-date flex flex-col">
                        <label className="font-semibold lg:ms-4">Choose Location</label>
                        <div className="border rounded-md bg-fontInput flex flex-row p-2 lg:ms-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                      

                            <input
                            className="w-full lg:ms-5 text-black bg-fontInput"
                            placeholder="Purwokerto"/>
                    
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="filter rounded-md bg-button text-white xs:p-4 lg:p-0 lg:mt-6 lg:w-1/5 flex items-center justify-center ">
                        <button>Filter</button>
                    </div>
                </div>

                <div className="Choose-Cinema mt-5 lg:px-20">
                    <div className="text-cinema flex xs:flex-col lg:flex-row xs:w-full lg:w-1/4 justify-between">
                        <p className="font-semibold hidden lg:flex">Choose Cinema</p>
                        <p className="text-font xs:text-center lg:text-normal">39 Result</p>
                    </div>

                    <div className="flex xs:flex-col xs:gap-y-5 md:px-16 lg:gap-y-0 xs:px-10 lg:px-0 lg:flex-row mt-5 w-full justify-between">
                        <div className="border rounded-md cinema p-16 flex justify-center items-center">
                            Ebv.id
                        </div>

                        <div className="border rounded-md cinema p-16 cinema flex justify-center items-center">
                            Ebv.id
                        </div>

                        <div className="border rounded-md cinema p-16 cinema flex justify-center items-center">
                            Ebv.id
                        </div>

                        <div className="border rounded-md cinema p-16 cinema flex justify-center items-center">
                            Ebv.id
                        </div>
                    </div>
                </div>

                <div className="pagination mt-5 w-full mx-auto flex flex-row gap-x-5 justify-center items-center">
                    <div className="px-3 py-2 border bg-button text-white rounded-md">
                        1
                    </div>

                    <div className="px-3 py-2 border bg-white text-button rounded-md">
                        2
                    </div>

                    <div className="px-3 py-2 border bg-white text-button rounded-md">
                        3
                    </div>

                    <div className="px-3 py-2 border bg-white text-button rounded-md">
                        4
                    </div>
                </div>

                <button className="w-full flex justify-center items-center mt-10 ">
                    <div className="text-white bg-button px-5 py-3 rounded-md">    
                        Book Now
                    </div>
                </button>

            </div>

            <Footer/>
        </div>
    )
}

export default Detail