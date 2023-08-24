import React, {useEffect,useState} from "react";
import background from "../../assets/background.png"
import signup from "../../assets/signup.png"
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios'

function Signup(){
    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const inputChange = (e)=>{
        const data = {...form}
        data[e.target.name] = e.target.value
        setForm(data)
    }

    const Register = async () => {
        try {
            const response = await axios.post("http://localhost:8081/user/", form);
            console.log("Registrasi Berhasil", response.data);

            setTimeout(() => {  
                navigate("/login");
            }, 3000);
        } catch (error) {
            console.error(error.message);
        }
    };



    
    return(
        <>
        <div className="h-screen flex justify-center items-center">
        <img className="absolute inset-0 w-full h-full object-cover brightness-50"
            src={background}
            alt="Background"/>
             <div className="absolute inset-0 flex justify-center items-center">
             <div className="flex flex-col gap-y-5 bg-white p-8 rounded-lg shadow-md">
             <div className="flex flex-col gap-y-5">
            <ul className="steps">
                <li className="step step-success">Fill Form</li>
                <li className="step">Activate</li>
                <li className="step">Done</li>
            </ul>
            <div>
                <p>Email</p>
                <input type="text" name="email_user" placeholder="enter your email" className="border-2 w-full px-3 py-3" onChange={inputChange}/>
            </div>
            <div>
                <p>Password</p>
                <input type="password" name="password" placeholder="enter your password" className="border-2 w-full px-3 py-3" onChange={inputChange}/>
            </div>
            
            <div className="px-2 py-3 cursor-pointer bg-blue-500 block text-white text-center" onClick={Register}>Join For Free Now</div>
            <p className="text-center">already have an account? <Link to="/signin" className="text-blue-500 cursor-pointer">Log In</Link></p>
            <p className="text-center">or</p>
            <img src={signup}/>
            </div>
             </div>
              </div>
        </div>
      
      </>
    )
}

export default Signup