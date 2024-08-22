import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../Components/ProductCart";
import itemNotFoundImage from '../assets/ItemNotFound.jpg';
import { useTheme } from '../context/ThemeContext';

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  const { theme } = useTheme(); 

  return (
    <div
      className="mx-auto mt-4 px-8 py-5 md:px-16 lg:px-24"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Shop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filterProducts.map((product, index) => (
              <ProductCart product={product} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div
          className="flex justify-center items-center flex-col"
          style={{ backgroundColor: theme.secondaryBackgroundColor }}
        >
          <img src={itemNotFoundImage} alt="Item Not Found" />
          <p className="text-lg mt-4" style={{ color: theme.textColor }}>
            No items found
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterData;
