// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LeftSidebar } from '../components/navigation/LeftSidebar';

const Layout = () => {
    return (
        <div className='flex gap-5 p-5'>
            {/*Left Side Bar */}
            <LeftSidebar />

            {/* Page Content */}
            <div className="max-w-md text-center p-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
