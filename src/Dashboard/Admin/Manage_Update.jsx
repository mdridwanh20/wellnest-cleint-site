import React from "react";
import { useParams } from "react-router";
import Update_Form from "./Update_Form";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";

export default function Manage_Update() {
  const { id } = useParams();

  console.log(id);
  const axiosPublic = useAxiosPublic();

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



  const handlerUpdate = async (e) => {
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
    const updateData = {
      productName,
      productDescription,
      category,
      productPrice,
      offerPrice,
      images: imageUrl,
    };

    console.log("Update data:", updateData);

    
    try {
      const res = await axiosPublic.patch(`/add-items/${id}`, updateData);
      console.log(res.data);
      toast.success("Item updated successfully!");
    } catch (error) {
      console.error("Failed to update item:", error);
      toast.error("Failed to update item");
    }


    form.reset();

  };

  return (
    <div>
      <Update_Form handlerUpdate={handlerUpdate}></Update_Form>
    </div>
  );
}
