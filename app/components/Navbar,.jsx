"use client";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[60%] flex justify-between items-center px-8 py-4 bg-dark border border-gray-800 rounded-2xl shadow-lg bg-opacity-80 backdrop-blur-md z-50">
      <div className="text-lg font-bold text-primary">FERNANDO MARÍN</div>
      
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/fernando-marin-f/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-500 transition-all" />
        </a>
        
        <a href="https://www.instagram.com/fernando.marin.f" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-pink-500 transition-all" />
        </a>

        <a href="mailto:fmarinf@outlook.com" aria-label="Email">
          <HiOutlineMail className="text-2xl hover:text-yellow-400 transition-all" />
        </a>
      </div>
    </div>
  );
}
