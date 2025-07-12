import axios from 'axios'
import React from 'react'

export default function useAxiosPublic() {

    const axiosPublic = axios.create({
        baseURL: "https://wellnest-server-site.vercel.app"
    })

    return axiosPublic
  
}
