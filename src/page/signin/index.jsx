import React, { useEffect, useState } from "react";
import background from "../../assets/background.png";
import signup from "../../assets/signup.png";
import welcome from "../../assets/welcomeback.PNG"
import logo from "../../assets/tickitz 1.png"
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Show } from "../../helpers/toast";
import { login } from "../../store/reducer/user"
import useApi from "../../helpers/useApi";

function Signin() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { isAuth } = useSelector((s) => s.users)
  const dispatch = useDispatch()
  const api = useApi()


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
  console.log(process.env.REACT_APP_BACKEND_URL)
  const Login = async () => {
    if (validateForm()) {
      try {
        const response = await api.post(process.env.REACT_APP_BACKEND_URL + '/auth/login', form);
        console.log(response)
        const data =  response.data;
        Show("Login Success", "success");
        const token = data.data;
        dispatch(login(token));
        setTimeout(() => {
          navigate("/");
        }, 3000);

      } catch (error) {
        Show(error.response.data.data, "error")
        console.log(error.response.data.data);
      }
    } else {
      Show("wrong password", "error")
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
              <img className="w-60 object-cover rounded-full" src={welcome} />
              <p className="text-[#A0A3BD] text-xl tracking-tight">Sign in with your data that you entered during<br />your registration</p>
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
              <Link to="/" className="text-right text-blue-500 font-semibold">
                Forgot Your Password?{" "}
              </Link>
              <div
                className="px-2 py-3 cursor-pointer bg-blue-500 block text-white text-center rounded-md mt-2"
                onClick={Login}
              >
                Login
              </div>
              {/* </form> */}
              <h1 className="border-b leading-[0.1rem] border-[#DEDEDE] text-center my-5">
                <span className="bg-white text-center"><Link className="p-5 text-[#AAAAAA] font-semibold text-md">or</Link></span>
               
              </h1>
              <Link to="/sign-up" className="text-center text-blue-500 font-bold">Register</Link>
              <img src={signup} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
