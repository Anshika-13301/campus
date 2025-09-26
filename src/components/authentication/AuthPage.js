// AuthPage.js
import React, { useState } from "react";

const AuthPage = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        studentId: '',
        major: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Mock successful login/signup
            onLogin({
                name: formData.name || 'Alex Johnson',
                email: formData.email,
                studentId: formData.studentId || 'ST2024001',
                major: formData.major || 'Computer Science'
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 flex items-center justify-center p-4">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-white mb-2">
                        CampusBite 🍽️
                    </h1>
                    <p className="text-white/80 text-lg">Your Campus Food Companion</p>
                </div>

                {/* Auth Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                    {/* Tab Switcher */}
                    <div className="flex mb-8 bg-gray-100 rounded-2xl p-1">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${isLogin
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-green-600'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${!isLogin
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-green-600'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        {/* Sign Up Fields */}
                        {!isLogin && (
                            <>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Student ID</label>
                                    <input
                                        type="text"
                                        name="studentId"
                                        value={formData.studentId}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                                        placeholder="ST2024001"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Major</label>
                                    <select
                                        name="major"
                                        value={formData.major}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                                    >
                                        <option value="">Select your major</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Business">Business</option>
                                        <option value="Psychology">Psychology</option>
                                        <option value="Biology">Biology</option>
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="English">English</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {/* Common Fields */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">University Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                                placeholder="your.name@university.edu"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Remember Me & Forgot Password (Login only) */}
                        {isLogin && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                    />
                                    <label htmlFor="remember" className="ml-2 text-gray-600">
                                        Remember me
                                    </label>
                                </div>
                                <button type="button" className="text-green-600 hover:text-green-800 font-medium hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                                </div>
                            ) : (
                                isLogin ? '🚀 Sign In' : '✨ Create Account'
                            )}
                        </button>
                    </div>

                    {/* Footer Text */}
                    <div className="mt-8 text-center text-gray-500 text-sm">
                        {isLogin ? (
                            <p>
                                Don't have an account?{' '}
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className="text-green-600 hover:text-green-800 font-medium hover:underline"
                                >
                                    Sign up here
                                </button>
                            </p>
                        ) : (
                            <p>
                                Already have an account?{' '}
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className="text-green-600 hover:text-green-800 font-medium hover:underline"
                                >
                                    Sign in here
                                </button>
                            </p>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-white/70 text-sm">
                    <p>© 2025 CampusBite. Making campus dining delightful.</p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;