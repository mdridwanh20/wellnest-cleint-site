import React, { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../AuhtProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

export default function useAdmin() {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const {
    data: isAdmin,
    refetch,
    isPending: adminLoading,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !!user?.email, // 🔐 only run when email exists
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/admin/${user.email}`);
      console.log(res.data.admin);
      return res.data.isAdmin;
    },
  });


  return {isAdmin, adminLoading, refetch}
}
