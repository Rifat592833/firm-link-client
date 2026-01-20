import React from 'react';
import './banner.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from '../../../assets/banner/banner1.png';
import bannerImage2 from '../../../assets/banner/banner2.png';
import bannerImage3 from '../../../assets/banner/banner3.png';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            interval={1500} 
            showThumbs={false} 
            showStatus={false} 
            swipeable={true} 
            emulateTouch={true}
        >
            
            <div className="relative w-full mb-10">
                <img 
                    src={bannerImage1} 
                    alt="banner1"
                    className="w-full h-S160px sm:h-55 md:h-75 lg:h-100 xl:h-125 not-even:object-cover"
                />
                {/* Custom Legend Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-custom-color bg-opacity-50 text-white text-center py-2 text-sm sm:text-base md:text-lg">
                    Legend 1
                </div>
            </div>

            <div className="relative w-full">
                <img 
                    src={bannerImage2} 
                    className="w-full h-160px sm:h-55 md:h-75 lg:h-100 xl:h-125 object-cover"
                    alt="banner2"
                />
                <div className="absolute bottom-0 left-0 w-full bg-custom-color bg-opacity-50 text-white text-center py-2 text-sm sm:text-base md:text-lg">
                    Legend 2
                </div>
            </div>

            <div className="relative w-full">
                <img 
                    src={bannerImage3} 
                    className="w-full h-160px sm:h-55 md:h-75 lg:h-100 xl:h-125 object-cover"
                    alt="banner3"
                />
                <div className="absolute bottom-0 left-0 w-full bg-custom-color bg-opacity-50 text-white text-center py-2 text-sm sm:text-base md:text-lg">
                    Legend 3
                </div>
            </div>

        </Carousel>
    );
};

export default Banner;
