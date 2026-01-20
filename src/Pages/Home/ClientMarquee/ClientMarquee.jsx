import React from 'react';
import { Link } from "react-router";
import Marquee from "react-fast-marquee";

import pic1 from "../../../assets/brands/download (1).jpg";
import pic2 from "../../../assets/brands/kodu.png";
import pic3 from "../../../assets/brands/download (2).jpg";
import pic4 from "../../../assets/brands/images.jpg";
import pic5 from "../../../assets/brands/observerbd.com_1639847404.jpg";
import pic6 from "../../../assets/brands/download.jpg";
import pic7 from "../../../assets/brands/full-frame-shot-vegetables-sale_1048944-18696118.avif";

const pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const ClientMarquee = () => {
  return (
    <div className="py-6 bg-base-200 mb-8 rounded-2xl">

      <h1 className="text-2xl font-bold text-center mb-4">
        We have thousands of products
      </h1>

      {/* ✅ Marquee */}
      <Marquee speed={60} pauseOnHover={true} gradient={false}>
        {pictures.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="h-36 mx-2 opacity-90 hover:opacity-100 transition object-contain"
            alt="client logo"
          />
        ))}
      </Marquee>

      {/* Button */}
      <div className="flex justify-center pt-6">
        <Link
          to="/"
          className="btn-primary-custom text-sm md:text-base"
        >
          View Product List
        </Link>
      </div>

    </div>
  );
};

export default ClientMarquee;
