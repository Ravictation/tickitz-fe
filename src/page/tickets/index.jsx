import React, { useState } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import background from "../../assets/background.png"
import tickitz from "../../assets/tickitz 1.png"
import tiket from "../../assets/Ticket.png"
import Ticketscard from "../../component/tickets";
import { useParams } from "react-router-dom";
import useApi from "../../helpers/useApi";
import { useEffect } from "react";

function Tickets() {
    const params = useParams()
    const api = useApi()
    const [details, setDetails] = useState([])
    const [schedule, setSchedule] = useState('')
    const [count, setCount] = useState('')
    const getMovies = async () => {
        try {
            const response = await api({ method: 'get', url: `/bookings?id_booking=${params.id}` });
            const data = response.data;
            setDetails(data.data[0])
            setSchedule(data.data[0].schedule[0])
            console.log(data);
            const ticketData = data.data[0].seats 
            const ticketsArray = ticketData.split(",");
            const ticketCount = ticketsArray.length;
            setCount(ticketCount)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovies();
    }, []);
    
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
       <div>
       <img src={tiket} className="h-full mt-20" alt="" />
       <div className="bg-white pb-10">
       <div className="flex flex-row justify-between mx-5 pt-5">
            <div>
                <p>Movie</p>
                <p className="font-bold">{schedule.title}</p>
            </div>
            <div>
                <p>Category</p>
                <p className="font-bold">PG-13</p>
            </div>
       </div>
       <div className="flex flex-row justify-between mx-5 pt-5">
            <div>
                <p>Date</p>
                <p className="font-bold">{schedule.set_date}</p>
            </div>
            <div>
                <p>Time</p>
                <p className="font-bold">{schedule.time_schedule}</p>
            </div>
       </div>
       <div className="flex flex-row justify-between mx-5 pt-5">
            <div>
                <p>Count</p>
                <p className="font-bold">{count}</p>
            </div>
            <div>
                <p>Seats</p>
                <p className="font-bold">{details.seats}</p>
            </div>
       </div>
       <div className="flex items-center justify-center pt-5">
       <div className="border px-5 py-2 flex justify-between w-3/4">
        <h1>Total</h1>
        <h1 className="font-bold">{details.total}</h1>
       </div>
       </div>
       </div>
       </div>
       <button className="w-full border border-blue-600 py-3 text-blue-600 font-bold">Download</button>
       <button className="w-full border bg-blue-600 text-white font-bold py-3">Done</button>
       </div>
        </main>
        <Footer/>
        </>
    )
}

export default Tickets