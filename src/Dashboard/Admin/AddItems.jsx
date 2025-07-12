import React from "react";
import Add_Item_Form from "./Add_Item_Form";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function AddItems() {
  // Async function to upload image to ImgBB
  const uploadImageBb = async (imageFile) => {
    // Getting ImgBB API Key from .env file
    const apiKey = import.meta.env.VITE_IMG_BB_API_KEY;

    const formData = new FormData(); // Creating FormData to send image file
    formData.append("image", imageFile); // Append file with key 'image'

    // Sending POST request to ImgBB API with fetch()
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    // Convert response to JSON format
    const data = await response.json();
    return data.data.url;
  };

  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate()

  const handlerAddItem = async (e) => {
    e.preventDefault();
    const form = e.target;

    const productName = form.productName.value;
    const productDescription = form.productDescription.value;
    const category = form.category.value;
    const productPrice = form.productPrice.value;
    const offerPrice = form.offerPrice.value;

    // Collect image files from inputs named image0, image1, image2, image3
    const fileInput = form.image;
    let imageUrl = "";

    if (fileInput && fileInput.files.length > 0) {
      const imageFile = fileInput.files[0];
      try {
        imageUrl = await uploadImageBb(imageFile);
      } catch (error) {
        console.error("Image upload failed:", error);
        return;
      }
    }

    
    // Now you have all form data; handle it here or send to API
    const itemData = {
      productName,
      productDescription,
      category,
      productPrice,
      offerPrice,
      images: imageUrl,
    };

    console.log("Submitted Item:", itemData);

    // send to data on mongodb
    axiosPublic
      .post("/add-items", itemData)
      .then((res) => {
        toast.success("Successfully your item");
        console.log("response server", res.data);
        navigate('/dashboard/manage-item')
      })
      .catch((error) => {
        toast.error("Failed your item. please try again");
        console.log("Failed to add item data", error);
      });

    form.reset();
  };

  return (
    <div>
      <Add_Item_Form handlerAddItem={handlerAddItem}></Add_Item_Form>
    </div>
  );
}
