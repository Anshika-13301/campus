import React from "react";

const FoodCard = ({ food, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md relative">
      {food.badge && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {food.badge}
        </span>
      )}
      <h3 className="text-lg font-bold bg-blue-600  ">{food.name}</h3>
      <p className="text-gray-600">${food.price}</p>
      <p className="text-sm">🌱 Sustainability: {food.sustainability}/5</p>
      <p className="text-sm">🌍 CO₂ Footprint: {food.co2} kg</p>
      <button
        className="mt-2 w-full bg-black text-white py-2 rounded-lg"
        onClick={() => addToCart(food)}
      >
        Order mein daalein
      </button>
    </div>
  );
};

export default FoodCard;
