import React, { useContext } from 'react'
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../AuhtProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

export default function useOrder() {

  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const {
    data: order = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: [user?.email, "addItem"],
    queryFn: async() => {
      const res = await axiosPublic.get(`/order-confirm`);
      return res.data;
    },
  });


  return { order, refetch, loading };
}
