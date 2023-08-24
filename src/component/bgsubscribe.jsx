import React from "react";
import BgSubscribe from '../assets/BG.png'

const Subscribe = ()=>{
    return (
        <div className="w-full">
            <img src={BgSubscribe} alt="backgroundSubscribe" className="w-screen object-cover"/>

            <div className="absolute lg:inset-y-[800px] inset-x-[100px] md:inset-y-[700px] ">
                <div className="w-full lg:text-4xl md:text-2xl sm:text-md">
                    <p>Subscribe to our newsletter</p>
                </div>

                <div className="w-full mx-auto">
                    <input
                    placeholder="First Name" 
                    className="border border-white me-2"/>

                    <input
                    placeholder="Email address" 
                    className="border border-white me-2"/>

                    <input
                    placeholder="First Name" 
                    className=""/>
                </div>
            </div>
        
        </div>
    )
}

export default Subscribe