import React, { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../AuhtProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

export default function useAddItem() {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const {
    data: addItem = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: [user?.email, "addItem"],
    queryFn: async() => {
      const res = await axiosPublic.get(`/add-items`);
      return res.data;
    },
  });


  return { addItem, refetch, loading };
  
}
