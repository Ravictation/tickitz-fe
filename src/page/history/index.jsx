import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Ticketscard from "../../component/tickets";

function History () {
    return (
        <>
        <Navbar/>
        <main className="w-full bg-background">
        <div className="w-1/3">

        </div>
        <div className="w-2/3">
        <Ticketscard/>
        <Ticketscard/>
        <Ticketscard/>
        </div>
        </main>
        <Footer/>
        </>
    )
}

export default History