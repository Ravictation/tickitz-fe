import React, {useState} from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Ticketscard from "../../component/tickets";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect,useRef } from "react";
import useApi from "../../helpers/useApi";
import { Show } from "../../helpers/toast";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/default-user.png"
import loyalty from "../../assets/loyalty.jpg"
import { useDispatch } from "react-redux";
import { addData } from "../../store/reducer/user";

function History () {
    const dispatch = useDispatch()
    const { data, isAuth } = useSelector((s)=>s.users)
    const [selectedFile, setSelectedFile] = useState(null);
    const [booking, setBooking] = useState([])
    const navigate = useNavigate()
    const api = useApi()
    
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
    const fetchUser = async () => {
      try {
          const { data } = await api.get('http://localhost:8081/user/');
          dispatch(addData(data.data));
          console.log(data);
      } catch (error) {
          console.log(error);
      }
    };
    const getBooking = async () => {
        try {
            const response = await api({
                method: "GET",
                url: "/bookings/user"
            });
            const data = response.data;
            setBooking(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    const UpdateImage = async () => {
      try { if (selectedFile) {
          const formData = new FormData();
          formData.append("image_user", selectedFile);

              const { data } = await api({
                  url: "/user/image",
                  method: "PATCH",
                  data: formData,
                  headers: {
                      'Content-Type': 'multipart/form-data',
                    },
              });
             
          }
         
                  Show("Image updated successfully", "success");
                  window.location.reload();
              
      } catch (error) {
          console.error("Error updating image:", error);
          Show("Error updating image", "error");
      }
  };

useEffect(() =>{
  if (isAuth) {
      fetchUser();
  }
}, [isAuth]);
    
useEffect(() =>{
    getBooking();
}, [ ])


    return (
    <>
       <Navbar />
      <main className="bg-background w-full flex flex-row mx-auto py-5 px-10 gap-x-10">
        <div className="w-1/4 bg-white rounded-lg flex flex-col items-center pt-5 pb-5">
          <p className="text-left">INFO</p>
          <div className="flex flex-col justify-center items-center relative group">
          <img  src={data.image_user} className="w-20 md:w-28 cursor-pointer" alt="profile_picture" />
                <p className="btn mt-10" onClick={UpdateImage} >update image</p>
                 <span className="flex items-center gap-4 mt-3">
                <input type="file" name="image_user" onChange={handleFileChange} />
                </span>
          </div>
          <p className="font-bold text-xl mt-5">{`${data.first_name} ${data.last_name}`}</p>
          <p className="mt-5">Moviegoers</p>
          <hr className="border-gray-300 my-3 w-full" />
          <img className="mt-5" src={loyalty} alt="Loyalty" />
          <p className="mt-5 mb-5">180 points become a master</p>
          <progress className="progress progress-info w-56 mb-5" value="40" max="100"></progress>
        </div>
        <div className="w-3/4 flex flex-col gap-y-10">
          <div className="bg-white rounded-lg py-5 px-5 ">
            <Link to="/profile" className="">Account Settings</Link>
            <Link to="/profile/history" className="ml-5 font-medium border-b-2 border-blue-700 py-5">Order History</Link>
          </div>
          {booking ? (
            booking.map((v) => {
            return <Ticketscard premier={v.schedule[0].image_premier} title={v.schedule[0].title} date={v.schedule[0].set_date} time={v.schedule[0].time_schedule} seats={v.seats} total={v.total}/>
          })):
          (<h1>Data Not Found</h1>)}
        </div>
      </main>
      <Footer />
        </>
    )
}

export default History