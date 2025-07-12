import React, { useContext } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { GrGoogle } from "react-icons/gr";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../AuhtProvider/AuthProvider";

export default function Register_Form({
  handlerRegisterForm,
  handlerWithGoogle,
}) {
  const { loading } = useContext(AuthContext);

  return (
    <div>
      <div className="flex ">
        {/* Right side form */}
        <div className="py-10 flex-col flex w-full items-center justify-center">
          <div className="py-5 flex items-center flex-col space-y-1 justify-center">
            <h1 className="font-bold text-2xl lg:text-3xl text-[var(--primaryColor)] ">
              Sign Up your account
            </h1>
            <p className="text-[14px] lg:text-base text-[var(--primaryColor)]">
              Please enter your details to sign Up
            </p>
          </div>

          <div className="lg:w-[400px] w-full rounded-2xl border border-gray-100 shadow-md bg-white p-4">
            {/* Google Sign-in Button */}
            <button
              onClick={handlerWithGoogle}
              className="mt-5 w-full h-11 flex  items-center justify-center space-x-2 rounded-full cursor-pointer text-white bg-[var(--primaryColor)] hover:opacity-90 transition-opacity"
            >
              <GrGoogle className="text-base" />
              <span className="text-base font-semibold">Google</span>
            </button>

            <form
              onSubmit={handlerRegisterForm}
              className=" flex flex-col items-center justify-center"
            >
              {/* Divider */}
              <div className="divider">OR</div>

              {/* Name Field with Icon */}
              <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <MdOutlineDriveFileRenameOutline className="text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="name "
                  required
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                />
              </div>

              {/* Email Field with Icon */}
              <div className="flex mt-6 items-center w-full border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
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
                    Register
                  </button>
                )}
                
              </div>

              {/* Sign up */}
              <p className="text-gray-500/90 text-sm mt-4">
                Don’t have an account?{" "}
                <Link className="font-semibold" to={"/login"}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
