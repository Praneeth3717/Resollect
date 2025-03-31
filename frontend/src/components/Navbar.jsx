import React from 'react';
import Logo from '../assets/2025-03-30.png';
import Profile from '../assets/profile.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="h-16 w-screen flex flex-row justify-between items-center p-4 md:px-8 bg-white shadow-md z-10 fixed">
      <div className="flex items-center">
        <div className="md:hidden mr-4">
          <button onClick={toggleSidebar} className="text-gray-600">
            <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
        <img className="w-28 md:w-40 h-auto" src={Logo} alt="recollet" />
      </div>
      <div className="flex items-center gap-2 md:gap-2">
        <img className="w-8 md:w-12 h-8 md:h-12 rounded-full object-cover" src={Profile} alt="profile" />
        <div className="hidden md:block text-sm md:text-base text-gray-800">
          <p className="font-semibold">Praneeth</p>
          <p className="text-gray-500 text-xs md:text-sm">praneethchandupatla@gmail.com</p>
        </div>
        <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 cursor-pointer text-lg md:text-xl" />
      </div>
    </div>
  );
};

export default Navbar;