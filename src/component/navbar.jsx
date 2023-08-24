import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Tickitz-1.png'
import { useDispatch, useSelector } from "react-redux";
import Profile from '../assets/default-user.png'

const Navbar = () =>{
    const dispatch = useDispatch()
    const {isAuth, data} = useSelector((s)=>s.users)

    const [isOpen, setIsOpen] = useState(false)
    return(
        // <section className="px-10">
        //     <div className="navbar bg-base-100">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        
        //             </label>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li><Link>Home</Link></li>
        //                 <li>
        //                 <Link>Movie</Link>
        //                 </li>
        //                 <li><Link>Buy Ticket</Link></li>
        //             </ul>
        //             </div>
        //             <Link className="btn btn-ghost normal-case text-xl">
        //             <img src={logo} alt=""></img>
        //             </Link>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //             <li><Link>Home</Link></li>
        //             <li><Link>Movie</Link></li>
        //             <li><Link>Buy Ticket</Link></li>
        //             </ul>
        //         </div>
        //         <div className="navbar-end hidden lg:flex">
        //             <div className="">
        //                 <Link className="btn bg-white border border-button mx-5">SignIn</Link>
        //                 <Link className="btn bg-button text-white">Sign Up</Link>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    
            <div className="bg-white border rounded-lg w-screen px-10">
                <div className="w-full md:flex md:flex-row md:justify-between md:items-center xs:flex xs:flex-row  xs:justify-between xs:items-center  md:px-5 py-5">
                    <div className="brand-md-menu w-full md:flex md:flex-row md:items-center md:gap-x-10">
                      <img src={logo} alt=""  className=''/>
                    
        
                      <div className='w-full md:hidden mb-10'>
                        <button onClick={()=> setIsOpen(!isOpen)} className='w-full md:hidden xs:flex xs:justify-end -mt-10'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                              </svg>              
                        </button>
                      </div>
                    
                      {data[0] && data[0].roles == 'admin' ? (
                        <div className="md-menu  md:flex md:flex-row md:gap-x-7">
                          <Link to="/">Home</Link>
                          <Link to="/admin">Manage Movie</Link>
                        </div>
                      ) : (
                        <div className={`${isOpen ? 'block' : 'hidden'} md-menu flex xs:flex-col xs:justify-center xs:gap-y-5 md:flex md:flex-row md:gap-x-7`}>
                          <input type='text' placeholder='Seacrh' className=' md:hidden xs:flex xs:mx-auto xs:text-center border p-1 border-border rounded-md w-2/4'/>
                          <Link to="/" className='xs:flex xs:justify-center'>Home</Link>
                          <Link to="/view-all" className='xs:flex xs:justify-center'>List Movie</Link>
                          {isAuth ? (
                            <div>
                                <Link to="/profile" className='md:hidden xs:flex xs:justify-center mb-5'>Profile</Link>
                                <Link to="#" className='md:hidden xs:flex xs:justify-center'>Logout</Link>
                            </div>
                          ):(
                            <div>
                                <Link to="/sign-in" className='md:hidden xs:flex xs:justify-center'>Login</Link>
                            </div>
                          )}
                          <p className='md:hidden xs:flex xs:justify-center text-font'>@2020 Tickitz. All Right Reserved</p>
                        </div>
                      )}
        
                    </div>
             
        
        {isAuth ? (
                    
                <div className="search-md-logo-profile hidden md:flex md:w-8 md:h-8 md:me-10 md:items-center">
                    <button className="modal-open">
                    <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                    </button>
        
                    <button className="btn-dropdown-profile">
        
                    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                    <label tabIndex={0} className=" m-1">
                    <img
                    src={Profile}
                    className="md:w-8 md:h-8 md:ms-7 mx-auto"
                    alt=""
                />        
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 md:-me-7 rounded-box w-32 gap-y-1 py-3">
                    <Link to='/profile'>Profile</Link>
                    <Link to='#'>Logout</Link>
                    </ul>
                </div>
        
                    </button>
                </div>
        ):(
                        
                        <div className="search-md-logo-profile hidden md:flex md:w-8 md:h-8 md:me-10 md:items-center">
                        <button className="btn-sign-up btn btn-primary">
                            <Link to='/sign-in' className='text-white'>Login</Link>
                        </button>
                        </div>
        )}
        
        
        </div>
                
        
        
        </div>
          
    )
}

export default Navbar