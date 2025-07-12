// src/Pages/Home.js

import BestSellers from "../Component/Home/BestSellers/BestSellers";
import Categories from "../Component/Home/Categories/Categories";
import HeroSection from "../Component/Home/HeroSection";
import How_Works from "../Component/Home/How_Works";
import Newsletter from "../Component/Home/Newsletter";
import ShowProduct from "../Component/Home/ShowProduct";
import Testimonials from "../Component/Home/Testimonials";
import WhyWeAreBest from "../Component/Home/WhyWeAreBest";


export default function Home() {
  return (
    <div className="">

      <HeroSection></HeroSection>
      {/* <ShowProduct></ShowProduct> */}

      <div className="container m-auto px-3">
        <Categories></Categories>
      <BestSellers></BestSellers>
      <WhyWeAreBest></WhyWeAreBest>
      <Testimonials></Testimonials>
      <How_Works></How_Works>
      <Newsletter></Newsletter>
      </div>

      
    </div>
  );
}


