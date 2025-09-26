import React from "react";

const CommunitySuggestionModal = ({ close }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 max-w-90vw transform animate-in fade-in zoom-in duration-300">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
        👥 Community Suggestions
      </h2>
      <div className="mb-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
        <p className="text-gray-700 leading-relaxed">See what other students are loving! Popular recommendations and reviews from your campus community.</p>
      </div>
      <button 
        className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl" 
        onClick={close}
      >
        Close
      </button>
    </div>
  </div>
  );
};

export default CommunitySuggestionModal;
