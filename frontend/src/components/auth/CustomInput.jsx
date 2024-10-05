// components/CustomInput.js
import React from 'react';

const CustomInput = ({ label, type = "text", name, register, errors }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                type={type}
                {...register(name)}
                id={name}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[name] ? 'border-red-500' : ''
                    }`}
            />
            {errors[name] && <p className="text-red-500 text-xs italic">{errors[name].message}</p>}
        </div>
    );
};

export default CustomInput;
