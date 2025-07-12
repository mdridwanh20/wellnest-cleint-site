import React, { useEffect, useState } from "react";
import useAddItem from "../../Hook/useAddItem";

export default function Update_Form({ handlerUpdate }) {

  const { addItem } = useAddItem();
  const [previews, setPreviews] = useState(Array(4).fill(null));


    useEffect(() => {
    if (addItem?.images) {
      setPreviews([addItem.images]); // preload the image preview from existing item
    }
  }, [addItem])


  const handlePreview = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedPreviews = [...previews];
      updatedPreviews[index] = imageUrl;
      setPreviews(updatedPreviews);
    }
  };

    if (!addItem) return <div className="p-4">Loading item data...</div>;


  return (
    <div className="flex flex-col justify-between bg-white">
      <form onSubmit={handlerUpdate} className="p-2 mt-1 space-y-5">
        <div>
          <p className="text-xl font-bold pb-1 text-[var(--primaryColor)]">
            Product Image
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <label htmlFor="image" className="cursor-pointer">
              <input
                accept="image/*"
                type="file"
                id="image"
                name="image"
                hidden
                onChange={(e) => handlePreview(e, 0)} // index 0
              />
              <img
                src={
                  previews[0] ||
                  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                }
                alt="upload preview"
                width={100}
                height={100}
                className="border rounded"
              />
            </label>
          </div>
        </div>

        {/* Other form fields stay the same */}
        <div className="flex flex-col gap-1 ">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            name="productName"
            type="text"
            defaultValue={addItem.productName || ""}
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            name="productDescription"
            rows={4}
            defaultValue={addItem.productDescription || ""}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            defaultValue={addItem.category || ""}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          >
            <option value="">Select Category</option>
            {["Electronics", "Accessories", "Books", "Home Decor"].map(
              (item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <input
              id="product-price"
              type="number"
              defaultValue={addItem.productPrice || ""}
              name="productPrice"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              id="offer-price"
              type="number"
              name="offerPrice"
              defaultValue={addItem.offerPrice || ""}
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn cursor-pointer h-9 w-30 bg-[var(--primaryColor)] text-white font-medium rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
