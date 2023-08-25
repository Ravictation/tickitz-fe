import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import dummy from "../../assets/Vector-1.png"
import screen from "../../assets/screen.jpg"
import available from "../../assets/seatavail.jpg"
import selected from "../../assets/seat selected.png"
import sold from "../../assets/seatsold.png"
import lovenest from "../../assets/seatlove.png"

function Order () {
    return(
        <>
        <Navbar/>
        <main className="bg-background flex flex-col items-center pb-10">
        <div className="mt-7">
        <ul className="steps">
                <li className="step step-success">Dates and Time</li>
                <li className="step">Seat</li>
                <li className="step">Payment</li>
            </ul>
        </div>
        <div className="flex flex-row w-full mt-5">
            <div className="bg-white w-2/3 mx-5 rounded-lg px-5 py-5">
            <div className=" border border-gray-300 mt-5 px-5 py-5 flex flex-row gap-x-5">
                <img src={dummy} className="bg-cover bg-center w-1/3" alt="" />
                <div className="w-2/3">
                    <h1>Title</h1>
                    <div className="flex flex-row">
                    <div className="block bg-gray-100 rounded-lg px-2 py-1 text-gray-400">Genre</div>
                    <div className="block bg-gray-100 rounded-lg px-2 py-1 text-gray-400">Genre</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Date & time</p>
                    <button className="rounded-lg bg-blue-700 text-white px-5 py-2">Change</button>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h1 className="font-bold text-2xl">Choose Your Seat</h1>
                <img src={screen} className="ml-10 mt-5"/>
                <h1 className="font-bold text-xl">Seating Key</h1>
                <div className="flex flex-row gap-x-10 ml-10 mt-5">
                    <img src={available} alt="" />
                    <p>Available</p>
                    <img src={selected} alt="" />
                    <p>Selected</p>
                    <img src={lovenest} alt="" />
                    <p>Love Nest</p>
                    <img src={sold} alt="" />
                    <p>Sold</p>

                </div>
            </div>
            </div>
            <div className="w-1/3 mx-5 rounded-lg h-full">
                <div className="bg-white flex flex-col pt-10 pb-10 justify-items-center rounded-lg">
                    <img src={dummy} className="bg-cover w-1/2" alt="" />
                    <h1 className="font-bold text-xl text-center">Cinema</h1>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Movie Selected</p>
                        <p>Title</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Date</p>
                        <p>Time</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>One Ticket Price</p>
                        <p>Ticket</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Seat Choosed</p>
                        <p>C4, C5, C6</p>
                    </div>
                    <hr className="my-3 border-gray-300" />

                    <div className="flex flex-row justify-between mx-5">
                       <h1 className="font-bold text-xl">Total Payment</h1>
                       <h1 className="font-bold text-xl text-blue-600">$30</h1>
                    </div>
                </div>
                <button className="bg-blue-600 w-full py-5 text-white mt-10 rounded-lg">Checkout Now</button>
            </div>
            
            
        </div>
        </main>
        
        <Footer/>
        </>
    )
}

export default Order