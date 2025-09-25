import React from "react";

const GroupOrder = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold">Your Group Order</h2>
      <p className="mt-2">for Whom you are ordering<span className="font-semibold">Alex</span></p>
      <p className="text-gray-500 text-sm mt-1">Change the name </p>
      <p className="mt-2">🛒 Your Card is empty</p>
    </div>
  );
};

export default GroupOrder;
