import React, { useState } from "react";

export default function Register_cp() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!formData.password) newErrors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }
        if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms.";
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
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-md p-8">
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-6">Create account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full name"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-Password"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            id="terms"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-green-300 rounded"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            agree to the term of service
                        </label>
                    </div>
                    {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-black py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full"
                        >
                            sign up
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="text-sm text-black">already have an account?</span>
                        <a href="http://localhost:5173/login" className="text-sm text-blue-600 hover:underline">
                            sign in
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}