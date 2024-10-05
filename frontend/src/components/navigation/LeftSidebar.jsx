import React from "react";
import { Button } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import {
    IoHomeOutline,
    IoBookOutline,
    IoBookmarksOutline,
} from "react-icons/io5";
import { LuBookPlus } from "react-icons/lu";
import { CiDark } from "react-icons/ci";
import { BsCalendar4, BsBag, BsCheck2Square } from "react-icons/bs";
import { ImSigma } from "react-icons/im";

export function LeftSidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const isActive = (path) => {
        return currentPath === path || currentPath.startsWith(path + '/') ? 'bg-[rgb(64,64,64)]' : 'hover:bg-[#404040]';
    };

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div className="fixed left-2 bottom-2 top-2 rounded-lg w-24 bg-black text-white z-50 flex flex-col pt-4 pb-4">
            <div className="flex items-center justify-center h-16">
                <ImSigma className="text-white" />
            </div>

            <div className="flex-grow flex flex-col items-center space-y-4 py-4">
                <div className="mb-2 w-10 border-b border-gray-700"></div>
                <div className="flex justify-center w-full">
                    <Button
                        className={`flex items-center justify-center w-10 h-10 ${isActive('/')}`} 
                        onClick={() => handleButtonClick('/')}
                    >
                        <IoHomeOutline className="h-6 w-6 text-white" />
                    </Button>
                </div>
                <Button
                    className={`flex items-center justify-center w-10 h-10 ${isActive('/library')}`} // Highlight for New Course
                    onClick={() => handleButtonClick('/library')} 
                >
                    <LuBookPlus className="h-6 w-6 text-white" />
                </Button>
                <Button
                    className={`flex items-center justify-center w-10 h-10 ${isActive('/courses')}`} // Highlight for Courses
                    onClick={() => handleButtonClick('/courses')} // Navigate to Courses
                >
                    <IoBookOutline className="h-6 w-6 text-white" />
                </Button>
                <Button
                    className={`flex items-center justify-center w-10 h-10 ${isActive('/bookmarks')}`} // Highlight for Bookmarks
                    onClick={() => handleButtonClick('/bookmarks')} // Navigate to Bookmarks
                >
                    <IoBookmarksOutline className="h-6 w-6 text-white" />
                </Button>
                <Button
                    className={`flex items-center justify-center w-10 h-10 ${isActive('/tasks')}`} // Highlight for Tasks
                    onClick={() => handleButtonClick('/tasks')} // Navigate to Tasks
                >
                    <BsCheck2Square className="h-6 w-6 text-white" />
                </Button>
                <Button
                    className={`flex items-center justify-center w-10 h-10 ${isActive('/calendar')}`} // Highlight for Calendar
                    onClick={() => handleButtonClick('/calendar')} // Navigate to Calendar
                >
                    <BsCalendar4 className="h-6 w-6 text-white" />
                </Button>
                <Button
                    className={`flex items-center justify-center w-10 h-10 ${isActive('/bag')}`} // Highlight for Bag
                    onClick={() => handleButtonClick('/bag')} // Navigate to Bag
                >
                    <BsBag className="h-6 w-6 text-white" />
                </Button>
            </div>

            {/* Bottom Dark Theme Toggle Button */}
            <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: '#292929' }}>
                    <Button className="flex items-center justify-center w-10 h-10 hover:bg-[#404040] transition duration-200 rounded-full">
                        <CiDark className="h-6 w-6 text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
