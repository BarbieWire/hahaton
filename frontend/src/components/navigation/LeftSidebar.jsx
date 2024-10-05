import React from "react";
import { Button } from "flowbite-react";
import {
    HiArrowSmRight,
    HiShoppingBag,
    HiTable,
} from "react-icons/hi";
import {
    IoHomeOutline,
    IoBookOutline,
    IoBookmarksOutline,
} from "react-icons/io5";
import { LuBookPlus } from "react-icons/lu";
import { CiDark } from "react-icons/ci";
import { FaRegNoteSticky } from "react-icons/fa6";
import { BsCalendar4, BsBag, BsCheck2Square } from "react-icons/bs";




export function LeftSidebar() {
    return (
        <div className="flex flex-col h-screen w-24 bg-black text-white rounded-lg"> {/* Increased width to w-24 */}
            {/* Avatar Section */}
            <div className="flex items-center justify-center h-16">
                <img
                    src="/path/to/avatar.png" // Replace with your avatar image path
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                />
            </div>

            {/* Icons Section */}
            <div className="flex-grow flex flex-col items-center space-y-4 py-4"> {/* Increased space-y to 4 */}
                <div className="mb-2 w-10 border-b border-gray-700"></div>
                {/* Square highlight for Home button */}
                <div className="flex justify-center w-full">
                    <Button
                        className="flex items-center justify-center w-10 h-10" 
                        style={{ backgroundColor: '#404040' }} // Custom background color
                    >
                        <IoHomeOutline className="h-6 w-6 text-white" />
                    </Button>
                </div>
                <Button className="flex items-center justify-center w-10 h-10 hover:bg-[#404040] transition duration-200"> {/* Updated hover color */}
                    <LuBookPlus className="h-6 w-6 text-white" />
                </Button>
                <Button className="flex items-center justify-center w-10 h-10 hover:bg-[#404040] transition duration-200"> {/* Updated hover color */}
                    <IoBookOutline className="h-6 w-6 text-white" />
                </Button>
                
                
                <Button className="flex items-center justify-center w-10 h-10 hover:bg-[#404040] transition duration-200"> {/* Updated hover color */}
                    <IoBookmarksOutline className="h-6 w-6 text-white" />
                </Button>
                <Button className="flex items-center justify-center w-10 h-10 hover:bg-[#404040] transition duration-200"> {/* Updated hover color */}
                    <BsCheck2Square className="h-6 w-6 text-white" />
                </Button>
                <Button className="flex items-center justify-center w-10 h-10 hover:bg-[#404040] transition duration-200"> {/* Updated hover color */}
                    <BsCalendar4 className="h-6 w-6 text-white" />
                </Button>
                <Button className="flex items-center justify-center w-10 h-10 hover:bg-[#404040] transition duration-200"> {/* Updated hover color */}
                    <BsBag className="h-6 w-6 text-white" />
                </Button>
            </div>

            {/* Bottom Dark Theme Toggle Button */}
            <div className="flex items-center justify-center mb-4"> {/* Space at the bottom */}
                {/* Circular highlight for dark theme button */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: '#292929' }}> {/* Updated color */}
                    <Button className="flex items-center justify-center w-10 h-10 hover:bg-[#404040] transition duration-200 rounded-full"> {/* Updated hover color */}
                        <CiDark className="h-6 w-6 text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
