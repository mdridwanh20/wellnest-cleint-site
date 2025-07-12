import React from "react";
import useAddItem from "../../../Hook/useAddItem";
import Categories_Card from "./Categories_Card";
import Loading from "../../../Loading";
import { HeadingH2 } from "../../Common/Typography/Typography";

export default function Categories() {
  const { addItem, loading } = useAddItem();

  if (loading) {
    return <Loading />;
  }

  // Get all items by category
  const homeDecor = addItem.filter((item) => item.category === "Home Decor");
  const electronics = addItem.filter((item) => item.category === "Electronics");
  const accessories = addItem.filter((item) => item.category === "Accessories");
  const books = addItem.filter((item) => item.category === "Books");

  // Take the first item from each filtered list (if exists)
  const categoryItems = [homeDecor[0], electronics[0], accessories[0], books[0]].filter(Boolean);

  const noCategoryAvailable = categoryItems.length === 0;

  return (
    <div className="">
      <div className="py-3">
        <HeadingH2 headingH2="Categories" className="" />
      </div>

      {noCategoryAvailable ? (
        <div className="text-gray-500">
          <p>No categories found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {categoryItems.map((item) => (
            <Categories_Card key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
