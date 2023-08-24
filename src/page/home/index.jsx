import React from "react";
import Navbar from "../../component/navbar";
import ImageSlide from "../../component/imageslide";
import Footer from "../../component/footer";
import BgSubscribe from '../../component/bgsubscribe'

function Home(){
    return(
       <>
       <Navbar/>
       <ImageSlide/>

       <section className="main-section px-20 mt-20">
        <div className="hidden lg:flex genre-search-movie w-full">
            <div className="w-2/6">
                <label>Cari Event</label>
                <form className="w-full mt-3 flex border border-gray p-3 gap-x-5 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                <input 
                placeholder="Search Movie"
                type="text"
                className="outline-none"
                />
                </form>
            </div>

            <div className="filter-genre w-3/5">
                <div></div>
            </div>
        </div>
       </section>

       <div className="w-full pagination flex ">
            <div className="flex mx-auto gap-x-5">
                <div className="border rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </div>

                <div className="border rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </div>
            </div>
       </div>

       <div className="subscribe px-20 mt-10">
            <BgSubscribe/>
       </div>
       <Footer/>
       </>
    )
}

export default Home