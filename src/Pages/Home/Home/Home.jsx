import React from 'react';
import Banner from '../Banner/Banner';
import ServicesSection from '../ServicesSection/ServicesSection';
import ClientMarquee from '../ClientMarquee/ClientMarquee';
import BenefitsSection from '../Benefits/BenefitsSection';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
         <div className="w-full overflow-x-hidden">

            {/* Hero / Banner */}
            <section className="w-full">
                <Banner />
            </section>

             {/* Marquee / Clients */}
            <section className="w-full my-10">
                <ClientMarquee />
            </section>

            {/* Services */}
            <section className="w-full px-4 sm:px-6 lg:px-10">
                <ServicesSection />
            </section>

             {/* Benefits */}
            <section className="w-full px-4 sm:px-6 lg:px-10">
                <BenefitsSection />
            </section>

            {/* Become a Merchant */}
            <section className="w-full px-4 sm:px-6 lg:px-10 mb-10">
                <BeMerchant />
            </section>


        

           

        </div>
    );
};

export default Home;