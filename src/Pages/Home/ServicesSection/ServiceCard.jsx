// src/components/ServiceCard.jsx

const ServiceCard = ({ service }) => {
  const {icon:Icon,title,description} = service
  return (
    <div className=" card 
  bg-base-300 
  hover:bg-base-200 
  shadow-xl 
  hover:shadow-2xl 
  transition-all 
  duration-300
  p-6 
  border 
  border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary text-4xl">
          {/* Icon is used here */}
          <Icon />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
