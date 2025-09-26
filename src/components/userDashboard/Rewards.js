import React from "react";

const Rewards = ({ points }) => {
  return (
    <div className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-300">
    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
    <div className="relative z-10">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        ⭐ Loyalty Points
      </h2>
      <p className="text-5xl font-extrabold mt-4 mb-2">{points}</p>
      <p className="text-lg opacity-90">Available Points</p>
    </div>
  </div>
  );
};

export default Rewards;
