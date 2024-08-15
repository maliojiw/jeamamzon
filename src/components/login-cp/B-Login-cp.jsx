import React from "react";
import { useState } from "react";
export default function Login_cp() {
    
        const [formData, setFormData] = useState({
            email: "",
            password: "",
        });
    
        const [errors, setErrors] = useState({});
    
        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData({
                ...formData,
                [name]: type === "" ? checked : value,
            });
        };
    
        const validate = () => {
            const newErrors = {};
            if (!formData.email) newErrors.email = "email is required.";
            if (!formData.email) {
                newErrors.email = "Email is required.";
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "Email is invalid.";
            }
            if (!formData.password) newErrors.password = "Password is required.";
            
            return newErrors;           
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const validationErrors = validate();
            if (Object.keys(validationErrors).length === 0) {
                
                console.log("Form submitted", formData);
            } else {
                
                setErrors(validationErrors);
            }
        };



    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-md p-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Hello</h1>
                    <h2 className="text-xl mb-6">WELCOME!</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="remember-me"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            remember me
                        </label>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-[#C1DCDC] text-black font-bold py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            log in
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="text-sm text-black">not a member?</span>
                        <a href="http://localhost:5173/register" className="text-sm text-blue-600 hover:underline">
                            sign up
                        </a>
                    </div>
                </form>
            </div>
        </div>

    )
}