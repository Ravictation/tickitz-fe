import React, {useState, useEffect} from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import dummy from "../../assets/Vector-1.png"
import screen from "../../assets/screen.jpg"
import available from "../../assets/seatavail.jpg"
import selected from "../../assets/seat selected.png"
import sold from "../../assets/seatsold.png"
import lovenest from "../../assets/seatlove.png"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { confirmationdetails, confirmationseats } from "../../store/reducer/user";
function Order () {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate
    const [details, setDetails] = useState([])
    const [image, setImage] = useState('')
    const [storeData, setStoreData] = useState({})
    const { seats, title, premiere, date, time, tickets } = useSelector ((s) => s.users)

    

    const inputChange = (e) => {
        const data = {...storeData}
        data[e.target.name] = e.target.value
        setStoreData(data)
      }
    const getMovies = async () => {
        try {
            const {data} = await axios.get('http://localhost:8081/times_schedules/' + params.id)
            setDetails(data.data[0])
            setImage(data.data[0].image_premier)
            dispatch(
                confirmationdetails({
                  title: data.data[0].title,
                  premiere: data.data[0].name_premier,
                  date: data.data[0].set_date,
                  time: data.data[0].time_schedule,
                  scheduleid: data.data[0].id_time_schedule,
                  price : data.data[0].price
                })
              );
              
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getMovies()
      }, [])
 
      const handleContinue = () => {
        dispatch(confirmationseats(storeData))
      }
    return(
        <>
        <Navbar/>
        <main className="bg-background flex flex-col items-center pb-10">
        <div className="mt-7">
        <ul className="steps">
                <li className="step step-success">Dates and Time</li>
                <li className="step">Seat</li>
                <li className="step">Payment</li>
            </ul>
        </div>
        <div className="flex flex-row w-full mt-5">
            <div className="bg-white w-full lg:w-2/3 mx-5 rounded-lg px-5 py-5">
            <div className=" border border-gray-300 mt-5 px-5 py-5 flex flex-row gap-x-5">
                <img src={image} className="bg-cover bg-center w-1/3" alt="" />
                <div className="w-2/3">
                    <h1>{details.title}</h1>
                    <div className="flex flex-row">
                    <div className="block bg-gray-100 rounded-lg px-2 py-1 text-gray-400">Genre</div>
                    <div className="block bg-gray-100 rounded-lg px-2 py-1 text-gray-400">Genre</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>{`Regular - ${details.time_schedule}`}</p>
                    <button className="rounded-lg bg-blue-700 text-white px-5 py-2" onClick={() => navigate(`/movie/detail/${details.id_movie}`)}>Change</button>
                    </div>
                </div>
            </div>

            <div className="mt-8 ">
                <h1 className="font-bold text-2xl">Choose Your Seat</h1>
                <img src={screen} className="ml-10 mt-5"/>
                <h1 className="font-bold text-xl">Seating Key</h1>
                <div className="flex flex-row lg:gap-x-10 ml-10 mt-5">
                    <img src={available} alt="" />
                    <p>Available</p>
                    <img src={selected} alt="" />
                    <p>Selected</p>
                    <img src={lovenest} alt="" />
                    <p>Love Nest</p>
                    <img src={sold} alt="" />
                    <p>Sold</p>
                
                </div>
                <p className="btn flex lg:hidden mt-5 " onClick={()=>window.my_modal_2.showModal()}>Choose Seat</p>
                <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                <div className="bg-white flex flex-col pt-10 pb-10 justify-items-center rounded-lg">
                   <div className="items-center justify-center flex">
                   <img src={image} className="bg-cover w-1/2" alt="" />
                   </div>
                    <h1 className="font-bold text-xl text-center">{details.name_premier}</h1>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Movie Selected</p>
                        <p>{details.title}</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Date</p>
                        <p>{details.time_schedule}</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>One Ticket Price</p>
                        <p>{details.price}</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Seat Choosed</p>
                        <input type="text" className="border border-gray-300 py-2 px-5 rounded-lg" placeholder="input your seats" name="seats" onChange={inputChange}/>
                    </div>
                    <hr className="my-3 border-gray-300" />

                    <div className="flex flex-row justify-between mx-5">
                       <h1 className="font-bold text-xl">Price per Seat</h1>
                       <h1 className="font-bold text-xl text-blue-600">{details.price}</h1>
                    </div>
                </div>
                <Link to="/payment" className="block bg-blue-600 w-full py-5 text-white mt-10 rounded-lg text-center" onClick={handleContinue}>Checkout Now</Link>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                </dialog>
            </div>
            </div>
            <div className="w-1/3 mx-5 rounded-lg h-full hidden lg:block">
                <div className="bg-white flex flex-col pt-10 pb-10 justify-items-center rounded-lg">
                   <div className="items-center justify-center flex">
                   <img src={image} className="bg-cover w-1/2" alt="" />
                   </div>
                    <h1 className="font-bold text-xl text-center">{details.name_premier}</h1>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Movie Selected</p>
                        <p>{details.title}</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Date</p>
                        <p>{details.time_schedule}</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>One Ticket Price</p>
                        <p>{details.price}</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5">
                        <p>Seat Choosed</p>
                        <input type="text" className="border border-gray-300 py-2 px-5 rounded-lg" placeholder="input your seats" name="seats" onChange={inputChange}/>
                    </div>
                    <hr className="my-3 border-gray-300" />

                    <div className="flex flex-row justify-between mx-5">
                       <h1 className="font-bold text-xl">Price per Seat</h1>
                       <h1 className="font-bold text-xl text-blue-600">{details.price}</h1>
                    </div>
                </div>
                <Link to="/payment" className="block bg-blue-600 w-full py-5 text-white mt-10 rounded-lg text-center" onClick={handleContinue}>Checkout Now</Link>
            </div>
            
            
        </div>
        </main>
        
        <Footer/>
        </>
    )
}

export default Order