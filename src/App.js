import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Rewards from "./components/Rewards";
import Discounts from "./components/Discounts";
import Suggestions from "./components/Suggestions";
import GroupOrder from "./components/GroupOrder";
import Cart from "./components/Cart";
import CampusMap3D from "./components/CampusMap3D";
import AiModal from "./components/AiModal";
import CampusGuideModal from "./components/CampusGuideModal";
import CommunitySuggestionModal from "./components/CommunitySuggestionModal";

function App() {
  const [cart, setCart] = useState([]);
  const [points, ] = useState(125);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  // 🔹 searchTerm state
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 min-h-screen">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        <Banner />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Rewards points={points} />
          <Discounts />
        </div>

        <Suggestions searchTerm={searchTerm} addToCart={addToCart} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GroupOrder />
          <Cart cart={cart} />
        </div>

        <CampusMap3D />

        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <button
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
            onClick={() => setShowAiModal(true)}
          >
            🤖 AI Suggestions
          </button>
          <button
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
            onClick={() => setShowGuideModal(true)}
          >
            🗺️ Campus Guide
          </button>
          <button
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
            onClick={() => setShowCommunityModal(true)}
          >
            👥 Community
          </button>
        </div>
      </div>

      {/* Modals */}
      {showAiModal && <AiModal close={() => setShowAiModal(false)} />}
      {showGuideModal && <CampusGuideModal close={() => setShowGuideModal(false)} />}
      {showCommunityModal && <CommunitySuggestionModal close={() => setShowCommunityModal(false)} />}
    </div>
  );
}

export default App;
