import React,{useState} from "react";
import img1 from '../assets/background-1.png'
import img2 from '../assets/background-2.jpeg'

const ImageSlide = ()=>{
    const [slideIndex, setSlider] = useState(1)
    return(
        <div>
            <div className='relative'>
            <div className="carousel w-full h-[400px]">
                <div id="item1" className="carousel-item w-full">
                <img src={img1} className="w-full object-cover" alt=''/>
                </div> 
                <div id="item2" className="carousel-item w-full">
                <img src={img2} className="w-full object-cover" alt=""/>
                </div> 
                <div id="item3" className="carousel-item w-full h-full">
                <img src={img1} className="w-full object-cover" alt=""/>
                </div> 
                <div className="absolute w-full bg-black opacity-60 h-[400px]"> </div>

            </div> 

            <div className='absolute top-20 text-white  w-[100%] max-w-7xl left-0 right-0 mx-auto'>
                <div className='w-[250px] md:w-[500px] flex flex-col ml-5'>
                    <span className='text-xl md:text-2xl font=semibold mb-4'>LIST MOVIE OF THE WEEK</span>
                    <span className='text-3xl md:text-5xl leading-10 md:leading-tight'>Experience the Magic of Cinema: Book Your Ticket Today</span>
                </div>
                <div className='flex justify-center items-center gap-5 pt-12  '>
                    <a href ='#item1' onClick={() => setSlider(1)} className={ slideIndex === 1 ? 'w-16 h-2 bg-blue-700 rounded-lg cursor-pointer' : 'w-2 h-2 bg-white rounded-lg cursor-pointer'} ></a>
                    <a href ='#item2' onClick={() => setSlider(2)} className={ slideIndex === 2 ? 'w-16 h-2 bg-blue-700 rounded-lg cursor-pointer' : 'w-2 h-2 bg-white rounded-lg cursor-pointer'} ></a>
                    <a href ='#item3' onClick={() => setSlider(3)} className={ slideIndex === 3 ? 'w-16 h-2 bg-blue-700 rounded-lg cursor-pointer' : 'w-2 h-2 bg-white rounded-lg cursor-pointer'} ></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ImageSlide