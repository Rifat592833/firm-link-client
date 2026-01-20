import React from "react";
import BenefitsCard from "./BenefitsCard";
import tracking from '../../../assets/Tracking/tracking.png'
import deliver from '../../../assets/Tracking/deliver.PNG'
import Support from '../../../assets/Tracking/Capture.PNG'

const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: tracking,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: deliver,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: Support,
  },
];

const BenefitsSection = () => {
  return (
    <div className="flex flex-col items-center gap-6 my-10 px-4">
      {benefits.map((item) => (
        <BenefitsCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default BenefitsSection;
