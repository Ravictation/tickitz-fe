import React from "react";

function CardMovie({name, image, genre}){

    return (
        <div>
            <div className="">
                <figure>
                    <img src={image} alt="" className="rounded-md"/>
                </figure>

                <div className="card-body">
                    <p></p>
                </div>
            </div>
        
        
        
        </div>
    )

}
export default CardMovie