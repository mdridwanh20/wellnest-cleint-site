import React, { useContext, useState } from "react";
import Login_Form from "./Login_Form";
import { AuthContext } from "../AuhtProvider/AuthProvider";
import toast from "react-hot-toast";

export default function Login() {
  const { setUser, loginUser, googleWithLogin } = useContext(AuthContext);

  const handlerLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    // login user
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Welcome Back");
      })
      .catch((err) => {
        toast.error("Failed user, Please try again");
        console.log(err);
      });

    form.reset();
  };

  const handlerGoogleLogin = () => {

     googleWithLogin()
      .then((result) => {
        setUser(result.user);
        console.log("success google login", result.user);
        toast.success('success google login')
        navigate("/");
      })

      .catch((error) => {
        console.error("Google login failed:", error.message);
      });


  };



  return (
    <div>
      <Login_Form
        handlerGoogleLogin={handlerGoogleLogin}
        handlerLoginForm={handlerLoginForm}
      ></Login_Form>
    </div>
  );
}
