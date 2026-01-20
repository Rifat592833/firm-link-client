import React from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router';

const FirstLogo = () => {
  return (
    <Link to ={'/'}>
      <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-5">
      <img
        src={logo}
        alt="Logo"
        className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full"
      />
      <p className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white -ml-3">
        FarmLink
      </p>
    </div>
    </Link>
  );
};

export default FirstLogo;
