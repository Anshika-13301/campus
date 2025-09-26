import React from "react";

const CampusMap3D = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      🗺️ 3D Campus Map
    </h2>
    <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 h-80 flex items-center justify-center rounded-xl border-2 border-dashed border-green-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
      <div className="text-center z-10">
        <div className="text-6xl mb-4">🏛️</div>
        <p className="text-xl font-semibold text-gray-600 mb-2">Interactive 3D Campus Map</p>
        {/* <p className="text-gray-500">Coming Soon</p> */}
      </div>
    </div>
  </div>
  );
};

export default CampusMap3D;
