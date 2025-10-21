import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top banner */}
      <div className="bg-teal-600 text-white text-center text-sm py-2 flex justify-center items-center gap-2">
        <span>🌍 Overseas trip? Get the latest information on travel guides</span>
        <button className="bg-black text-white px-3 py-1 text-xs rounded-full hover:bg-gray-800 transition">
          More Info
        </button>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-8 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-800">alx</span>
        </div>

        {/* Search bar */}
        <div className="flex items-center border rounded-full shadow-sm overflow-hidden w-[600px]">
          <input
            type="text"
            placeholder="Search for destination"
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <div className="border-l h-6" />
          <input
            type="text"
            placeholder="Add date"
            className="w-28 px-4 py-2 text-sm outline-none"
          />
          <div className="border-l h-6" />
          <input
            type="text"
            placeholder="Add date"
            className="w-28 px-4 py-2 text-sm outline-none"
          />
          <div className="border-l h-6" />
          <input
            type="text"
            placeholder="Add guest"
            className="w-28 px-4 py-2 text-sm outline-none"
          />
          <button className="bg-yellow-400 text-white p-2 rounded-full mx-2 hover:bg-yellow-500 transition">
            <Search size={18} />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition">
            Sign in
          </button>
          <button className="border border-gray-400 text-gray-700 px-5 py-2 rounded-full hover:bg-gray-100 transition">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
