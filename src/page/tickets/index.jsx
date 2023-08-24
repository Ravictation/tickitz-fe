import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import background from "../../assets/background.png"
import tickitz from "../../assets/tickitz 1.png"
import tiket from "../../assets/Ticket.png"
import Ticketscard from "../../component/tickets";

function Tickets() {
    return(
        <>
        <Navbar/>
        <main className="w-full bg-background flex flex-row gap-x-20">
        <div className="relative">
        <img src={background} className=" object-cover brightness-50" alt="" />
        <div className="absolute inset-0 flex ml-40 items-start justify-center flex-col">
        <img src={tickitz} alt="" />
        <h1 className="text-white text-2xl font-bold">Thank you for purchasing</h1>
        <p className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="text-white">please download your ticket</p>
         </div>
        </div>
       <div className="h-full flex flex-col gap-y-5">
       <img src={tiket} className="h-full mt-20" alt="" />
       <button className="w-full border border-blue-600 py-3 text-blue-600 font-bold">Download</button>
       <button className="w-full border bg-blue-600 text-white font-bold py-3">Done</button>
       </div>
        </main>
        <Footer/>
        </>
    )
}

export default Tickets