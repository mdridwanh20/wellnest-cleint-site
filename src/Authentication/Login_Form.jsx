import React from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { GrGoogle } from "react-icons/gr";
import { Link } from "react-router";
import { Btn } from "../Component/Common/Typography/Typography";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { TbFidgetSpinner } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../AuhtProvider/AuthProvider";

export default function Login_Form({ handlerLoginForm, handlerGoogleLogin }) {

  const { loading } = useContext(AuthContext);


  return (
    <div className="flex ">
      {/* Right side form */}

      <div className="py-10  flex-col flex w-full items-center justify-center">
        <div className="py-5 flex items-center flex-col  justify-center">
          <p className="font-bold text-[var(--primaryColor)]">Welcome Back</p>
          <h1 className="font-bold text-2xl lg:text-3xl text-[var(--primaryColor)] ">
            Sign In your account
          </h1>
          <p className="text-[14px] lg:text-base text-[var(--primaryColor)]">
            Please enter your details to sign in
          </p>
        </div>

        <div className="lg:w-[400px] w-full rounded-2xl border border-gray-200 shadow-md bg-white p-4">
          <div className="flex lg:hidden items-center justify-between"></div>

          {/* Google Sign-in Button */}
          <button onClick={handlerGoogleLogin} className="mt-5 w-full h-11 flex items-center justify-center space-x-2 rounded-full cursor-pointer text-white bg-[var(--primaryColor)] hover:opacity-90 transition-opacity">
            <GrGoogle className="text-base" />
            <span className="text-base font-semibold">Google</span>
          </button>

          <form
            onSubmit={handlerLoginForm}
            className="  flex flex-col items-center justify-center"
          >
            {/* Divider */}
            <div className="divider">OR</div>

            {/* Email Field with Icon */}
            <div className="flex  items-center w-full border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <FiMail className="text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                required
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>

            {/* Password Field with Icon */}
            <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <FiLock className="text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>

            {/* Submit */}

            <div className="mt-8 gap-2 text-center flex items-center justify-center w-full h-11 rounded-full cursor-pointer text-white bg-[var(--primaryColor)] hover:opacity-90 transition-opacity">
              {loading ? (
                <TbFidgetSpinner className="animate-spin text-xl" />
              ) : (
                <button type="submit" className="text-base font-semibold">
                  Login
                </button>
              )}
            </div>

            {/* Sign up */}
            <p className="text-gray-500/90 text-sm mt-4">
              I have already account?{" "}
              <Link className="font-semibold" to={"/register"}>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
