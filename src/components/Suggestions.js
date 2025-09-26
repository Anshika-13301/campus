import React from "react";
import FoodCard from "./FoodCard";

const Suggestions = ({ addToCart, searchTerm }) => {
  const foods = [
    { name: "Gourmet Pasta", price: 9.5, sustainability: 4.1, co2: 1.8, badge: "🔥 Trending" },
    { name: "Spicy Asian Noodles", price: 8.0, sustainability: 4.3, co2: 1.1 },
    { name: "Chocolate Brownie", price: 4.5, sustainability: 3.5, co2: 2.5, badge: "🔥 Trending" },
    { name: "Fresh Fruit Smoothie", price: 5.0, sustainability: 4.5, co2: 0.5 },
    { name: "Classic Burger", price: 7.99, sustainability: 3.9, co2: 3.0 },
  ];

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        ✨ Personalized Suggestions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, i) => (
            <FoodCard key={i} food={food} addToCart={addToCart} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-500 font-medium">No items found</p>
            <p className="text-gray-400">Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
