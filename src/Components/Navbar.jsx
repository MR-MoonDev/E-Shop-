import React from "react";
import { Link } from "react-router-dom";
import { Nav_Icons } from "../Icons/Nav_Icon";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector(state=>state.cart.products)
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-shope</Link>
        </div>
        <div className="relative flex-1  mx-4">
          <form>
            <input className="w-full border py-2 px-4" type="text" placeholder="search product" />
            <Nav_Icons.Search className="absolute top-3 right-3 text-red-500 " />
          </form>
        </div>
        <div className="flex flex-center space-x-4">
          <Link to="/cart" className="relative">
            <Nav_Icons.Shopping className="text-lg" />
             {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex items-center justify-center text-white">
                {products.length}</span>
             )}
          </Link>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <Nav_Icons.User />
          </button>
        </div> 
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shope</Link>
        <Link to="/" className="hover:underline">Contact</Link>
        <Link to="/" className="hover:underline">About</Link>
        </div>
    </nav>
  );
};

export default Navbar;
