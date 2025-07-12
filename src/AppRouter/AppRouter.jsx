import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllProduct from "../Pages/AllProduct";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Dashboard from "../Dashboard/Dashboard";
import AddItems from "../Dashboard/Admin/AddItems";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AllUser from "../Dashboard/Admin/AllUser";
import ManageBooking from "../Dashboard/Admin/ManageBooking";
import ManageItems from "../Dashboard/Admin/ManageItems";
import Contact from "../Dashboard/Contact";
import Manage_Update from "../Dashboard/Admin/Manage_Update";
import Cart from "../Dashboard/Order/Cart";
import Not_Found from "../Not_Found";
import AddressForm from "../Dashboard/Order/AddressForm";
import AddToCart from "../Pages/AddToCart";
import OrderAction from "../Dashboard/Admin/OrderAction";
import User_Order_Details from "../Dashboard/User/User_Order_Details";
import User_Order from "../Dashboard/User/User_Order";

function AppRouter() {
  return (
    <Routes>

      <Route element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/all-product" element={<AllProduct></AllProduct>}></Route>
        <Route
          path="/add-to-cart/:id"
          element={<AddToCart></AddToCart>}
        ></Route>

        <Route path="/cart" element={<Cart></Cart>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/address" element={<AddressForm></AddressForm>}></Route>


           {/* user dashboard route */}
      <Route path="/user-order" element={<User_Order></User_Order>}></Route>

      <Route
        path="/user-order-details/:id"
        element={<User_Order_Details></User_Order_Details>}
      ></Route>



      </Route>

      {/* dashboard route here */}
      <Route path="/dashboard" element={<Dashboard></Dashboard>}>
        {/* admin route */}
        <Route path="add-item" element={<AddItems></AddItems>}></Route>
        <Route path="add-home" element={<AdminHome></AdminHome>}></Route>
        <Route path="all-user" element={<AllUser></AllUser>}></Route>

        <Route
          path="manage-booking"
          element={<ManageBooking></ManageBooking>}
        ></Route>

        <Route
          path="manage-booking"
          element={<ManageBooking></ManageBooking>}
        ></Route>

        <Route path="manage-item" element={<ManageItems></ManageItems>}></Route>
        <Route
          path="order-action"
          element={<OrderAction></OrderAction>}
        ></Route>

        <Route
          path="manage-update/:id"
          element={<Manage_Update></Manage_Update>}
        ></Route>
      </Route>

      {/*  */}

     

      {/* Catch-all Not Found route */}
      <Route path="*" element={<Not_Found></Not_Found>}></Route>
    </Routes>
  );
}

export default AppRouter;
