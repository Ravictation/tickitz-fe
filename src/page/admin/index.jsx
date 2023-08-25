import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Graph from "../../assets/Graph.jpg"

function Admin () {
    return (
        <>
        <Navbar/>
        <main className="bg-background flex flex-col w-full">
            <div className="bg-white px-10 py-5 w-4/5 mx-auto rounded-lg my-10">
                <h1 className="font-bold text-2xl">Sales Chart</h1>
                <div className="flex flex-row gap-x-5 mt-5">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Movies Name </option>
                    <option>Avengers : Endgame</option>
                    <option>Spider-Man: ComingHome</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Weekly </option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                    </select>
                    <button className="bg-blue-600 rounded-lg px-10 py-3 text-white">Filter</button>
                </div>
                <img className="" src={Graph} alt="" />

            </div>

            <div className="bg-white px-10 py-5 w-4/5 mx-auto rounded-lg my-10">
                <h1 className="font-bold text-2xl">Ticket Sales</h1>
                <div className="flex flex-row gap-x-5 mt-5">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Category </option>
                    <option>Avengers : Endgame</option>
                    <option>Spider-Man: ComingHome</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Location </option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                    </select>
                    <button className="bg-blue-600 rounded-lg px-10 py-3 text-white">Filter</button>
                </div>
                <img className="" src={Graph} alt="" />

            </div>

        </main>
        <Footer/>
        </>
    )
}

export default Admin