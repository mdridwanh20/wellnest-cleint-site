import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router";

export default function Best_Sellers_Card({ card }) {
  const { _id, productName, category, productPrice, offerPrice, images } = card;

  
  return (
    // ⬇️ Added `flex flex-col` to make the whole card a column layout
    <div className="rounded-lg p-4 text-center bg-white border border-gray-300 transition duration-300 flex flex-col">
      
      {/* Product Image */}
     <div className="lg:h-52  h-30  ">
       <img
        src={images}
        alt={productName}
        className="w-full h-full object-cover rounded"
      />
     </div>

      {/* ⬇️ Made content section flexible to grow and separate from button */}
      <div className="flex mt-2 flex-col flex-grow justify-between text-start">
        
        {/* ⬇️ Info section */}
        <div>
          <h2 className=" lg:font-medium">{productName}</h2>

          <div className="flex items-center gap-1 text-green-600 text-[10px] lg:text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <span className="text-gray-500 ">(4)</span>
          </div>

          {/* Pricing */}
          <div className="mt-2 items-center flex gap-2">

            <span className="lg:text-xl font-bold text-green-600">
              {offerPrice} tk
            </span>

            <span className="text-gray-400 text-sm line-through">
              ${productPrice}
            </span>
            
          </div>
          
        </div>

        {/* ⬇️ This button will now always stay at the bottom of the card */}
        <div className="">
          <Link
          to={`/add-to-cart/${_id}`}
          className="mt-4 bg-[var(--primaryColor)] text-white py-2 rounded shadow border border-gray-300 p flex items-center justify-center gap-1 text-sm"
        >
          <MdAddShoppingCart /> Add To Cart
        </Link>
        
        </div>
      </div>
    </div>
  );
}
