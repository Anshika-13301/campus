import React, { useState } from "react";
import AuthPage from "./components/authentication/AuthPage";
import Navbar from "./components/userDashboard/Navbar";
import Banner from "./components/userDashboard/Banner";
import Rewards from "./components/userDashboard/Rewards";
import Discounts from "./components/userDashboard/Discounts";
import Suggestions from "./components/userDashboard/Suggestions";
import GroupOrder from "./components/userDashboard/GroupOrder";
import Cart from "./components/userDashboard/Cart";
import CampusMap3D from "./components/userDashboard/CampusMap3D";
import AiModal from "./components/userDashboard/AiModal";
import CampusGuideModal from "./components/userDashboard/CampusGuideModal";
import CommunitySuggestionModal from "./components/userDashboard/CommunitySuggestionModal";
import ProfilePage from "./components/userDashboard/ProfilePage";

function App() {
  // Add authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const [cart, setCart] = useState([]);
  const [points, setPoints] = useState(125);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // searchTerm state
  const [searchTerm, setSearchTerm] = useState("");
  
  // Add authentication handlers
  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setShowProfile(false); // Reset profile view
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Show auth page if not authenticated
  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />;
  }

  // Show profile page if requested
  if (showProfile) {
    return <ProfilePage onBack={() => setShowProfile(false)} user={user} />;
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 min-h-screen">
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onProfileClick={() => setShowProfile(true)}
        onLogout={handleLogout}
      />

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
