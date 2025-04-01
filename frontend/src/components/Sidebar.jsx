import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faBriefcase,faBell,faStickyNote,faGavel,faCalendarAlt,faCogs,faUsers,faShieldAlt,faFileAlt} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`fixed w-60 h-screen bg-white shadow-md pt-16 left-0 top-0 z-10 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <Link to="/" className="flex items-center gap-3 w-full">
            <FontAwesomeIcon icon={faHome} className="text-lg" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <Link to="/portfolio" className="flex items-center gap-3 w-full">
            <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
            <span>Portfolio</span>
          </Link>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faBell} className="text-lg" />
          <span>Notifications</span>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faStickyNote} className="text-lg" />
          <span>Notices</span>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faGavel} className="text-lg" />
          <span>Auctions</span>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-lg" />
          <span>Date Upload</span>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faCogs} className="text-lg" />
          <span>Control Panel</span>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faUsers} className="text-lg" />
          <span>User Management</span>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faShieldAlt} className="text-lg" />
          <span>Permissions</span>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-red-600 hover:bg-red-100 cursor-pointer">
          <Link to="/project-description" className="flex items-center gap-3 w-full">
            <FontAwesomeIcon icon={faFileAlt} className="text-lg" />
            <span>Project Description</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;




