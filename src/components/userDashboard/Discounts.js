import React from "react";

const Discounts = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      🎯 Available Discounts
    </h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
        <div>
          <p className="font-semibold text-gray-800">10% OFF your order</p>
          <p className="text-sm text-gray-500">(Cost: 100 points)</p>
        </div>
        <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Apply
        </button>
      </div>
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
        <div>
          <p className="font-semibold text-gray-800">15% OFF for Honor Students</p>
          <p className="text-sm text-purple-600">🎓 Active</p>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Apply
        </button>
      </div>
      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
        <p className="text-blue-600 font-medium flex items-center gap-2">
          🎉 Congratulations! Your Academic Honors discount is now available.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Discounts;
