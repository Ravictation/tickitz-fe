import React from "react";
import dummy from "../assets/Vector-1.png"

function Ticketscard () {
    return (
        <>
        <div className="bg-white flex flex-col w-2/3 px-5 py-5">
            <div className="flex flex-row justify-between">
                <div>
                    <p>Date& time</p>
                    <h1 className="font-bold text-2xl">Movie Title</h1>
                </div>
                <img src={dummy} alt="" />
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-5">
                    <div className="bg-green-200 text-green-600 w-40 text-center py-2 rounded-lg">Ticket in Active</div>
                    <div className="bg-red-200 text-red-600 w-40 text-center py-2 rounded-lg">Not Paid</div>
                </div>
                <div>Show Detail <span class="fa fa-dropdown"></span></div>
            </div>
        </div>
        </>
    )
}

export default Ticketscard