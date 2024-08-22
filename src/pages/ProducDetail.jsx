import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaCarSide } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { useTheme } from '../context/ThemeContext'; 

const ProducDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const { theme } = useTheme(); 
  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);
  const [isHoveredLogin,subscribe] = useState(false);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Successfully");
  };

  if (!product) return <div>Loading....</div>;

  return (
    <div
      className="mx-auto mt-4 px-8 md:px-16 lg:px-24 py-8"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product image */}
        <div
          className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center"
          style={{ backgroundColor: theme.cardBackground }}
        >
          <img src={product.image} alt={product.name} className="w-full" />
        </div>
        {/* Product information */}
        <div
          className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2"
          style={{ backgroundColor: theme.cardBackground }}
        >
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold mb-4" style={{ color: theme.textColor }}>
            ${product.price}
          </p>
          <div className="flex items-center mb-4 gap-x-2">
            <input

              type="number"
              id="quantity"
              min="1"
              className="border p-1 w-16 text-black text-center"
            />
            <button
              className="text-white py-1.5 px-4"
              onClick={(e) => handleAddToCart(e, product)}
              style={{
                backgroundColor: isHoveredLogin ? theme.hoverColor : theme.accentColor,
              }}
              onMouseEnter={() =>subscribe(true)}
              onMouseLeave={() =>subscribe(false)}
            >
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" style={{ color: theme.iconColor }} />
              Delivery & Return
            </p>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaQuestion className="mr-1" style={{ color: theme.iconColor }} />
              Ask a Question
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2" style={{ color: theme.textColor }}>
          Product Description
        </h3>
        <p>Product description will go here.</p>
      </div>
    </div>
  );
};

export default ProducDetail;
