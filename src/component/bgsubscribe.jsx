import React from "react";
import BgSubscribe from '../assets/BG.png'
import BgSubscribe1 from '../assets/BG-1.png'

const Subscribe = () => {
    return (
        <div className="w-full mb-5">

            <img src={BgSubscribe} alt="backgroundSubscribe" className="w-screen object-cover hidden md:flex" />
            <img src={BgSubscribe1} alt="backgrounds" className="w-screen object-cover md:hidden flex" />



            <div className="absolute xs:-mt-72 xs:w-[50%] xl:mx-8 xl:-mt-64 sm:-mt-80 sm:mx-8 xs:mx-4 md:-mx-10 lg:mx-0 md:-mt-36 lg:-mt-44 md:w-[90%] lg:w-[90%] xl:w-[85%]">

                <div className="w-full text-center mb-5 xs:text-2xl sm:text-3xl text-white lg:text-4xl md:text-2xl sm:text-md">
                    <p>Subscribe to our newsletter</p>
                </div>

                <div className="w-full flex xs:flex-col xs:gap-y-3 md:flex-row justify-center items-center mx-auto">
                    <input
                        placeholder="First Name"
                        className="border rounded-md xs:w-auto xl:w-2/6 xl:p-4 flex p-2 border-white me-2" />

                    <input
                        placeholder="Email address"
                        className="xs:w-auto xl:w-2/6 xl:p-4 border rounded-md flex p-2 border-white me-2" />

                    <button className="xs:justify-center md:justify-normal border flex p-2 xl:p-4 xl:w-2/6 xs:w-[105%] xs:-ms-1 sm:w-[93%] md:w-auto bg-white rounded-md text-button font-semibold">
                        Subscribe Now
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Subscribe