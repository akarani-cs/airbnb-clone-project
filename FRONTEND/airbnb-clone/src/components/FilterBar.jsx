import React, { useState } from "react";
import { Filter } from "lucide-react";

const FilterBar = () => {
  const [active, setActive] = useState("All");

  const filters = [
    "All",
    "Top Villa",
    "Free Reschedule",
    "Book Now, Pay later",
    "Self CheckIn",
    "Instant Book",
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white">
      {/* Left section: filter buttons */}
      <div className="flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200
              ${
                active === item
                  ? "border-green-500 text-green-600 bg-green-50"
                  : "border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right section: filter + sort */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm hover:bg-gray-100 transition-all">
          <Filter className="w-4 h-4" />
          Filter
        </button>
        <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-sm">
          Sort by:{" "}
          <span className="ml-1 text-gray-700 font-medium">Highest Price</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
