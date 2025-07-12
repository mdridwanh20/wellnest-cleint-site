import React from "react";
import { FaSearch, FaShoppingCart, FaShippingFast } from "react-icons/fa";
import { HeadingH2 } from "../Common/Typography/Typography";

// ✅ Reusable Step Card Component
const StepCard = ({ icon: Icon, title, description, color }) => (
  <div className="p-6 rounded-lg border border-gray-200 shadow-md">
    <Icon className={`text-[var(--primaryColor)] text-4xl mb-4`} />
    <h3 className={`font-bold text-xl mb-2 text-[var(--primaryColor)]`}>{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function How_Works() {
  return (
    <section className="lg:py-16 py-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <div className="pb-8">
            <HeadingH2 headingH2={'How It Works'}></HeadingH2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <StepCard
            icon={FaSearch}
            title="1. Browse Products"
            description="Explore thousands of products across different categories tailored to your lifestyle."
            color="[var(--primaryColor)]"
          />
          <StepCard
            icon={FaShoppingCart}
            title="2. Add to Cart"
            description="Add your desired items to the cart with one click and review them easily."
            color="indigo-600"
          />
          <StepCard
            icon={FaShippingFast}
            title="3. Fast Delivery"
            description="Complete your order and enjoy fast & free delivery right at your doorstep."
            color="indigo-600"
          />
        </div>
      </div>
    </section>
  );
}
