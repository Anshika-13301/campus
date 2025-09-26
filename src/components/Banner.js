import React from "react";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white p-6 rounded-2xl mb-8 text-center shadow-2xl relative overflow-hidden">
    <div className="absolute inset-0 bg-white opacity-10 transform -skew-y-6"></div>
    <div className="relative z-10">
      <p className="font-bold text-2xl mb-2">🎓 Library Week Special!</p>
      <p className="text-lg opacity-90">10% Off on every Beverage ✨</p>
    </div>
  </div>
  );
}
