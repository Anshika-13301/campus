import React from "react";

const Rewards = ({ points }) => {
  return (
    <div className="bg-green-500 text-white rounded-xl p-6 shadow-lg">
      <h2 className="text-lg font-bold">⭐ Loyalty Points</h2>
      <p className="text-4xl font-extrabold mt-2">{points}</p>
      <p className="mt-1">Available Points</p>
    </div>
  );
};

export default Rewards;
