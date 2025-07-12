import React from "react";
import BestSellers from "../Component/Home/BestSellers/BestSellers";
import { Btn, HeadingH2 } from "../Component/Common/Typography/Typography";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import "@lottiefiles/lottie-player"; // ✅ Registers the web component globally
import animationIcon from '../../src/assets/lottiefiles/Animation - 1750765404910.json'; // ✅ JSON animation file



// ✅ Optional: fallback default contact info
const DEFAULT_CONTACT = {
  phone: "01876258020",
  facebookUrl: "https://web.facebook.com/ridwanulhoque231",
  messengerUrl: "https://web.facebook.com/ridwanulhoque231",
};

export default function Cart_View({ item, handlerAddToCart, contact }) {

  const {
    _id,
    productName,
    productDescription,
    category,
    productPrice,
    offerPrice,
    images,
  } = item;

  // ✅ Use dynamic contact or fallback
  const { phone, facebookUrl, messengerUrl } = contact || DEFAULT_CONTACT;

  const description = [
    "High-quality material",
    "Comfortable for everyday use",
    "Available in different sizes",
  ];



  return (
    <div className="lg:py-16 py-10 px-4">

      <div className="pb-5">
        <span>Home</span> / <span>Products</span> / <span>{category}</span> /
        <span className="text-[var(--primaryColor)] font-bold capitalize">
          {" "}
          {productName}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* ✅ Product Image */}
        <div className="border border-gray-300 rounded p-3">
          <img
            className="w-full object-cover lg:h-[400px] rounded"
            src={images}
            alt={productName}
          />
        </div>

        {/* ✅ Product Info */}
        <div className="space-y-1">
          <HeadingH2 headingH2={productName} />

          <div className="font-semibold flex-col flex">
            <h3>RWI: HP01</h3>

            <div className="flex text-gray-600/70 justify-between gap-2">
              {/* ✅ Dynamic Phone */}
              <div className="flex items-center  justify-center ">

                  <h1> Call Us:</h1>
                  
                        <div className="mx-2">
                                {/* ✅ Use native custom element <lottie-player> directly */}
                              <lottie-player
                              
                                src={animationIcon}
                                background="transparent"
                                speed="0.5"
                                style={{ width: "25px", height: "25px", }}
                                loop
                                autoplay
                              ></lottie-player>
                  

                        </div>
                  <a className="" href={`tel:${phone}`}>
                     {phone}
                  </a>

                
              </div>

              {/* ✅ Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-full border"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>

                <a
                  href={messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-full border"
                  aria-label="Messenger"
                >
                  <FaFacebookMessenger />
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Price Info */}
          <div>
            <p className="text-2xl font-medium">
              Price : {productPrice}{" "}
              <span className="text-gray-700 text-[12px]">Tk</span>{" "}
            </p>

            <span className="text-gray-500/70">inclusive Shipping Cost</span>
          </div>

          {/* ✅ Description */}
          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-500/70">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* ✅ Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              onClick={() => handlerAddToCart(item)}
              className="w-full py-2 cursor-pointer font-medium border border-gray-300 bg-gray-200 text-gray-800/80 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => handlerAddToCart(item)}
              className="w-full py-2 text-white hover:bg-teal-800 cursor-pointer font-medium bg-[var(--primaryColor)] transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>


            <div className="mt-3">
                  <h1 className="font-semibold">Product Description: </h1>
                  <h1 className="font-normal py-2 italic"> {item.productDescription} </h1>
            </div>

          

    </div>
  );
}
