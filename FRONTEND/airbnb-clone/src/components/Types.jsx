import React, { useState } from "react";
import {
  Home,
  Building2,
  Trees,
  Hotel,
  Waves,
  Tent,
  Building,
  House,
  Ship,
  Tractor,
  Castle,
  Warehouse,
  Landmark,
  Mountain,
  BedDouble,
  TreePine,
  // SwimmingPool removed (not exported by lucide-react bundle)
} from "lucide-react"; // You can install lucide-react: npm install lucide-react

const categories = [
  { label: "Rooms", icon: BedDouble },
  { label: "Mansion", icon: Landmark },
  { label: "Countryside", icon: Trees },
  { label: "Villa", icon: Building2 },
  { label: "Tropical", icon: Mountain },
  { label: "Beach house", icon: Waves },
  { label: "Island", icon: Ship },
  { label: "Camping", icon: Tent },
  { label: "Apartment", icon: Building },
  { label: "House", icon: House },
  { label: "Lakefront", icon: Home },
  { label: "Farm house", icon: Tractor },
  { label: "Treehouse", icon: TreePine },
  { label: "Cabins", icon: Warehouse },
  { label: "Castles", icon: Castle },
  { label: "Lakeside", icon: Ship },
];

export default function Types() {
  const [selected, setSelected] = useState("Villa");

  return (
    <div className="w-full border-b bg-white">
    <div className="flex space-x-8 overflow-x-auto scrollbar-hide px-6 py-4">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setSelected(label)}
            className={`flex flex-col items-center justify-center min-w-[70px] focus:outline-none ${
              selected === label ? "text-gray-900" : "text-gray-400"
            }`}
          >
            <Icon
              size={26}
              className={`mb-2 ${
                selected === label ? "text-gray-900" : "text-gray-500"
              }`}
            />
            <span className="text-sm whitespace-nowrap">{label}</span>
            {selected === label && (
              <div className="w-5 h-[2px] bg-gray-800 mt-1 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};




