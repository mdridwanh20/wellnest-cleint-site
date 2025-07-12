import { useState } from "react";
import { FaSpa, FaShoppingCart, FaUser, FaHome } from "react-icons/fa";
import { NavLink } from "react-router"; // Correct import for routing
import { Btn } from "./Typography/Typography";

const BottomNavbar = () => {

  

  return (
    <div className="bg-white lg:hidden py-3 shadow-2xl rounded-tl-md rounded-tr-md px-4 fixed bottom-0 left-0 w-full z-50">
      <div className="flex justify-between text-[var(--primaryColor)] text-xs">
        <nav className="flex bottomNavbar max-w-5xl justify-between w-full">
          <NavLink to="/" className="flex  flex-col items-center gap-1">
            <FaHome className="text-xl" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/all-product"
            className="flex flex-col items-center gap-1"
          >
            <FaSpa className="text-xl" />
            <span>Shop</span>
          </NavLink>

          <NavLink to="/cart" className="flex flex-col items-center gap-1">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
          </NavLink>

          <NavLink
            to={"/register"}
            className="flex cursor-pointer flex-col items-center gap-1"
          >
            <Btn btn={"Account"}></Btn>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default BottomNavbar;
