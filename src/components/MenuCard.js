import React from "react";

export default function MenuCard({ item, onAddToCart, onGenerateDescription }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col relative transform transition hover:scale-105 hover:shadow-xl">
      
      {item.isTrending && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 animate-pulse">
          🔥 Jaldi bik raha hai
        </div>
      )}

      <img
        src={item.image || "https://via.placeholder.com/150"}
        alt={item.name}
        className="w-full h-32 object-cover"
      />

      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-md truncate flex items-center gap-1">
          {item.icon && <span>{item.icon}</span>} {item.name}
        </h3>

        {/* 👇 yaha per item.color apply hoga */}
        <p className={`font-semibold my-1 ${item.color}`}>₹{item.price}</p>

        <div className="mt-auto space-y-2">
          <button
            onClick={() => onGenerateDescription(item)}
            className="w-full bg-blue-100 text-blue-800 font-semibold py-2 px-3 rounded-lg text-sm hover:bg-blue-200 transition"
          >
            ✨ Aur jaanein
          </button>
          <button
            onClick={() => onAddToCart(item)}
            className="w-full bg-green-600 text-white font-semibold py-2 px-3 rounded-lg text-sm hover:bg-green-700 transition"
          >
            🛒 Order mein daalein
          </button>
        </div>
      </div>
    </div>
  );
}
