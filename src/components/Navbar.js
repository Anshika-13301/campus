const Navbar = ({ searchTerm, setSearchTerm }) => (
  <nav className="bg-green-600 text-white px-6 py-3 shadow sticky top-0 z-50">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-center sm:text-left">
        CampusBite 🍽️
      </h1>

      {/* Search bar */}
      <div className="flex-1 flex justify-center sm:justify-center">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}               // 🔹 Bind value
          onChange={(e) => setSearchTerm(e.target.value)} // 🔹 Update state
          className="px-3 py-2 rounded-lg text-black w-full sm:w-64 focus:outline-none"
        />
      </div>

      {/* Profile button */}
      <div className="flex justify-center sm:justify-end">
        <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition">
          Profile
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
