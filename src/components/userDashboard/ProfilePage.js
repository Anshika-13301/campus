import React, { useState } from "react";

const ProfilePage = ({ onBack, user }) => {
    const [activeTab, setActiveTab] = useState('profile');

    const userProfile = {
        name: user?.name || "Alex Johnson",
        email: user?.email || "alex.johnson@university.edu",
        studentId: user?.studentId || "ST2024001",
        year: "Junior",
        major: user?.major || "Computer Science",
        dietaryPreferences: ["Vegetarian", "Gluten-Free"],
        favoriteItems: ["Veggie Pizza", "Fruit Smoothie", "Caesar Salad"],
        loyaltyTier: "Gold Member",
        joinedDate: "September 2023"
    };

    const orderHistory = [
        { id: 1, date: "2025-09-25", items: ["Gourmet Pasta", "Fruit Smoothie"], total: 14.50, status: "Delivered" },
        { id: 2, date: "2025-09-24", items: ["Classic Burger", "Chocolate Brownie"], total: 12.49, status: "Delivered" },
        { id: 3, date: "2025-09-23", items: ["Spicy Asian Noodles"], total: 8.00, status: "Delivered" },
        { id: 4, date: "2025-09-22", items: ["Veggie Pizza", "Fresh Salad"], total: 16.99, status: "Delivered" },
    ];

    const achievements = [
        { title: "Early Bird", description: "Ordered before 8 AM", icon: "🌅", earned: true },
        { title: "Eco Warrior", description: "50+ sustainable choices", icon: "🌱", earned: true },
        { title: "Social Foodie", description: "10 group orders", icon: "👥", earned: true },
        { title: "Loyalty Master", description: "100 orders completed", icon: "⭐", earned: false },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-6 py-6 shadow-xl">
                <div className="flex items-center gap-4 max-w-7xl mx-auto">
                    <button
                        onClick={onBack}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-all duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="text-3xl font-bold">My Profile</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                            {userProfile.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{userProfile.name}</h2>
                            <p className="text-gray-600 mb-1">{userProfile.email}</p>
                            <p className="text-gray-500">{userProfile.year} • {userProfile.major}</p>
                            <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
                                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {userProfile.loyaltyTier}
                                </span>
                                <span className="text-gray-500 text-sm">Member since {userProfile.joinedDate}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="bg-white rounded-2xl shadow-xl mb-8 border border-gray-100">
                    <div className="flex overflow-x-auto">
                        {[
                            { id: 'profile', label: 'Profile Info', icon: '👤' },
                            { id: 'orders', label: 'Order History', icon: '📋' },
                            { id: 'preferences', label: 'Preferences', icon: '⚙️' },
                            { id: 'achievements', label: 'Achievements', icon: '🏆' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl m-2'
                                        : 'text-gray-600 hover:text-green-600'
                                    }`}
                            >
                                <span className="mr-2">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            value={userProfile.name}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300"
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={userProfile.email}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300"
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Student ID</label>
                                        <input
                                            type="text"
                                            value={userProfile.studentId}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                                        <input
                                            type="text"
                                            value={userProfile.year}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Major</label>
                                        <input
                                            type="text"
                                            value={userProfile.major}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary Preferences</label>
                                        <div className="flex flex-wrap gap-2">
                                            {userProfile.dietaryPreferences.map((pref, index) => (
                                                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    {pref}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Save Changes
                            </button>
                        </div>
                    )}

                    {activeTab === 'orders' && (
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Order History</h3>
                            <div className="space-y-4">
                                {orderHistory.map((order) => (
                                    <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <p className="font-semibold text-gray-800">Order #{order.id}</p>
                                                <p className="text-gray-500 text-sm">{order.date}</p>
                                            </div>
                                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                {order.status}
                                            </span>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-gray-700 mb-1">Items:</p>
                                            <ul className="list-disc list-inside text-gray-600 ml-4">
                                                {order.items.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-lg text-green-600">${order.total}</span>
                                            <button className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                                                Reorder
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'preferences' && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Food Preferences & Settings</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Favorite Items</h4>
                                    <div className="space-y-3">
                                        {userProfile.favoriteItems.map((item, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                                <span className="text-gray-700">{item}</span>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Notification Settings</h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Order updates", checked: true },
                                            { label: "Special offers", checked: true },
                                            { label: "New menu items", checked: false },
                                            { label: "Weekly recommendations", checked: true },
                                        ].map((setting, index) => (
                                            <div key={index} className="flex items-center justify-between">
                                                <span className="text-gray-700">{setting.label}</span>
                                                <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-all duration-300 ${setting.checked ? 'bg-green-500' : 'bg-gray-300'
                                                    }`}>
                                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${setting.checked ? 'left-7' : 'left-1'
                                                        }`}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'achievements' && (
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Achievements & Badges</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className={`p-6 rounded-xl border-2 transition-all duration-300 ${achievement.earned
                                            ? 'border-green-300 bg-green-50 shadow-lg'
                                            : 'border-gray-200 bg-gray-50 opacity-60'
                                        }`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`text-4xl ${achievement.earned ? '' : 'grayscale'}`}>
                                                {achievement.icon}
                                            </div>
                                            <div>
                                                <h4 className={`text-lg font-semibold ${achievement.earned ? 'text-green-800' : 'text-gray-500'
                                                    }`}>
                                                    {achievement.title}
                                                </h4>
                                                <p className={achievement.earned ? 'text-green-600' : 'text-gray-400'}>
                                                    {achievement.description}
                                                </p>
                                                {achievement.earned && (
                                                    <span className="inline-block mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                        Earned ✓
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;