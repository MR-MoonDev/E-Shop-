import React from "react";
import { categories } from "../MockData";
import { Images } from "../assets/Assets";
const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12 ">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 md:mt-0 h-96 relative">
          <img src={Images.HeroImage} alt="" className="h-full w-full" />
          <div className="absolute top-16 left-8">
            <p className="text-gray-600 mb-4">Code with Muneeb</p>
            <h2 className="text-3xl font-bold  ">WELCOME TO E-SHOP</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800">
              MILLIONS+ PRODUCTS
            </p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
