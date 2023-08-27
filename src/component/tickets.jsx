import React from "react";
import QR from "../assets/QR Code 2.png"


function Ticketscard ({premier, title, date, time, seats, total} ) {

    return (
        <>
        <div className="bg-white flex flex-col w-2/3 px-5 py-5">
            <div className="flex flex-row justify-between">
                <div>
                    <p>{`${date}-${time}`}</p>
                    <h1 className="font-bold text-2xl">{title}</h1>
                </div>
                <img src={premier} alt="" />
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-5">
                    <div className="bg-green-200 text-green-600 w-40 text-center py-2 rounded-lg">Ticket used</div>
                    <div className="bg-red-200 text-red-600 w-40 text-center py-2 rounded-lg">Paid</div>
                </div>
                <div>Show Detail <span class="fa fa-dropdown"></span></div>
            </div>
            <h1>Ticket Information</h1>
            <div className="flex flex-row">
                <img src={QR} alt="" />
                <p>Category</p>
                <p>Time</p>
                <p>{time}</p>
                <p>seats</p>
                <p>{seats}</p>
                <p>Total</p>
                <p>{total}</p>
            </div>
        </div>
        </>
    )
}

export default Ticketscard