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

function History () {
    const { data, isAuth } = useSelector((s)=>s.users)
    const [image, setImage] = useState('')
    const [state, setState] = useState(true)
    const [booking, setBooking] = useState([])
    const navigate = useNavigate()
    const api = useApi()
    const onImageClick = () => {
        inputRef.current.click()
    }
    const inputRef = useRef(null)
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        setImage(file)
        setState(false)
    }
    const getBooking = async () => {
        try {
            const response = await api({
                method: "GET",
                url: "/bookings/user"
            });
            const data = response.data;
            setBooking(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    const UpdateImage = async () => {
        try {
            if (image) {
                const formData = new FormData();
                formData.append("image_user", image);

                const { data } = await api({
                    url: "/user/image",
                    method: "PATCH",
                    data: formData,
                });

                if (data.status === 200) {
                    Show("Image updated successfully", "success");
                    navigate("/home");
                }
            }
        } catch (error) {
            console.error("Error updating image:", error);
            Show("Error updating image", "error");
        }
    };
useEffect(() =>{
    getBooking();
}, [state,  ])


    return (
    <>
       <Navbar />
      <main className="bg-background w-full flex flex-row mx-auto py-5 px-10 gap-x-10">
        <div className="w-1/4 bg-white rounded-lg flex flex-col items-center pt-5 pb-5">
          <p className="text-left">INFO</p>
          <div className="flex flex-col justify-center items-center relative group">
            <button
              onClick={onImageClick} // Make sure to define onImageClick function
              className="hover:bg-primary hover:text-white group-hover:flex hidden rounded-lg btn absolute border-none"
            >
              Change <br /> Image
            </button>
            <img
              onClick={onImageClick} // Make sure to define onImageClick function
              src={
                image
                  ? URL.createObjectURL(image)
                  : data.image_user == null
                  ? profile
                  : data.image_user
              }
              className="w-20 md:w-28 cursor-pointer"
              alt="profile_picture"
            />
            <p className="btn mt-10" onClick={UpdateImage}>update image</p> {/* Make sure to define UpdateImage function */}
            <span className="flex items-center gap-4 mt-3">
              <input
                type="file"
                name="image_user"
                onChange={handleImageChange} // Make sure to define handleImageChange function
                ref={inputRef}
                style={{ display: "none" }}
              />
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
            <Link to="/profile" className="mr-5 font-medium border-b-2 border-blue-700 py-5">Account Settings</Link>
            <Link to="/profile/history">Order History</Link>
          </div>
          {booking.length > 0 ? (
            booking.map((v) => (
              <Ticketscard
                premier={v.data[0].schedule[0].image_premier}
                title={v.data[0].title}
                date={v.data[0].schedule[0].set_date}
                time={v.data[0].time_schedule}
                seats={v.data[0].seats}
                total={v.data[0].total}
              />
            ))
          ) : (
            <h1>Data Not Found</h1>
          )}
        </div>
      </main>
      <Footer />
        </>
    )
}

export default History