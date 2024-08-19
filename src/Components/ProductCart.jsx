import React from "react";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const HandleAddtoCard = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Successfully");
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="relative bg-white hover:bg-slate-100 p-4 shadow rounded border transform transition duration-300 hover:scale-105">
        <div>
          <img
            src={product.image}
            alt="product not found"
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold text-center">{product.name}</h3>
          <p className="text-gray-500 text-center">${product.price}</p>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between mt-2">
          <div className="flex items-center">
            <StarRating />
          </div>
          <div
            className="relative flex items-center justify-center w-8 h-8 
            bg-red-600 group text-white text-sm rounded-full hover:w-28 hover:bg-red-700
            transition-all duration-300"
            onClick={(e) => HandleAddtoCard(e, product)}
          >
            <span className="group-hover:hidden">+</span>
            <span className="hidden group-hover:block">Add to cart</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
