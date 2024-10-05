import React from 'react';
import { Outlet } from 'react-router-dom';
import { LeftSidebar } from '../components/navigation/LeftSidebar';

const Layout = () => {
    return (
        <div className='flex min-h-screen'>
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Page Content */}
            <div className="flex flex-col flex-1 ml-24 p-5 gap-5"> {/* Adjusted margin to make room for the sidebar */}
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
