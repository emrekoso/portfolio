import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from 'react';


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="-ml-7 mx-2 w-[130px]" src={logo} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/emre-%C3%A7elik-1115a2257/" target="_blank" className="text-neutral-400 transition ease-linear delay-150 hover:text-neutral-200"><FaLinkedin/></a>
          <a href="https://github.com/emrekoso" target="_blank" className="text-neutral-400 transition ease-linear delay-150 hover:text-neutral-200"><FaGithub/></a>
        </div>
    </nav>
  )
}

export default Navbar