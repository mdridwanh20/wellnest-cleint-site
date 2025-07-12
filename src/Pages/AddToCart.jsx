import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useParams } from "react-router";
import { AuthContext } from "../AuhtProvider/AuthProvider";
import Loading from "../Loading";
import BestSellers from "../Component/Home/BestSellers/BestSellers";
import toast from "react-hot-toast";
import Cart_View from "./Cart_View";

export default function AddToCart() {
  const { id } = useParams();
  const { user, navigate } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const [item, setItem] = useState(null);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axiosPublic.get(`/add-items/${id}`);
        setItem(res.data);
        return res.data;
      } catch (error) {
        console.log("this is from product details ---- >", error);
      }
    };

    fetchItem();
  }, []);

  

  const handlerAddToCart = async (item) => {
    const cartItem = {
      name: item.productName,
      images: item.images,
      brand: item.brand,
      productPrice: item.productPrice,
      offerPrice: item.offerPrice,
      category: item.category,
      user: user?.email,
      quantity: 1,
      addedAt: new Date(),
    };

    // ✅ Safely handle localStorage read
    const storedCart = localStorage.getItem("cartItems");
    const existingCart = storedCart ? JSON.parse(storedCart) : [];

    // ✅ Add new item to cart
    existingCart.push(cartItem);

    // ✅ Save updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    toast.success("Item added to cart!");
    navigate("/cart");
  };

  if (!item) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Cart_View handlerAddToCart={handlerAddToCart} item={item}></Cart_View>
    </div>
  );
}
