import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      🛒 Your Cart
    </h2>
    {cart.length === 0 ? (
      <div className="text-center py-12 bg-gray-50 rounded-xl">
        <div className="text-6xl mb-4">🍽️</div>
        <p className="text-xl text-gray-500 font-medium">Cart is empty</p>
        <p className="text-gray-400">Start adding delicious items!</p>
      </div>
    ) : (
      <div className="space-y-4">
        {cart.map((item, i) => (
          <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
            <span className="font-medium text-gray-800">{item.name}</span>
            <span className="font-bold text-green-600 text-lg">${item.price}</span>
          </div>
        ))}
        <div className="border-t-2 border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-green-600">
              ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Cart;
