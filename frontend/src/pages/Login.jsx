// components/Login.js
import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
    return (
        <div className="flex h-screen bg-gray-200">
            {/* Левая часть с графикой */}
            <div className="flex-1  flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Добавьте сюда SVG или графику */}
                    <div className="absolute top-1/4 transform rotate-45">
                        <div className="w-24 h-24 bg-black"></div> {/* Черный элемент */}
                    </div>
                    <div className="absolute left-1/3 bottom-1/3">
                        <div className="w-16 h-16 bg-purple-600"></div> {/* Фиолетовый квадрат */}
                    </div>
                    <div className="absolute left-1/3 bottom-1/4">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div> {/* Желтая половина */}
                    </div>
                </div>
            </div>

            <div className="w-1/3 flex items-center justify-center bg-white rounded-l-lg rounded-r-lg p-1 m-2">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-2">Welcome back!</h2>
                    <p className="text-sm text-center text-gray-600 mb-6">Please enter your details</p>
                    <LoginForm />
                    <div className="mt-4 text-center">
                        <a href="register" className="text-sm text-gray-500">
                        Don't have an account? <span className="text-black font-bold">Sign Up</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
