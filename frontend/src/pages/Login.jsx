// components/Login.js
import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">Login Page</h1>
            <LoginForm />
        </div>
    );
};

export default Login;
