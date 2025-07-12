// ✅ Cart.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Loading from "../../Loading";
import toast from "react-hot-toast";
import AddressForm from "./AddressForm";
import OrderSummary from "./Order_Summery";
import { HeadingH2 } from "../../Component/Common/Typography/Typography";

const formatPrice = (num) => {
  if (typeof num !== "number") return num;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function Cart() {
  const [localCart, setCart] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0) // ✅ Scroll to top when navigated
  }, [])


  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    const parsed = storedCart ? JSON.parse(storedCart) : [];
    setCart(parsed);
  }, []);


  const handlerDelete = (indexToDelete) => {
    const updatedCart = localCart.filter((_, index) => index !== indexToDelete);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Item removed from cart!");
  };

  const handlerIncreaseQuantity = (index) => {
    const updateCart = [...localCart];
    updateCart[index].quantity += 1;
    setCart(updateCart);
    localStorage.setItem("cartItems", JSON.stringify(updateCart));
  };

  const handlerDecreaseQuantity = (index) => {
    const updateCart = [...localCart];
    if (updateCart[index].quantity > 1) {
      updateCart[index].quantity -= 1;
      setCart(updateCart);
      localStorage.setItem("cartItems", JSON.stringify(updateCart));
    }
  };

  if (!localCart) return <Loading />;


  return (
    <div className="lg:py-16 py-10">
      <h1 className="text-3xl font-medium gap-2 flex items-center">

        <HeadingH2 headingH2={'Shopping'}></HeadingH2>
        <span className="text-base text-indigo-500">{localCart.length}</span>

      </h1>

      {localCart.map((product, index) => (
        <div
          key={index}
          className="grid border-0 pt-2 border-b-1 border-gray-400 pb-4 text-gray-500 items-center text-sm md:text-base font-medium"
        >
          <div className="flex font-normal justify-between lg:font-semibold lg:text-lg text-[15px] items-center ">
            <div className="cursor-pointer text-nowrap gap-3 flex rounded">
              <div className=" p-2 w-24 h-28">
                <img
                  className=" rounded  shadow object-contain"
                  src={product?.images}
                  alt={product?.productName}
                />
              </div>

              <div className="lg:text-base mt-2 text-[12px] space-y-1">
                <p className="font-semibold">{product?.name}</p>
                <div>
                  <span>Size: {product?.size || "N/A"}</span>
                </div>
                <div className="text-[13px] text-gray-500">
                  <span className="line-through text-[10px]">
                    {formatPrice(product?.productPrice)} Tk
                  </span>{" "}
                  →
                  <span className="text-[var(--primaryColor)]">
                    {formatPrice(product?.offerPrice || product?.productPrice)}{" "}
                    Tk
                  </span>
                </div>
                <div className="text-sm">
                  {product.quantity} ×{" "}
                  {formatPrice(product?.offerPrice || product?.productPrice)} =
                  <span className="text-[var(--primaryColor)] font-bold">
                    {formatPrice(
                      (product?.offerPrice || product?.productPrice) *
                        product.quantity
                    )}{" "}
                    Tk
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center w-20 h-24 flex-col justify-between">
              <div className="flex justify-center">
                <button
                  onClick={() => handlerDelete(index)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  <FiTrash2 size={26} />
                </button>
              </div>
              <div className="inline-flex bg-white items-center rounded-md overflow-hidden border border-gray-300">
                <button
                  onClick={() => handlerDecreaseQuantity(index)}
                  className="px-2 text-gray-600 hover:bg-gray-200 text-lg"
                >
                  −
                </button>
                <div className="w-7 text-center text-black font-medium">
                  {product.quantity}
                </div>
                <button
                  onClick={() => handlerIncreaseQuantity(index)}
                  className="px-2 text-gray-600 hover:bg-gray-200 text-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Link
        to="/all-product"
        className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium"
      >
        <AiOutlineArrowLeft size={16} /> Continue Shopping
      </Link>

      {/* ✅ Order Summary Section */}
      <div id="order-summary">
        <OrderSummary localCart={localCart} />
      </div>

      {/* ✅ Address Form Section */}
      <div id="address-form" className="mt-10 max-w-2xl text-center mx-auto">
        <AddressForm localCart={localCart} />
      </div>
      
    </div>
  );
}
