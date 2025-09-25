const Navbar = () => (
  <nav className="bg-green-600 text-white px-6 py-3 flex justify-between items-center shadow sticky top-0 z-50">
    <h1 className="text-2xl font-bold">CampusCanteen 🍽️</h1>
    <input
      type="text"
      placeholder="Search food..."
      className="px-3 py-1 rounded text-black w-40 md:w-64 focus:outline-none"
    />
    <button className="bg-white text-green-600 px-3 py-1 rounded-lg hover:bg-green-100 transition">
      Profile
    </button>
  </nav>
);

export default Navbar;
