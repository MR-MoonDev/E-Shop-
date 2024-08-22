import React, { useState } from "react";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useTheme } from "../context/ThemeContext";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isBackgroundHovered, setIsBackgroundHovered] = useState(false);

  const HandleAddtoCard = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Successfully");
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div
         className="relative mb-5 p-4 shadow rounded border transform transition duration-300 hover:scale-105"
         style={{
           backgroundColor: isHovered
             ? theme.secondaryBackgroundColor
             : theme.cardBackgroundColor,
           color: theme.textColor,
           borderColor: theme.borderColor,
         }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
       >
        <div>
          <img
            src={product.image}
            alt="product not found"
            className="w-full h-48 object-contain mb-4"
          />
          <div className="flex items-start flex-col gap-2">
            <h3 className="text-lg font-semibold text-center">
              {product.name}
            </h3>
            <p
              className="text-gray-500 text-center"
              style={{ color: theme.textColor }}
            >
              ${product.price}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 flex-wrap gap-4">
          <div>
            <StarRating />
          </div>
          <div
            className="flex items-center justify-center p-2 group text-xs rounded-full transition-all duration-300"
            style={{
              backgroundColor: isHovered ? theme.hoverColor : theme.accentColor,
              color: theme.buttonTextColor,
            }}
            onClick={(e) => HandleAddtoCard(e, product)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-white">Add to cart</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
