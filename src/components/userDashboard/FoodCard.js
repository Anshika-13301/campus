import React from "react";

const FoodCard = ({ food, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl relative overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group border border-gray-100">
    {food.badge && (
      <span className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-10">
        {food.badge}
      </span>
    )}
    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{food.name}</h3>
        <p className="text-2xl font-bold text-green-600">${food.price}</p>
      </div>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-green-500">🌱</span>
          <p className="text-sm text-gray-600">Sustainability: <span className="font-semibold">{food.sustainability}/5</span></p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500">🌍</span>
          <p className="text-sm text-gray-600">CO₂ Footprint: <span className="font-semibold">{food.co2} kg</span></p>
        </div>
      </div>

      <button
        className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 rounded-xl font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover:-translate-y-1"
        onClick={() => addToCart(food)}
      >
        🛒 Add to Cart
      </button>
    </div>
  </div>
  );
};

export default FoodCard;
