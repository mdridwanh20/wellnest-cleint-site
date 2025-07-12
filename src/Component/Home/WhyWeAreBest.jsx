import React from "react";
import { FaTruck, FaLeaf, FaDollarSign, FaHeart } from "react-icons/fa";
import img from '../../assets/why best we are.jpg'

function FeatureItem({ icon: Icon, title, description }) {
  return (
    
    <div className="flex items-start gap-4">
      <div className="p-3 bg-[#4FBF8B] text-white rounded">

        <Icon className=" " />

      </div>
      
      <div>
        <h4 className="font-bold text-gray-800 text-base sm:text-lg">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default function WhyWeAreBest() {
  const features = [
    {
      icon: FaTruck,
      title: "Fastest Delivery",
      description: "Groceries delivered in under 30 minutes.",
    },
    {
      icon: FaLeaf,
      title: "Freshness Guaranteed",
      description: "Fresh produce straight from the source.",
    },
    {
      icon: FaDollarSign,
      title: "Affordable Prices",
      description: "Quality groceries at unbeatable prices.",
    },
    {
      icon: FaHeart,
      title: "Trusted by Thousands",
      description: "Loved by 10,000+ happy customers.",
    },
  ];

  return (
    <div className="bg-green-50 rounded-lg p-6 py-16 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left: Image + Fast Delivery Tag */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Grocery Girl"
          className=" h-82 object-cover lg:rounded-none rounded-t-[200px]"
        />
        <div className="lg:hidden absolute bottom-2 sm:bottom-4  right-2 sm:left-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
          <FaTruck className="text-blue-600" />
          <div className="text-xs sm:text-sm">
            <p className="text-blue-600 font-semibold leading-tight">Fast Delivery</p>
            <p className="text-gray-500">In 30 Min</p>
          </div>
        </div>

      </div>

      {/* Right: Features Text */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--primaryColor)]">
          Why We Are the Best?
        </h2>
        <div className="space-y-4">
          {features.map(({ icon, title, description }, idx) => (
            <FeatureItem key={idx} icon={icon} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
}
