import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faBriefcase,faBell,faStickyNote,faGavel,faCalendarAlt,faCogs,faUsers,faShieldAlt,faFileAlt,} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="fixed w-60 h-screen bg-white shadow-md pt-16 left-0 top-0 z-10">
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faHome} className="text-lg" />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
          <span>Portfolio</span>
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
          <FontAwesomeIcon icon={faFileAlt} className="text-lg" />
          <span>Project Description</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;




