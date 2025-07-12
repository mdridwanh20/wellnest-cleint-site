import React from "react";
import useAddItem from "../../Hook/useAddItem";

export default function ShowProduct() {
  const { addItem } = useAddItem();

  console.log(addItem);

  return (
    <div className="py-10 flex items-center justify-center">

      <div className="grid gap-5 lg:gap-10  grid-cols-4 lg:grid-cols-6">
        {addItem.map((item) => (
          <div>
            <img className="lg:w-32 w-full h-13 lg:h-32 border-4 border-slate-200 shadow-md  object-cover" src={item.images} alt="" />
          </div>
        ))}
      </div>

    </div>
  );
}
