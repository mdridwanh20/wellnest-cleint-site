import React, { useContext, useEffect, useState } from 'react'
import useAxiosPublic from './useAxiosPublic'
import { AuthContext } from '../AuhtProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'

export default function useAllUser() {

    const axiosPublic = useAxiosPublic()

    const {data: userData = [], isLoading, refetch} = useQuery({

        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosPublic.get("/users")
            return res.data
        }

    })


    return {userData, isLoading, refetch}
  
}
