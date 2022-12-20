import React,{useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
const [nav,setNav] = useState(false);
const handleClick = () =>{
  setNav(!nav);
}

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h2 className="font-bold text-2xl text-green-400 ml-6">
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
    </div>
  );
}

export default Navbar;
