import React, { useState } from "react";
import Navbar from "./components/Navbar";
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
  const [points, setPoints] = useState(125);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Rewards points={points} />
          <Discounts />
        </div>

        <Suggestions addToCart={addToCart} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GroupOrder />
          <Cart cart={cart} />
        </div>

        <CampusMap3D />

        <div className="flex gap-4 mt-6">
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowAiModal(true)}
          >
            🤖 AI Suggestion
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowGuideModal(true)}
          >
            🗺 Campus Guide
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowCommunityModal(true)}
          >
            👥 Community Suggestions
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
