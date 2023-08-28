import React, { useEffect } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Googlepay from "../../assets/logos_google-pay.png"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import useApi from "../../helpers/useApi";
import { Show } from "../../helpers/toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from 'moment'
import visa from "../../assets/logos_visa.png"
import gopay from "../../assets/Logo GoPay (SVG-240p) - FileVector69 1.png"
import paypal from "../../assets/logos_paypal.png"
import dana from "../../assets/Logo DANA (PNG-240p) - FileVector69 1.png"
import bca from "../../assets/Bank BCA Logo (SVG-240p) - FileVector69 1.png"
import bri from "../../assets/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.png"
import ovo from "../../assets/Vector.png"
import { UseSelector } from "react-redux/es/hooks/useSelector";



function Payment(){
    const { data, isAuth } = useSelector ((s) => s.users)
    const navigate = useNavigate()
    const api = useApi()
    const params = useParams()
    const now = new Date()
    const generateVirtualAccount = () => {
        const randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 10));
        const virtualAccountNumber = randomNumbers.join("");
        return virtualAccountNumber;
      };
    const {seats, scheduleid, date, time, premiere, title, price } = useSelector ((s)=> s.users)
    const ticketData = seats; 
    const ticketsArray = ticketData.split(",");
    const ticketCount = ticketsArray.length;
    const virtualAccount = generateVirtualAccount();
    const copyToClipboard = () => {
        navigator.clipboard.writeText(virtualAccount)
          .then(() => {
            console.log("Virtual account copied to clipboard");
          })
          .catch((error) => {
            console.error("Error copying to clipboard:", error);
          });
      };
      const purchase = async () => {
        try {
          const response = await api({
            method: 'post',
            url: `/bookings`,
            data: {
              seats: seats,
              id_time_schedule: scheduleid
            }
          });
          const direct = response.data.data
      
          if (response.status === 200) {
            Show('Purchase Ticket Success', 'success');
            setTimeout(() => {
              navigate(`/success/tickets/${direct}`);
            }, 3000);
          } else {
            Show('Purchase Ticket Failed', 'error');
          }
        } catch (error) {
          Show('An error occurred', 'error');
        }
      }
      useEffect(()=> {
        if(!isAuth){
          navigate("/")
        }
      })
    
    return(
        <>
        <Navbar/>
        <main className="w-full bg-background flex flex-col items-center pb-10">
        <ul className="steps">
                <li className="step step-success">Dates and Time</li>
                <li className="step step-success">Seats</li>
                <li className="step">Payment</li>
              </ul>

        <div className="bg-white w-3/4 px-10 py-10">
        <h1 className="font-bold text-2xl">Payment Info</h1>
        <p className="text-lg text-gray-300 mt-5">DATE & TIME</p>
        <p className="text-lg mt-3">{`Tuesday ${date} at ${time} WIB`}</p>
        <hr className="border-gray-300 my-3 w-full" />
        <p className="text-lg text-gray-300 mt-5">MOVIE TITLE</p>
        <p className="text-lg mt-3">{title}</p>
        <hr className="border-gray-300 my-3 w-full" />
        <p className="text-lg text-gray-300 mt-5">CINEMA NAME</p>
        <p className="text-lg mt-3">{premiere}</p>
        <hr className="border-gray-300 my-3 w-full" />
        <p className="text-lg text-gray-300 mt-5">NUMBER OF TICKETS</p>
        <p className="text-lg mt-3">{`${ticketCount} pieces`}</p>
        <hr className="border-gray-300 my-3 w-full" />
        <p className="text-lg text-gray-300 mt-5">TOTAL PAYMENT</p>
        <p className="text-lg mt-3 text-blue-800 font-bold">Rp. {ticketCount * price}</p>
        <hr className="border-gray-300 my-3 w-full" />

        <h1 className="font-bold text-2xl mt-10">PERSONAL INFORMATION</h1>
        <p className="text-lg text-gray-300 mt-5">FULL NAME</p>
        <input   
                        type="text"
                        className="border border-gray rounded-lg w-full text-black px-3 py-3 mb-6 "
                        placeholder={`${data.first_name} ${data.last_name}`}
                        />
                        <p className="text-lg text-gray-300 mt-5">EMAIL</p>
        <input
                        type="text"
                        className="border border-gray rounded-lg w-full text-black px-3 py-3 mb-6 "
                        placeholder={data.email_user}
                        />
                        <p className="text-lg text-gray-300 mt-5">PHONE NUMBER</p>
        <input      
                        type="text"
                        className="border border-gray rounded-lg w-full text-black px-3 py-3 mb-6 "
                        placeholder={data.phone_number}
                        />

        <h1 className="font-bold text-2xl mt-10">PAYMENT METHOD</h1>
        <div className="flex flex-col lg:flex-row gap-x-10 gap-y-10 mt-10">
            <div className="btn border border-gray-300 w-full  lg:w-1/5 py-auto  items-center flex justify-center items-center rounded-lg focus:outline-none focus:ring focus:ring-primary">
                <img src={Googlepay} alt=""/>
            </div>
            <div className="btn border border-gray-300 w-full lg:w-1/5 py-auto items-center flex justify-center items-center rounded-lg focus:outline-none focus:ring focus:ring-primary cursor-pointer">
                <img src={visa} alt=""/>
            </div>
            <div className="btn border border-gray-300 w-full lg:w-1/5 py-auto items-center flex justify-center items-center rounded-lg focus:outline-none focus:ring focus:ring-primary cursor-pointer">
                <img src={gopay} alt=""/>
            </div>
            <div className="btn border border-gray-300 w-full lg:w-1/5 py-auto items-center flex justify-center items-center rounded-lg focus:outline-none focus:ring focus:ring-primary cursor-pointer">
                <img src={paypal} alt=""/>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10 gap-y-10 mt-10">
            <div className="btn border border-gray-300 w-full  lg:w-1/5 py-auto  items-center flex justify-center items-center rounded-lg focus:outline-none focus:ring focus:ring-primary">
                <img src={dana} alt=""/>
            </div>
            <div className="btn border border-gray-300 w-full  lg:w-1/5 py-auto  items-center flex justify-center items-center rounded-lg focus:outline-none focus:ring focus:ring-primary">
                <img src={bca} alt=""/>
            </div>
            <div className="btn border border-gray-300 w-full  lg:w-1/5 py-auto  items-center flex justify-center items-center rounded-lg focus:outline-none focus:ring focus:ring-primary">
                <img src={bri} alt=""/>
            </div>
            <div className="btn border border-gray-300 w-full  lg:w-1/5 py-auto  items-center flex justify-center items-center rounded-lg focus:outline-none focus:ring focus:ring-primary">
                <img src={ovo} alt=""/>
            </div>
        </div>
        <button className="w-full bg-blue-700 text-white py-5 mt-5 font-bold " onClick={()=>window.my_modal_2.showModal()}>Pay your order</button>
            <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
            <h3 className="font-bold text-2xl text-center">Payment Info</h3>
            <div className="flex justify-between mt-5">
                <p>No Rekening Virtual</p>
                <p>{virtualAccount}</p>
                <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={copyToClipboard}>Copy</button>
            </div>
            <div className="flex justify-between mt-3">
                <p>Total Payment</p>
                <p className="text-blue-600">Rp.{ticketCount * price}</p>
             </div>
             <p>Pay this payment bill before it is due, <span className='text-rose-600'>{moment(now).add(2, 'day').format('DD MMMM YYYY')}.</span>. If the bill has not been paid by the specified time, it will be forfeited</p>
            
             <div className="btn text-white w-full bg-blue-700 mt-5" onClick={purchase}>Check Payment</div>
             <div className="text-center mt-3">
            <Link to="/" className="text-blue-700 text-xl">
                Pay Later
            </Link>
            </div>
            </form>
            
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </div>
        </main>
              <Footer/>
        </>
    )
}

export default Payment