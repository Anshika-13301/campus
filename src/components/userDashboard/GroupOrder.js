import React from "react";

const GroupOrder = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-100 pb-4 mb-6 flex items-center gap-2">
      👥 Group Order
    </h2>

    <div className="mb-6">
      <p className="text-gray-700 mb-2">
        Ordering for: <span className="font-bold text-green-600 text-lg">Alex</span>
      </p>
      <button className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200 flex items-center gap-1">
        ✏️ Change name
      </button>
    </div>

    <div className="text-center py-12 bg-gray-50 rounded-xl">
      <div className="text-6xl mb-4">🛒</div>
      <p className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</p>
      <p className="text-gray-400">Add items from the menu to get started</p>
    </div>
  </div>
  );
};

export default GroupOrder;
