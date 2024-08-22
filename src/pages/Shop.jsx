import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../Components/ProductCart';
import { useTheme } from '../context/ThemeContext'; 

const Shop = () => {
  const { theme } = useTheme(); 
  const products = useSelector((state) => state.product);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }} className="mx-auto mt-4 px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: theme.textColor }}>Shop</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.products.map((product, index) => (
          <ProductCart product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
