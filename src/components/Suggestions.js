import React from "react";
import FoodCard from "./FoodCard";

const Suggestions = ({ addToCart, searchTerm }) => {
  const foods = [
    { name: "Pasta", price: 9.5, sustainability: 4.1, co2: 1.8, badge: "Selling Fast" },
    { name: "Spicy Noodles", price: 8.0, sustainability: 4.3, co2: 1.1 },
    { name: "Chocolate Brownie", price: 4.5, sustainability: 3.5, co2: 2.5, badge: "Selling Fast" },
    { name: "Fruit Smoothie", price: 5.0, sustainability: 4.5, co2: 0.5 },
    { name: " Burger", price: 7.99, sustainability: 3.9, co2: 3.0 },
  ];

  // 🔹 Filter foods based on searchTerm
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Suggestions for you </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, i) => (
            <FoodCard key={i} food={food} addToCart={addToCart} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">❌ No items found</p>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
