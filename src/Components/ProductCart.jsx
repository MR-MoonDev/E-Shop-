import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const HandleAddtoCard =(e,product)=>{
   e.stopPropagation();
   e.preventDefault();
   dispatch(addToCart(product));
   alert("product Added Succesfully")
  }
  return (
    <div className="bg-white p-4 shadow rounded reative border transform transition duration-300 hover:scale-105">
      <div>
        <img
          src={product.image}
          alt="product not found"
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-500">${product.price}</p>
      </div>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8
       bg-red-600 group text-white text-sm rounded-full hover:w-28 hover:bg-red-700
        transition-all duration-300 " onClick={(e)=>HandleAddtoCard(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCart;
