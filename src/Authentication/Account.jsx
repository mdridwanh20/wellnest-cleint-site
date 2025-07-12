import React from 'react'
import Login from './Login'
import { Outlet } from 'react-router'
import Register from './Register'

export default function Account() {
  return (
    <div>
        
        <h1>This is Account</h1>

        <Login></Login>
        <Outlet></Outlet>
        <Register></Register>

    </div>
  )
}
