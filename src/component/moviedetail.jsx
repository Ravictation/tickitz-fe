import React from "react";

function MovieDetail ({bgFoto, foto, title, directed, time, release, casts, synopsis}){
    return(
    <div>
        <div className="bg-cover bg-center">
            <img src={bgFoto} alt="" className="object-cover w-full md:max-h-[300px] xs:h-[400px] xs:object-cover"/>
        </div>

        <div className="wrapper-detail md:px-10 lg:px-0 md:grid md:grid-cols-6 xs:flex xs:flex-col">
            <div className="banner-detail md:grid md:col-start-1 md:col-span-2">
                <div className="rounded-md mx-auto flex items-center md:max-h-[50px] xs:max-h-[10px] xs:w-full md:w-fit">
                    <img src={foto} alt="" className="mx-auto md:h-[280px] md:w-fit xs:w-11/12 xs:object-cover"/>
                </div>
            </div>

            <div className="detail-info md:grid md:col-start-3 md:col-span-6 xs:mt-60 sm:mt-72 md:mt-0 xs:p-6 md:p-0">
                <div className="wrapper-detail-info flex flex-col">
                    <div className="wrapper-title-genre xs:text-center">
                        <h3 className="text-2xl flex font-semibold mt-2 xs:text-center xs:justify-center md:justify-normal">{title}</h3>
                        
                        <div className="wrapper-genre flex text-font flex-row text-xs gap-x-3 mt-3 xs:justify-center md:justify-normal xs:mb-3 md:mb-0">
                            <p className="bg-placeholder rounded-md p-0.5 px-2">Action</p>
                            <p className="bg-placeholder rounded-md p-0.5 px-2">Action</p>
                            <p className="bg-placeholder rounded-md p-0.5 px-2">Action</p>
                        </div>
                    </div>

                    <div className="info-movie mt-1 grid grid-rows-2 grid-cols-2">
                        <div className="box-info lg:py-1">
                            <p className="info-in-top text-xs text-font mb-1">Release Date</p>
                            <p className="info-in-bottom text-sm ">{release}</p>
                        </div>

                        <div className="col-8 box-info col lg:py-1">
                            <p className="info-in-top text-xs text-font mb-1">Duration</p>
                            <p className="info-in-bottom text-sm ">{time}</p>
                        </div>

                        <div className="col-4 box-info lg:py-1">
                            <p className="info-in-top text-xs text-font mb-1">Directed By</p>
                            <p className="info-in-bottom text-sm ">{directed}</p>
                        </div>

                        <div className="col-8 box-info lg:py-1">
                            <p className="info-in-top text-xs text-font mb-1">Casts</p>
                            <p className="info-in-bottom text-sm ">
                                {casts}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="wrappper-synopsis flex flex-col mb-10 xs:p-8 md:p-0 xs:-mt-8 md:mt-0 md:px-16 lg:px-20 lg:mt-5">
        <h3>Synopsis</h3>
        <p className="text-font text-sm text-justify">
            {synopsis}
        </p>
    </div>
    </div>
    )
}

export default MovieDetail