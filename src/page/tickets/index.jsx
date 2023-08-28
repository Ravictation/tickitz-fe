import React, { useState } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import background from "../../assets/background.png"
import tickitz from "../../assets/tickitz 1.png"
import tiket from "../../assets/Ticket.png"
import Ticketscard from "../../component/tickets";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../helpers/useApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
function Tickets() {
    const params = useParams()
    const { isAuth } = useSelector((s)=>s.users)
    const navigate = useNavigate()
    const api = useApi()
    const [details, setDetails] = useState([])
    const [schedule, setSchedule] = useState('')
    const [count, setCount] = useState('')
    const [timer, settimer] = useState('')
    const getMovies = async () => {
        try {
            const response = await api({ method: 'get', url: `/bookings?id_booking=${params.id}` });
            const data = response.data;
            console.log(data)
            setDetails(data.data[0])
            settimer(data.data[0].schedule[0].time_schedule.split(":")[0] + ":" + data.data[0].schedule[0].time_schedule.split(":")[1] + " WIB")
            setSchedule(data.data[0].schedule[0])
            const ticketData = data.data[0].seats 
            const ticketsArray = ticketData.split(",");
            const ticketCount = ticketsArray.length;
            setCount(ticketCount)
        } catch (error) {
            console.log(error);
        }
    };
    console.log(timer)
    useEffect(() => {
        getMovies();
        if(!isAuth){
            navigate('/')
        }
    }, []);
    
    return(
        <>
        <Navbar/>
        <main className="w-full bg-background flex flex-col lg:flex-row gap-x-20 items-center justify-center">
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
       <div className="w-full ">
       <img src={tiket} className="h-full mt-20" alt="" />
       <div className="bg-white pb-10 w-full">
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
                <p className="font-bold">{moment.utc(schedule.set_date).utc().format('dddd, DD MMMM YYYY')}</p>
            </div>
            <div>
                <p>Time</p>
                <p className="font-bold">{timer}</p>
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
       <Link to="/profile/history" className="btn w-full border bg-blue-600 text-white font-bold py-3">Done</Link>
       </div>
        </main>
        <Footer/>
        </>
    )
}

export default Tickets