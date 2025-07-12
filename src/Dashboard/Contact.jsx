import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuhtProvider/AuthProvider';

export default function Contact() {

    const {navigate} = useContext(AuthContext)
    const handlerSubmit = () =>{
        toast.success('Thanks for you submit')
        navigate('/')
    }


  return (
    <div>
      <form className="flex lg:w-[400px] m-auto p-5 shadow-md bg-white py-10 rounded flex-col items-center text-sm text-slate-800">
        <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
          Contact Us
        </p>
        <h1 className="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
        <p className=" text-gray-500 pb-10 text-center">
          Or just reach out manually to us at{' '}
          <a href="mailto:hello@prebuiltui.com" className="text-indigo-600 hover:underline">
            webridwan20@gmail.com
          </a>
        </p>

        <div className="w-full px-4">
          {/* Full Name */}
          <label htmlFor="name" className="font-medium">
            Full Name
          </label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            {/* User SVG Icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                fill="#475569"
              />
            </svg>
            <input
              type="text"
              id="name"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <label htmlFor="email-address" className="font-medium mt-4">
            Email Address
          </label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            {/* Email SVG Icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                fill="#475569"
              />
            </svg>
            <input
              type="email"
              id="email-address"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Message */}
          <label htmlFor="message" className="font-medium mt-4">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all"
            placeholder="Enter your message"
            required
          ></textarea>

          {/* Submit Button */}
          <button
          onClick={handlerSubmit}
            type="submit"
            className="flex items- cursor-pointer justify-center gap-1 mt-5 bg-[var(--primaryColor)] text-white py-2.5 w-full rounded-full transition"
          >
            Submit Form
            {/* Arrow SVG Icon */}
            <svg
              className="mt-0.5"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
