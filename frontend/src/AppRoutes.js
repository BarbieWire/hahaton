import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
        {
            element: <Layout />,
            children: [
                { path: '/', element: <Home /> },
            ],
        },
    ]);

    return routes;
};

export default AppRoutes;
