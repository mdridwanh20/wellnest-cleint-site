import React from 'react';
import { Link } from 'react-router';
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlinePhone,
} from 'react-icons/hi';

export default function PublicRoute() {
  return (
    <div className="flex dashboardRoute flex-col pt-4">

      <Link to="/" className="relative group flex items-center gap-3 py-3 px-4 rounded text-gray-700 hover:bg-gray-100">
        <HiOutlineHome size={20} />
        <span className="hidden md:inline">Home</span>
        <span className="md:hidden absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200">
          Home
        </span>
      </Link>

      <Link to="/all-product" className="relative group flex items-center gap-3 py-3 px-4 rounded text-gray-700 hover:bg-gray-100">
        <HiOutlineShoppingBag size={20} />
        <span className="hidden md:inline">Shop</span>
        <span className="md:hidden absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200">
          Shop
        </span>
      </Link>

      <Link to="/contact" className="relative group flex items-center gap-3 py-3 px-4 rounded text-gray-700 hover:bg-gray-100">
        <HiOutlinePhone size={20} />
        <span className="hidden md:inline">Contact</span>
        <span className="md:hidden absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200">
          Contact
        </span>
      </Link>

    </div>
  );
}
