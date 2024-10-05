import React from 'react';
import { IoMdSearch, IoMdNotifications, IoMdSettings } from 'react-icons/io'; // Import all icons
import { FaUserCircle } from 'react-icons/fa'; // Import FaUserCircle

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-white w-full top-8 left-0 z-10 gap-4 bg-gray-100">
            {/* Left Section: Search Bar */}
            <div className="flex items-center gap-4 w-2/3 md:w-1/2">
                <div className="relative w-full">
                    {/* Search Icon */}
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IoMdSearch className="w-5 h-5 text-black" /> {/* Set color to black */}
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 p-2 bg-gray-100 text-gray-600 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300" // Keep border consistent
                        style={{ transition: 'none' }} // Disable any transitions that may cause jumping
                    />
                </div>
            </div>

            {/* Right Section: Icons/Settings */}
            <div className="flex items-center gap-4">
                {/* Notifications Icon */}
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg">
                    <IoMdNotifications className="w-6 h-6 text-gray-700" /> {/* Notifications icon */}
                </button>

                {/* Settings Icon */}
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg">
                    <IoMdSettings className="w-6 h-6 text-gray-700" /> {/* Set new settings icon */}
                </button>

                {/* Profile Icon */}
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg">
                    <FaUserCircle className="w-6 h-6 text-gray-700" /> {/* Set FaUserCircle icon */}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
