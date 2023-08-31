import React, { useEffect, useState } from "react";
import background from "../../assets/background.png";
import signup from "../../assets/signup.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Show } from "../../helpers/toast";
import logo from "../../assets/tickitz 1.png"

function Signup() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { isAuth } = useSelector((s) => s.users)
  const [isChecked, setIsChecked] = useState(false);

  const checkboxChange = (e) => {
    setIsChecked(e.target.checked);
  };


  const inputChange = (e) => {
    const data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  };


  const validateForm = () => {
    const newErrors = {};
    if (!form.email_user || !form.email_user.includes("@")) {
      newErrors.email_user = "Please enter a valid email address";
    }
    if (!form.password || form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [cpass, setcpass] = useState(true)
  const click_pass = () => {
    setcpass(cpass == true ? false : true)
  }

  const Register = async (e) => {
    e.preventDefault();
    if (validateForm() && isChecked) {
      try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_URL+'/user/', form);
        Show("Registration Success", "success");

        setTimeout(() => {
          navigate("/sign-in");
        }, 3000);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      if (!isChecked) {
        Show("Please agree to terms & conditions", "error");
      }
    }
  };

    useEffect(() =>{
      if(isAuth){
          navigate('/')
      }
  },[])

  return (
    <>

      <div className="h-screen flex justify-center items-center">
        <div className="h-screen">
          <img
            className="absolute inset-0 h-full w-full object-cover brightness-50"
            src={background}
            alt="Background"
          />
        </div>
        <div className="absolute flex flex-col justify-center items-center my-40">
          <img className="w-60 object-cover rounded-full mb-10" src={logo} />
          <div className="flex flex-col gap-y-5 bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col gap-y-5">
              <ul className="steps">
                <li className="step step-success">Fill Form</li>
                <li className="step">Activate</li>
                <li className="step">Done</li>
              </ul>
              <div>
                <p>Email</p>
                <input
                  type="text"
                  name="email_user"
                  placeholder="enter your email"
                  className="border-2 w-full px-3 py-3 rounded-md mt-2 focus:outline-none"
                  onChange={inputChange}
                />
                {errors.email_user && (
                  <p className="text-red-500">{errors.email_user}</p>
                )}
              </div>
              <div>
                <p>Password</p>
                <div className="relative w-full items-center">
                  <input
                    type={cpass ? "password" : "text"}
                    name="password"
                    placeholder="enter your password"
                    className="border-2 w-full px-3 py-3 rounded-md mt-2 focus:outline-none"
                    onChange={inputChange}
                  />
                  <Link onClick={click_pass}><i className="fa fa-eye absolute top-7 md:top-[1.5rem] right-3 text-[#A0A3BD]" aria-hidden="true"></i></Link>
                </div>
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
              <div className="flex flex-row gap-x-5">
                <input
                  type="checkbox"
                  checked={isChecked}
                  className="checkbox"
                  onChange={checkboxChange}
                />
                <p>I agree to terms & conditions</p>
              </div>
              <div
                className="px-2 py-3 cursor-pointer bg-blue-500 block text-white text-center rounded-md mt-2"
                onClick={Register}
              >
                Join For Free Now
              </div>
              <p className="text-center">
                already have an account?{" "}
                <Link to="/sign-in" className="text-blue-500 cursor-pointer">
                  Log In
                </Link>
              </p>
              <h1 className="border-b leading-[0.1rem] border-[#DEDEDE] text-center my-5">
                <span className="bg-white text-center"><Link className="p-5 text-[#AAAAAA] font-semibold text-md">or</Link></span>
                
              </h1>
              <img src={signup} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
