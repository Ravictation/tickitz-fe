import React from "react";
import QR from "../assets/QR Code 2.png"
import { useState } from "react";

function Ticketscard ({premier, title, date, time, seats, total} ) {
    const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };
    return (
        <>
        <div className="bg-white flex flex-col w-full rounded-lg px-5 py-5">
            <div className="flex flex-row justify-between">
                <div>
                    <p>{`${date}-${time}`}</p>
                    <h1 className="font-bold text-2xl">{title}</h1>
                </div>
                <img src={premier} alt="" />
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col md:flex-row w-full gap-x-5">
                    <div className="bg-gray-300 text-gray-600 font-bold w-full md:w-40 text-center py-2 rounded-lg my-5 md:my-0">Ticket used</div>
                    <div className="bg-blue-200 text-blue-600 font-bold w-full md:w-40 text-center py-2 rounded-lg">Paid</div>
                </div>
                <div onClick={toggleShowDetails} className="cursor-pointer">
            {showDetails ? 'Hide Detail' : 'Show Detail'}
            <span className={`fa ${showDetails ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
          </div>
            </div>
            {showDetails && (
          <div className="flex flex-col md:flex-row mt-5 items-center gap-x-10">
           <div>
            <h1>Ticket Information</h1>
            <img src={QR} alt="" />
            </div>
            <div className="flex flex-row">
               
                <div className="flex flex-col gap-y-10">
                <div className="flex flex-row gap-x-10">
                    <div >
                        <p>Category</p>
                        <p>PG-13</p>
                    </div>
                    <div>
                        <p>Time</p>
                        <p>{time}</p>
                    </div>
                    <div>
                    <p>seats</p>
                    <p>{seats}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-x-10">
                    <div >
                        <p>Movie</p>
                        <p>{title}</p>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>{date}</p>
                    </div>
                    <div>
                    <p>Count</p>
                    <p>{seats}</p>
                    </div>
                </div>
                </div>
               <div className="mt-10 ml-10">
               <p className="font-bold text-2xl">Total</p>
                <p className="font-bold text-2xl">{total}</p>
               </div>
            </div>
          </div>
        )}
            {/* <div className="flex flex-row mt-5 items-center gap-x-10">
            <div>
            <h1>Ticket Information</h1>
            <img src={QR} alt="" />
            </div>
            <div className="flex flex-row">
               
                <div className="flex flex-col gap-y-10">
                <div className="flex flex-row gap-x-10">
                    <div >
                        <p>Category</p>
                        <p>PG-13</p>
                    </div>
                    <div>
                        <p>Time</p>
                        <p>{time}</p>
                    </div>
                    <div>
                    <p>seats</p>
                    <p>{seats}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-x-10">
                    <div >
                        <p>Movie</p>
                        <p>{title}</p>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>{date}</p>
                    </div>
                    <div>
                    <p>Count</p>
                    <p>{seats}</p>
                    </div>
                </div>
                </div>
               <div className="mt-10 ml-10">
               <p className="font-bold text-2xl">Total</p>
                <p className="font-bold text-2xl">{total}</p>
               </div>
            </div>
            </div> */}
        </div>
        </>
    )
}

export default Ticketscard