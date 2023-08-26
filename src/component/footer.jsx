import React from "react";
import logo from '../assets/Tickitz-1.png'
import cinema1 from '../assets/Vector-3.png'
import cinema2 from '../assets/Vector-2.png'
import cinema3 from '../assets/Vector-1.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-5 pt-5 md:px-20 flex flex-col bg-white">
      <div className="flex flex-wrap flex-col md:flex-row justify-between">
        <div className="basis-1/4">
          <img className="h-16 mb-3" src={logo} alt="" />
          <p className="text-[#6E7191] text-sm mb:text-base tracking-wide">Stop waiting in line. Buy tickets
            conveniently, watch movies quietly.</p>
        </div>
        <div>
          <p className="text-base font-bold mb-2 md:mb-5 mt-9 md:mt-0">Explore</p>
          <div className="flex flex-row md:flex-col">
            <p className="my-1 text-[#4E4B66] text-sm tracking-wide me-4 md:me-0"><Link to="/#">Cinemas</Link></p>
            <p className="my-1 text-[#4E4B66] text-sm tracking-wide"><Link to="/">Movie List</Link></p>
            <p className="my-1 text-[#4E4B66] text-sm tracking-wide"><Link to="/profile/history">My Tickets</Link></p>
            <p className="my-1 text-[#4E4B66] text-sm tracking-wide"><Link to="/#">Notification</Link></p>
          </div>
        </div>
        <div>
          <p className="text-base font-bold mb-2 mb:mb-5 mt-7 md:mt-0">our Sponsor</p>
          <div className="grid grid-flow-col auto-cols-max md:grid-flow-row md:auto-rows-max">
            <img className="h-4 md:h-7 me-4 my-2" src={cinema1} alt="" />
            <img className="h-4 md:h-7 me-4 my-2" src={cinema2} alt="" />
            <img className="h-4 md:h-7 my-2" src={cinema3} alt="" />
          </div>
        </div>
        <div className="basis-auto mb-5 md:mb-0">
          <p className="text-base font-bold mb-2 mb:mb-5 mt-7 md:mt-0">Follow us</p>
          <div className="flex flex-row md:flex-col">
            <div className="my-3 flex">
              <i className="fa fa-facebook  box-content w-7 text-[#6E7192] me-5 md:me-0" aria-hidden="true" />
              <Link className="hidden md:block text-sm tracking-wide text-[#6E7192]" to='/#'>Tickitz Cinema id</Link>
            </div>
            <div className="my-3 flex">
              <i className="fa fa-instagram box-content w-7 text-[#6E7192] me-5 md:me-0" aria-hidden="true" />
              <Link className="hidden md:block  text-sm tracking-wide text-[#6E7192]" to='/#'>tickitz.id</Link>
            </div>
            <div className="my-3 flex">
              <i className="fa fa-twitter  box-content w-7 text-[#6E7192] me-5 md:me-0" aria-hidden="true" />
              <Link className="hidden md:block  text-sm tracking-wide text-[#6E7192]" to='/#'>tickitz.id</Link>
            </div>
            <div className="my-3 flex">
              <i className="fa fa-youtube-play box-content w-7 text-[#6E7192] me-5 md:me-0" aria-hidden="true" />
              <Link className="hidden md:block text-sm tracking-wide text-[#6E7192]" to='/#'>Tickitz Cinema id</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:text-center mt-5 mb-5 text-[#4E4B66] tracking-wide text-sm">© 2020 Tickitz. All Rights
        Reerved.
      </div>
    </footer>
  )
}

export default Footer