import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import loyalty from "../../assets/loyalty.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Show } from "../../helpers/toast";
import { useNavigate } from "react-router-dom";
import useApi from "../../helpers/useApi";
import profile from "../../assets/default-user.png"
import { useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
    const { data, isAuth } = useSelector((s)=>s.users)
    const navigate = useNavigate()
    const api = useApi()
    const [image, setImage] = useState('')
    const [state, setState] = useState(true)
    const inputChange = (e) => {
    const data = { ...form };
    const formData = new FormData()
    data[e.target.name] = e.target.value;
    setForm(data);
    };
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
    const [form, setForm] = useState({});
    const Update = () =>
            api({
            method : 'PATCH',
            url : '/user',
            data : form
            }) 
            .then(({data})=>{
            Show('Data Updated', 'success');
            setTimeout(()=> {
                navigate('/')
            }, 3050)
            })
            .catch((err)=>{
            const axiosErr = err.response.data
            if (axiosErr.message !== undefined) {
                Show(axiosErr.message, 'warning')
            } else if (axiosErr.error !== undefined) {
                Show(axiosErr.error, 'error')
        }})

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
        console.log(state)
    }, [state])
    return(
        <>
        <Navbar/>
        <main className="bg-background w-full flex flex-row mx-auto py-5 px-10 gap-x-10">
            <div className="w-1/4 bg-white rounded-lg flex flex-col items-center pt-5 pb-5">
                <p className="text-left">INFO</p>
                <div className="flex flex-col justify-center items-center relative group">
                <btn onClick={onImageClick} className=" hover:bg-primary hover:text-white group-hover:flex hidden  rounded-lg btn absolute border-none">Change <br /> Image</btn>
                <img onClick={onImageClick} src={image ? URL.createObjectURL(image) : (data.image_user == null ? profile : data.image_user)} className="w-20 md:w-28 cursor-pointer" alt="profile_picture" />
                <p className="btn mt-10" onClick={UpdateImage}>update image</p>
                 <span className="flex items-center gap-4 mt-3">
                <input type="file" name="image_user" onChange={handleImageChange} ref={inputRef} style={{ display: "none" }} />
                </span>
                </div>
                <p className="font-bold text-xl mt-5">Jonas El Rodriguez</p>
                <p className="mt-5">Moviegoers</p>
                <hr className="border-gray-300 my-3 w-full" />
                <img className="mt-5" src={loyalty} alt="" />
                <p className="mt-5 mb-5">180 points become a master</p>
                <progress className="progress progress-info w-56 mb-5" value="40" max="100"></progress>
            </div>
            <div className="w-3/4 flex flex-col gap-y-10">
                <div className="bg-white rounded-lg py-5 px-5 ">
                    <Link to="/profile" className="mr-5 font-medium border-b-2 border-blue-700 py-5">Account Settings</Link>
                    <Link to="/history">Order History</Link>
                    </div>
                <div className="bg-white rounded-lg py-5 px-5">
                    <p>Details Information</p>
                    <hr className="border-gray-300 my-3 w-full" />
                    <div className="form-card flex flex-col md:flex-row flex-wrap ml-8 mt-12 mr-8 pb-16">
                    <div className="form w-full md:w-1/2">
                        <p className="mb-3">First Name</p>
                        <input
                        name="first_name"
                        type="text"
                        className="border border-gray rounded-lg w-3/4 text-black px-3 py-3 mb-6 "
                        placeholder="Jonas"
                        onChange={inputChange}
                        />
                    </div>
                    <div className="form w-full md:w-1/2">
                        <p className="mb-3">Last Name</p>
                        <input
                        name="last_name"
                        type="text"
                        className="border border-gray rounded-lg w-3/4 text-black px-3 py-3 mb-6 "
                        placeholder="Jonas"
                        onChange={inputChange}
                        />
                    </div>
                    <div className="form w-full md:w-1/2">
                        <p className="mb-3">E-mail</p>
                        <input
                        name="email_user"
                        type="text"
                        className="border border-gray rounded-lg w-3/4 text-black px-3 py-3 mb-6 "
                        placeholder="Jonas"
                        onChange={inputChange}
                        />
                    </div>
                    <div className="form w-full md:w-1/2">
                        <p className="mb-3">Phone Number</p>
                        <input
                        name="phone_number"
                        type="text"
                        className="border border-gray rounded-lg w-3/4 text-black px-3 py-3 mb-6 "
                        placeholder="Jonas"
                        onChange={inputChange}
                        />
                    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg py-5 px-5">
                    <p>Accounts & privacy</p>
                    <hr className="border-gray-300 my-3 w-full" />
                    <div className="flex flex-col md:flex-row gap-y-6 gap-x-8">
          <div className="w-full  md:w-1/2 ml-8">
            <h3>New Password</h3>
            <input
            name="password"
            className="border border-gray rounded-lg w-3/4 px-3 py-3"
            type="password"
            placeholder="Write Your New Password"
            onChange={inputChange}
            />

          </div>
          <div className="w-full md:w-1/2 ml-8 ">
            <h3>Confirm Password</h3>
            <input
               name="password"
               className="border border-gray rounded-lg w-3/4 px-3 py-3"
               type="password"
               placeholder="Confirm Your New Password"
               onChange={inputChange}
            />
          </div>
        </div>
        </div>
        <button className="btn bg-blue-500 w-1/4 text-white font-medium" onClick={Update}>Update Changes</button>
            </div>
        </main> 
        <Footer/>
        </>
    )
}

export default Profile