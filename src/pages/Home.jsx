import React, { useEffect } from "react";
import { categories } from "../assets/MockData";
import { mackdata } from "../assets/MockData";
import InfoSection from "../Components/InfoSection";
import CategorySection from "../Components/CategorySection";
import { setProducts } from "../redux/ProductSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Mackdata_image } from "../assets/Assets";
import ProductCart from "../Components/ProductCart";
import { useNavigate } from "react-router-dom";
import Shop from "./Shop";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mackdata));
  }, []);
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  return (
    <div>
      <div className=" mt-4 px-4 md:px-16 lg:px-24">
        <div className="container  mx-auto py-4 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-3/12 ">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-6   bg-gray-100 p-2 border">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-500 mr-2 rounded-full "></div>
                  {category}
                </li>
              ))}
            </ul>
          </div> 
          <div className="w-full bg-red-600 md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img
              src={Mackdata_image.HeroImage}
              alt="image not found"
              className="h-full w-full "
            />
            <div className="absolute top-16 left-8">
              <p className="text-gray-600 mb-4 ">Code with Muneeb</p>
              <h2 className="text-3xl font-bold  ">WELCOME TO ShopNest</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS+ PRODUCTS
              </p>
              <button
                className="bg-red-600 px-8 py-1.5 rounded-sm text-white mt-4
               hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
                onClick={goToShop}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto mt-4 ">
          <h2 className="text-2xl font-bold mb-6 text-center ">Top products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.products.slice(0, 5).map((product, index) => (
              <ProductCart product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};
export default Home;
