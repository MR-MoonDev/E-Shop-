import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../Components/ProductCart";
import itemNotFoundImage from '../assets/ItemNotFound.jpg';
const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className=" mx-auto py-12 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center ">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filterProducts.map((product, index) => (
              <ProductCart product={product} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
      <img src={itemNotFoundImage} alt="Item Not Found" />
      <div></div>
        </div>
      )}
    </div>
  );
};

export default FilterData;
