import React from "react";
export default function Register_cp() {

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-md p-8">
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-6">Create account</h2>
                </div>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Full name"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Re-Password"
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-green-300 rounded"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            agree to the term of service
                        </label>
                    </div>
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
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            sign in
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}