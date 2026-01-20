import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districts from "./districtData.json"; // Your 64 district dataset

// ----------------------------
// Custom Green Marker Icon
// ----------------------------
const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// ----------------------------
// Fly-to Component
// ----------------------------
const FlyToLocation = ({ position }) => {
  const map = useMap();
  if (position) {
    map.flyTo(position, 10, { duration: 1.5 });
  }
  return null;
};

// ----------------------------
// Main Component
// ----------------------------
const Coverage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const popupRefs = useRef([]);
  const defaultCenter = [23.8103, 90.4125]; // Dhaka

  // ----------- Handle Typing -----------
  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (text.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matches = districts.filter((d) =>
      d.district.toLowerCase().includes(text.toLowerCase())
    );

    setSuggestions(matches.slice(0, 10)); // limit suggestions to 10
  };

  // ----------- Select from Suggestions -----------
  const handleSelectDistrict = (district) => {
    setSearchText(district.district);
    setSuggestions([]);

    setSelectedPosition([district.latitude, district.longitude]);

    const index = districts.findIndex((d) => d.district === district.district);

    setTimeout(() => {
      popupRefs.current[index]?.openPopup();
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-10 pt-35 relative">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
        We Are Available in All{" "}
        <span className="text-green-500">64 Districts</span>
      </h1>

      <p className="text-md text-gray-600 text-center mb-6">
        Search any district of Bangladesh to check pickup & delivery coverage.
      </p>

      {/* Search Box */}
      <div className="w-full max-w-lg relative mb-8">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Search district..."
          value={searchText}
          onChange={handleSearchChange}
        />

        {/* Auto-suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-white border shadow-md rounded-md mt-1 z-50 max-h-60 overflow-y-auto">
            {suggestions.map((district, index) => (
              <li
                key={index}
                onClick={() => handleSelectDistrict(district)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {district.district}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Map */}
      <div className="w-full max-w-5xl h-125 rounded-xl shadow-xl overflow-hidden relative z-0">
        <MapContainer
          center={defaultCenter}
          zoom={7}
          className="h-full w-full z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />

          {/* Fly to selected district */}
          <FlyToLocation position={selectedPosition} />

          {/* All district markers */}
          {districts.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
              icon={greenIcon} // <-- Green marker
              ref={(ref) => (popupRefs.current[index] = ref)}
            >
              <Popup>
                <h2 className="font-bold text-lg">{district.district}</h2>
                <p className="text-sm text-gray-700">
                  <strong>City:</strong> {district.city} <br />
                  <strong>Region:</strong> {district.region}
                </p>

                <p className="mt-2 text-sm font-semibold">Covered Areas:</p>
                <ul className="list-disc ml-4 text-xs">
                  {district.covered_area?.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
