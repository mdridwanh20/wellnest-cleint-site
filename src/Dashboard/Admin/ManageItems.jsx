import React from "react";
import useAddItem from "../../Hook/useAddItem";
import { MdEdit, MdDelete } from "react-icons/md";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import Loading from "../../Loading";
import { useNavigate } from "react-router";

export default function ManageItems() {
  const { addItem, refetch, loading } = useAddItem();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  



  const handlerDelete = (id) => {
    axiosPublic
      .delete(`/add-items/${id}`)
      .then((res) => {
        if (res.data?.deletedCount > 0) {
          toast.success("Successfully deleted the item");
          console.log(res.data);
        }
        refetch();
      })
      .catch((error) => {
        console.log("this is error from delete user", error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  const handlerUpdate =(id) =>{
    navigate(`/dashboard/manage-update/${id}`)
      
  }



  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h1 className="text-2xl text-[var(--primaryColor)] font-bold mb-4">
        Total Items: {addItem?.length || 0}
      </h1>

      <div className="overflow-x-auto">
        {addItem?.length > 0 ? (
          <table className="table table-zebra w-full bg-white shadow-md rounded-box">
            <thead className="bg-[var(--primaryColor)] text-white">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>

            <tbody>
              {addItem.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>

                  <td>
                    {item.images ? (
                      <img
                        src={item.images}
                        alt={item.productName}
                        className="w-10 h-10 object-cover rounded-md"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="lg:text-base text-[12px]">{item.productName}</td>
                  <td className="lg:text-base text-[10px]">${item.offerPrice}</td>

                  <td className="text-center">
                    <button
                    onClick={() => handlerUpdate(item._id)}
                     className="border p-1 cursor-pointer rounded text-[var(--primaryColor)]">
                      <MdEdit size={18} />
                    </button>
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => handlerDelete(item._id)}
                      className="rounded border p-1 cursor-pointer text-red-500"
                    >
                      <MdDelete size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-10 text-gray-500 text-sm">কোনো আইটেম পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
}
