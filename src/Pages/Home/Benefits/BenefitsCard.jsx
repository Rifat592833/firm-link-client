import React from "react";

const BenefitsCard = ({ title, description, image }) => {
  return (
    <div className="flex bg-base-100 shadow-lg rounded-xl p-4 items-center gap-4 w-full max-w-275 hover:shadow-xl transition">

      {/* Left Image */}
      <img
        src={image}
        alt={title}
        className="w-28 h-24 sm:w-44 sm:h-40 object-cover rounded-lg"
      />

      {/* Vertical Line */}
      <div className="h-20 sm:h-32 w-px bg-gray-300"></div>

      {/* Right Content */}
      <div className="flex flex-col space-y-1">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;
