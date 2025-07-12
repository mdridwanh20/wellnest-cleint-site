import React from 'react';
import { FiMail } from 'react-icons/fi';
import { HeadingH2 } from '../Common/Typography/Typography';

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white">
      <HeadingH2 headingH2={'Never Miss a Deal!'}></HeadingH2>
      <p className="text-sm sm:text-base text-gray-500 text-center mb-6 max-w-md">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      <div className="flex items-center text-sm bg-white h-12 border rounded border-gray-500/30 w-full max-w-md">
        <FiMail className="ml-3 text-gray-500 text-lg" />
        <input
          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
          type="email"
          placeholder="info@gmail.com"
        />
        <button
          type="submit"
          className=" cursor-pointer h-full px-3 flex items-center justify-center text-white bg-[var(--primaryColor)] font-medium"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
