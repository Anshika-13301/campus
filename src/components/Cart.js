import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold">🛒 Cart</h2>
      {cart.length === 0 ? (
        <p className="mt-2 text-gray-500">Cart is empty</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {cart.map((item, i) => (
            <li key={i} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
