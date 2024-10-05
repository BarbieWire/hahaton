// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LeftSidebar } from '../components/navigation/LeftSidebar';
import NavBar from '../components/navigation/NavBar';

const Layout = () => {
    return (
        <div className='flex min-h-screen gap-5 p-5'>
            {/*Left Side Bar */}
            <LeftSidebar />

            {/* Page Content */}
            <div className="w-full max-w-full text-center p-3 flex flex-col gap-5">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
