// src/pages/ServicesSection.jsx
import React from 'react';
import ServiceCard from "./ServiceCard";
import {
   FaShippingFast,
   FaTruckMoving,
   FaWarehouse,
   FaMoneyBillWave,
   FaBuilding,
   FaUndo } from "react-icons/fa";

// Inline data (no separate servicesData.js file needed)
const servicesData = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: FaShippingFast,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: FaTruckMoving,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: FaWarehouse,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: FaBuilding,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: FaUndo,
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full py-16 px-4 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="text-gray-600 mt-2">Services</p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            service = {service}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
