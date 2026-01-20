import React from 'react';

const AboutUs = () => {
    return (
         <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">
          About FirmLink
        </h1>
        <p className="mt-4 text-lg text-gray-600 italic">
          “চাষির ন্যায্য দাম, আপনার তাজা খাবার”
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🌱 Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          FirmLink is a digital platform that directly connects farmers with consumers.
          Our goal is to ensure fair prices for farmers while delivering fresh, safe,
          and trustworthy food to families across Bangladesh.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🌾 Core Values
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Fresh products from trusted farmers</li>
          <li>✔ Fair pricing without middlemen</li>
          <li>✔ Transparency & trust for consumers</li>
          <li>✔ From Farm to Family delivery model</li>
        </ul>
      </section>

      {/* What We Offer */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🛒 What We Offer
        </h2>
        <p className="text-gray-700 mb-4">
          Through FirmLink, farmers can sell rice, vegetables, fruits, fish, and milk
          directly to consumers. Each product includes real photos, harvest date,
          price, and available quantity to ensure transparency.
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Direct farmer-to-consumer ordering</li>
          <li>Multiple payment methods (COD, bKash, Nagad, Rocket)</li>
          <li>Search and filter by category and location</li>
          <li>Live chat between consumers and farmers</li>
        </ul>
      </section>

      {/* Farmer Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          👨‍🌾 Farmers & Their Stories
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We believe people in Bangladesh love real stories. That’s why every farmer
          has a profile showcasing their photo, village, district, farming method,
          and personal journey. This builds trust and strengthens community bonds.
        </p>
      </section>

      {/* Reviews */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ⭐ Ratings & Reviews
        </h2>
        <p className="text-gray-700">
          Customers can rate products and leave short Bangla reviews such as:
          <span className="block mt-2 font-medium text-green-700">
            “সবজি খুব ফ্রেশ ছিল”
          </span>
        </p>
      </section>

      {/* Language Support */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🌐 Language Support
        </h2>
        <p className="text-gray-700">
          FirmLink is designed with accessibility in mind. The platform is available
          in English by default, with optional Bangla language support to serve users
          across Bangladesh.
        </p>
      </section>

      {/* Closing */}
      <div className="text-center mt-16">
        <h3 className="text-xl font-semibold text-gray-800">
          Building Trust. Empowering Farmers. Delivering Freshness.
        </h3>
      </div>
    </div>
    );
};

export default AboutUs;