// ✅ OrderSummary.jsx   (fully updated, clean & minimal)

import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";      // ← fixed import
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { AuthContext } from "../../AuhtProvider/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";

/* helper: 12 345 -> 12,345 */
const formatPrice = (num) =>
  typeof num === "number"
    ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : num;



export default function OrderSummary({ localCart }) {


  const axiosPublic = useAxiosPublic();              // axios instance
  const navigate     = useNavigate();
  const { user }     = useContext(AuthContext);      // current user

  /* spinner while submitting */
  const [placing, setPlacing] = useState(false);

  /* numbers */
  const subTotal = localCart.reduce(
    (t, i) => t + (i.offerPrice || i.productPrice) * i.quantity,
    0
  );



  const shippingFee  = 0;
  const totalAmount  = subTotal + shippingFee;



  /* cached address from localStorage */
  const address = JSON.parse(localStorage.getItem("userAddress") || "null");



  /* main click handler */
  const handleOrder = async () => {
    if (!address) {
      toast.error("Please complete the address form first.");
      document.getElementById("address-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (localCart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    const order = {
      userId: user?.uid,
      orderItems: localCart.map((item) => ({
        name:     item.name,
        image:    item.images,
        category: item.category,
        price:    item.offerPrice || item.productPrice,
        quantity: item.quantity,
        total:    (item.offerPrice || item.productPrice) * item.quantity,
      })),
      shippingAddress: {
        fullName:    address.fullName,
        number:      address.number,
        division:    address.division,
        district:    address.district,
        thana:       address.thana,
        fullAddress: address.fullAddress,
      },
      paymentSummary: { subTotal, shippingFee, totalAmount },
      status:        "pending",
      paymentMethod: "Cash On Delivery",
      orderedAt:     new Date().toISOString(),
    };


    try {
      setPlacing(true);
      const { data } = await axiosPublic.post("/order-confirm", order);
      const newOrderId = data.insertedId;           // backend returns this
      toast.success("Order placed!");

      navigate(`/user-order-details/${newOrderId}`);    
      // route to single‑order page


    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to place order");
      console.error("Order error →", err);
    } finally {
      setPlacing(false);
    }


  };




  /* UI */
  return (
    <div className="max-w-[360px] w-full bg-gray-100/40 p-5 mt-4 border border-gray-300/70 mx-auto">
      <h2 className="text-xl font-medium">Checkout Summary</h2>
      <hr className="border-gray-300 my-5" />

      {/* address & payment */}
      <div className="mb-6">
        <p className="text-sm font-medium uppercase">Delivery Address</p>
        <div className="relative flex justify-between items-start mt-2">
          <p className="text-gray-500">
            {address?.fullAddress || "No address found"}
          </p>
          <button className="text-indigo-500 hover:underline">Change</button>
        </div>

        <p className="text-sm font-medium uppercase mt-6">Payment Method</p>
        <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
          <option>Cash On Delivery</option>
          <option>Online Payment</option>
        </select>
      </div>

      <hr className="border-gray-300" />

      {/* totals */}
      <div className="text-gray-500 mt-4 space-y-2">
        <p className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subTotal)} Tk</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping Fee</span>
          <span className="text-green-600">{formatPrice(shippingFee)} Tk</span>
        </p>
        <p className="flex justify-between text-lg font-medium mt-3">
          <span>Total Amount:</span>
          <span className="text-black">{formatPrice(totalAmount)} Tk</span>
        </p>
      </div>

      {/* order button */}
      <button
        onClick={handleOrder}
        className="w-full flex items-center justify-center gap-2 py-3 mt-6 bg-[var(--primaryColor)] text-white font-medium rounded transition"
        disabled={placing}
      >
        {placing ? <TbFidgetSpinner className="animate-spin text-lg" /> : "Place Order"}
      </button>
    </div>
  );
}
