import React from "react";
import { useNavigate } from "react-router-dom";

function CardMovie({id, name, image, genre}){

const navigate = useNavigate()
    
    return (
        <div>
            <div className="card-movie w-32 h-fit group">
                <div className="card-overflow relative overflow-hidden">
                    <img src={image} className="object-cover" alt=""/>
                    <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-0 group-hover:bottom:0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex flex-col gap-y-2">
                            <button className="border text-white rounded-md p-2 text-sm" onClick={()=>navigate(`/movie/detail/${id}`)}>
                                Details
                            </button>

                            <button className=" bg-button rounded-md p-2 text-sm" onClick={()=>navigate(`/movie/detail/:${id}`)}>
                                Buy Ticket
                            </button>
                        </div>
                    </div>
                </div>

                <div className="body-card mt-2">
                <h6 className="text-md mb-3 tracking-wide font-semibold">{name}</h6>
                <div className="flex flex-row">
                {genre ? 
                    genre.map((v, index)=> {
                        return (
                            <div>
                            <h8 className={`mt-2 me-2 p-1 px-2 border rounded-md bg-slate-500 text-slate-600 w-full ${index == 2 ? 'hidden': ''}`}>
                                {v.name_genre}
                            </h8>
                            </div>
                        )}) : ''                    
                }
                </div>
                </div>
            </div>
        
        </div>
    )

}
export default CardMovie