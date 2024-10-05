// components/Login.js
import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const Login = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Login Page</h1>
      <RegisterForm />
    </div>
  );
};

export default Login;
