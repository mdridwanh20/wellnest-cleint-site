import React from "react";
import useAllUser from "../../Hook/useAllUser";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import Loading from "../../Loading";
import useAdmin from "../../Hook/useAdmin";

export default function AllUser() {
  
  const {userData, isLoading, refetch} = useAllUser()

  const axiosPublic = useAxiosPublic();
  const {isAdmin} = useAdmin()

  // make admin
  const handlerMakeAdmin = (id) => {
    axiosPublic
      .patch(`/users/admin/${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          console.log(toast.success("Admin successfully"));
        }
        refetch()
        console.log(res.data);
      })
      .catch((error) => {
        console.log("this is error from make admin", error);
      });
  };

  if(isLoading) {
    <Loading></Loading>
  }


  // delete user
  const handlerDelete = (id) => {
    axiosPublic
      .delete(`/users/${id}`)
      .then((res) => {
        if (res.data?.deletedCount > 0) {
          toast.success("Successfully deleted the user");
        }
        refetch()
      })
      .catch((error) => {
        console.log("this is error from delete user", error);
      });
  };



  
  

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.length > 0 ? (
              userData.map((user, index) => (
                <tr key={user._id} className="text-nowrap">
                  <th>{index + 1}</th>
                  <td>{user.name || "N/A"}</td>
                  <td>{user.email || "N/A"}</td>

                  <td>
                    {user.role === "admin" ? (
                      <>
                        {" "}
                        <span className="font-semibold cursor-pointer text-green-600">
                          Admin
                        </span>{" "}
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handlerMakeAdmin(user._id)}
                          className="text-blue-600 cursor-pointer hover:underline"
                        >
                          Make Admin
                        </button>
                      </>
                    )}
                  </td>

                  <td>
                    <button
                      onClick={() => handlerDelete(user._id)}
                      className="text-red-600 cursor-pointer transition p-1 hover:text-red-800"
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No user data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
