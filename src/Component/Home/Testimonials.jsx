import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HeadingH2 } from "../Common/Typography/Typography";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sara Ali",
      text: "Amazing service and quick delivery. Highly recommend Wellnest!",
      rating: 5,
    },
    {
      name: "John Doe",
      text: "The products were exactly as described. Great quality and price.",
      rating: 4.5,
    },
    {
      name: "Tanjim Rahman",
      text: "I love the wide range of products and the customer support was excellent.",
      rating: 4,
    },
  ];

  return (
    <section className="lg:py-16 py-10 m-auto bg-gray-100 px-4">

      <div className=" container m-auto text-center">

        <div className="pb-8">
            <HeadingH2 headingH2={'What Our Customers Say'}></HeadingH2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-left">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(Math.floor(t.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {t.rating % 1 !== 0 && <FaStarHalfAlt />}
              </div>
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-bold text-indigo-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
