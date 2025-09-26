import React from "react";

const GroupOrder = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      {/* Heading */}
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2">
        Your Group Order
      </h2>

      {/* Name info */}
      <div className="mt-4">
        <p className="text-gray-700">
          For whom you are ordering:
          <span className="font-semibold text-green-600"> Alex</span>
        </p>
        <button className="text-sm text-blue-600 hover:underline mt-1">
          ✏️ Change the name
        </button>
      </div>

      {/* Empty cart message */}
      <div className="mt-6 text-center text-gray-600">
        <p className="text-lg">🛒 Your Cart is empty</p>
        <p className="text-sm text-gray-500 mt-1">
          Add items from the menu to get started
        </p>
      </div>
    </div>
  );
};

export default GroupOrder;
