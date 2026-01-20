import React from 'react';
import { Outlet } from 'react-router';
import AuthImg from '../assets/AuthImg.PNG'
import FirstLogo from '../Pages/Shared/FirstLogo/FirstLogo';
import { Link } from 'react-router';

const AuthLayout = () => {
    return (
<div className=" bg-custom-color p-8 m-7 rounded-2xl ">

    <div className='flex justify-between '>
        <div>
            <FirstLogo></FirstLogo>
        </div>
        <div>
            <button className="btn-primary-custom mt-4 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><Link to="/">Home</Link></button>        
         </div>
    </div>
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1'>
            <img src={AuthImg}  className="max-w-sm rounded-lg shadow-2xl"/>
        </div>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
    </div>
</div>
    );
};

export default AuthLayout;
