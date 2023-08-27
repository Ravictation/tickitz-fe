import React from "react";
import moment from "moment/moment";

function MovieDetail({ bgFoto, genre, foto, title, directed, hour, time, release, casts, synopsis }) {
    let s = ""
    function capitalTitle(text) {
        return (text.replace(/\w\S*/g, function (word) {
            const newWord = word.slice(0, 1).toUpperCase() + word.substr(1);
            return newWord
        }))
    }
    return (
        <div>
            <div className="bg-cover bg-center">
                <img src={bgFoto} alt="" className="object-cover w-full md:max-h-[300px] xs:h-[400px] xs:object-cover" />
            </div>

            <div className="wrapper-detail md:px-10 lg:px-0 md:grid md:grid-cols-6 xs:flex xs:flex-col">
                <div className="banner-detail md:grid md:col-start-1 md:col-span-2">
                    <div className="rounded-md mx-auto flex justify-center items-center md:max-h-[70px] xs:max-h-[10px] xs:w-full md:w-fit">
                        <div className="w-56 h-96">
                            <img src={foto} alt="" className="h-full object-cover rounded-xl" />
                        </div>
                    </div>
                </div>

                <div className="detail-info md:grid md:col-start-3 md:col-span-6 xs:mt-60 sm:mt-25 md:mt-0 xs:p-6 md:p-0">
                    <div className="wrapper-detail-info flex flex-col">
                        <div className="wrapper-title-genre xs:text-center">
                            <h3 className="text-3xl flex font-semibold mt-2 xs:text-center xs:justify-center md:justify-normal">{capitalTitle(title)}</h3>

                            <div className="wrapper-genre flex text-font flex-row text-xs gap-x-3 mt-3 xs:justify-center md:justify-normal xs:mb-3 md:mb-0">
                                {genre ?
                                    genre.map((v) => {
                                        return (
                                            <p key={v.name_genre} className="bg-[#A0A3BD] opacity-50 text-black rounded-md p-1 px-3 flex justify-center items-center">{capitalTitle(v.name_genre)}</p>
                                        )
                                    }) : ""}
                            </div>
                        </div>

                        <div className="info-movie mt-5 grid grid-rows-2 grid-cols-2">
                            <div className="box-info lg:pb-5">
                                <p className="info-in-top text-md text-font mb-1">Release Date</p>
                                <p className="info-in-bottom text-md md:text-xl">{moment.utc(release).utc().format('MMMM D, YYYY')}</p>
                            </div>
                            <div className="col-8 box-info col lg:pb-5">
                                <p className="info-in-top text-md text-font mb-1">Duration</p>
                                <p className="info-in-bottom text-md md:text-xl">
                                    {hour} Hours {time} Minutes</p>
                            </div>
                            <div className="col-4 box-info lg:pb-5">
                                <p className="info-in-top text-md text-font mb-1">Directed By</p>
                                {
                                    directed ?
                                        directed.map((v) => {
                                            return (
                                                <p key={v.name_director} className="info-in-bottom text-md md:text-xl">
                                                    {capitalTitle(v.name_director)}
                                                </p>
                                            )
                                        }) : ""
                                }
                            </div>
                            <div className="col-8 box-info lg:pb-5">
                                <p className="info-in-top text-md text-font mb-1">Casts</p>
                                <div className="flex flex-row">
                                    {
                                        casts ?
                                            casts.map((v, i) => {
                                                s = s + (i + 1 == casts.length ? v.name_cast : v.name_cast + ", ")
                                                if (i + 1 == casts.length) {
                                                    return (<p key={i} className="info-in-bottom text-md md:text-xl">{capitalTitle(s)}</p>)
                                                }
                                            }) : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrappper-synopsis flex flex-col mb-20 xs:p-8 md:p-0 xs:-mt-8 md:mt-5 md:px-16 lg:px-20 lg:mt-5">
                <h3 className="info-in-top text-xl mb-1 font-semibold">Synopsis</h3>
                <p className="info-in-bottom text-font text-md md:text-md">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

export default MovieDetail