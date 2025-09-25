import React from "react";

const MenuCard = ({ item, onAddToCart, onGenerateDescription, highlight }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative transform transition hover:scale-105 hover:shadow-xl ${
        highlight ? "border-2 border-yellow-400" : ""
      }`}
    >
      {item.isTrending && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          🔥 Selling Fast
        </div>
      )}

      <img
        src={item.image || "https://via.placeholder.com/150"}
        alt={item.name}
        className="w-full h-32 object-cover"
      />

      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-md truncate">{item.name}</h3>
        <p className="font-semibold my-1">₹{item.price}</p>

        <div className="mt-auto space-y-2">
          <button
            onClick={() => onGenerateDescription(item)}
            className="w-full bg-blue-100 text-blue-800 font-semibold py-2 px-3 rounded-lg text-sm hover:bg-blue-200"
          >
            ✨ Know more
          </button>
          <button
            onClick={() => onAddToCart(item)}
            className="w-full bg-green-600 text-white font-semibold py-2 px-3 rounded-lg text-sm hover:bg-green-700"
          >
            🛒 Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
