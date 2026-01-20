import React from 'react';
import bgImg from '../../../assets/be-a-merchant-bg.png';


const BeMerchant = () => {
    return (
       <div data-aos="flip-up" className="hero bg-base-200 p-20 mb-5 rounded-4xl bg-no-repeat bg-cover"
  style={{ backgroundImage: `url(${bgImg})` }}
>

  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <div className='flex gap-5'>
        <div><button className="btn btn-xm">About more</button></div>
        <div><button className="btn-primary-custom">Get started</button></div>
      </div>
    </div>
  </div>
</div>
    );
};

export default BeMerchant;
