import React,{useState} from "react";
import img1 from '../assets/background-1.png'
import img2 from '../assets/background-2.jpeg'

const ImageSlide = ()=>{
    return(
        <div className="">
        
            <div className="carousel w-full max-h-[400px]">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full object-cover brightness-50" alt=""/>
                    <div className="absolute inset-y-28 inset-x-[70px] text-white">
                        <p>LIST MOVIE OF THE WEEK</p>
                        <p className="text-3xl leading-10">Experience the Magic of <br/>Cinema: Book Your Tickets <br/>Today</p>
                    </div>
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full object-cover brightness-50" alt=""/>
                    <div className="absolute inset-y-28 inset-x-[70px] text-white">
                        <p>LIST MOVIE OF THE WEEK</p>
                        <p className="text-3xl leading-10">Experience the Magic of <br/>Cinema: Book Your Tickets <br/>Today</p>
                    </div>
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src={img1} className="w-full object-cover brightness-50" alt="" />
                    <div className="absolute inset-y-28 inset-x-[70px] text-white">
                        <p>LIST MOVIE OF THE WEEK</p>
                        <p className="text-3xl leading-10">Experience the Magic of <br/>Cinema: Book Your Tickets <br/>Today</p>
                    </div>
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <img src={img2} className="w-full object-cover brightness-50" alt=""/>
                    <div className="absolute inset-y-28 inset-x-[70px] text-white">
                        <p>LIST MOVIE OF THE WEEK</p>
                        <p className="text-3xl leading-10">Experience the Magic of <br/>Cinema: Book Your Tickets <br/>Today</p>
                    </div>
                </div>
            </div> 
            <div className="absolute flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

            <div className="overflow-hidden relative">

            </div>

        </div>
    )
}

export default ImageSlide