import React from "react";

const MenuCard = ({ item, onAddToCart, onGenerateDescription, highlight }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative transform transition hover:scale-105 hover:shadow-xl ${
        highlight ? "border-2 border-yellow-400" : ""
      }`}
    >
      {/* Trending badge */}
      {item.isTrending && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse shadow">
          🔥 Selling Fast
        </div>
      )}

      {/* Image */}
      <img
        src={item.image || "https://via.placeholder.com/300x200?text=Food+Item"}
        alt={item.name}
        className="w-full h-36 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg truncate">{item.icon ? `${item.icon} ` : ""}{item.name}</h3>
        <p className={`font-semibold my-2 text-green-700`}>₹{item.price}</p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-2">
          <button
            onClick={() => onGenerateDescription(item)}
            className="w-full bg-blue-100 text-blue-800 font-semibold py-2 px-3 rounded-lg text-sm hover:bg-blue-200 transition"
          >
            ✨ Know more
          </button>
          <button
            onClick={() => onAddToCart(item)}
            className="w-full bg-green-600 text-white font-semibold py-2 px-3 rounded-lg text-sm hover:bg-green-700 transition"
          >
            🛒 Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
