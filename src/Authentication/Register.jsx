import React, { useContext } from "react";
import Register_Form from "./Register_Form";
import { AuthContext } from "../AuhtProvider/AuthProvider";
import toast from "react-hot-toast";

import useAxiosPublic from "../Hook/useAxiosPublic";
import Loading from "../Loading";

export default function Register() {
  const { setUser, googleWithLogin, navigate, loading, newUser } =
    useContext(AuthContext);

  const axiosPublic = useAxiosPublic();


  const handlerRegisterForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    newUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully Register");

        // userinfo :
        const userInfo = {
          displayName: name,
          email: email,
          role: "customer"
        };

        // send to data on mongodb
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log("response server mongodb", res);
          })
          .catch((error) => {
            console.log("Failed to server data ", error);
          });

        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Failed register");
        console.log("error register user", error);
      });

    form.reset();
  };


 
  // google with register
  const handlerWithGoogle = () => {
    googleWithLogin()
      .then((result) => {
        setUser(result.user);
        console.log("success google login", result.user);
        navigate("/");
      })

      .catch((error) => {
        console.error("Google login failed:", error.message);
      });
      
  };


  
  return (
    <div>        
      <Register_Form
        handlerRegisterForm={handlerRegisterForm}
        handlerWithGoogle={handlerWithGoogle}
      ></Register_Form>
    </div>
  );
}
