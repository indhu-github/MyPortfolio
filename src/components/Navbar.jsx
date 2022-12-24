import React,{useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {HiDownload} from "react-icons/hi";

function Navbar() {
const [nav,setNav] = useState(false);
const handleClick = () =>{
  setNav(!nav);
}

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h2 className="font-bold text-2xl text-pink-400 ml-6">
          Indhu Yelineni
        </h2>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 w-full bg-[#0a192f] flex flex-col justify-center items-center h-screen'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

        {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-100" href="">LinkedIn <FaLinkedin size={30}/></a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-100" href="">Github <FaGithub size={30}/></a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-100" href="">Email <HiOutlineMail size={30}/></a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-100" href="">Resume <HiDownload size={30}/></a>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Navbar;
