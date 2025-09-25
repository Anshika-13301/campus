import React from "react";

const Discounts = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold">Available Discount</h2>
      <div className="mt-4 space-y-3">
        <div className="flex justify-between items-center">
          <p>10% OFF your order <span className="text-sm text-gray-500">(Amount: 100 points)</span></p>
          <button className="bg-green-100 text-green-600 px-3 py-1 rounded-lg">Apply </button>
        </div>
        <div className="flex justify-between items-center">
          <p>15% OFF for Honor Students</p>
          <button className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"> Apply</button>
        </div>
         <p className="text-sm text-blue-500">🎓 Congratulations! Your Academic Honors discount are now  avaliable .</p>
      </div>
    </div>
  );
};

export default Discounts;
