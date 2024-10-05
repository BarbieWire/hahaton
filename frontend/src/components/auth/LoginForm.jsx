// components/LoginForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from './CustomInput';

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        alert('Login Successful');
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white  rounded-lg px-8 pt-6 pb-8 mb-4">
                <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    register={register}
                    errors={errors}
                    className="rounded-lg"
                />
                <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    errors={errors}
                    className="rounded-lg"
                />
                <div className="flex items-center justify-between mt-4">
                    <button
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
