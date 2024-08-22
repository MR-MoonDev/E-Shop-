// components/Navbar.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav_Icons } from "../Icons/Nav_Icon";
import { useDispatch, useSelector } from "react-redux";
import Registered from "./Registered";
import Login from "./Login";
import Modal from "./Modal";
import Contact from "./Contact";
import { setSearchTerm } from "../redux/ProductSlice";
import { useTheme } from "../context/ThemeContext";
import { UseHoverStyle } from "./UseHoverStyle ";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isModelOpen, setisModelOpen] = useState(false);
  const [isLogin, setisLogin] = useState(true);
  const [search, setsearch] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSingUp = () => {
    setisLogin(false);
    setisModelOpen(true);
  };

  const openLogin = () => {
    setisLogin(true);
    setisModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const linkHover = UseHoverStyle(theme.accentColor);
  const buttonHover = UseHoverStyle(theme.accentColor);
  const HomeHover = UseHoverStyle(theme.accentColor);
  const ShopHover = UseHoverStyle(theme.accentColor);
  const ContactHover = UseHoverStyle(theme.accentColor);
  const AboutHover = UseHoverStyle(theme.accentColor);

  return (
    <nav className="shadow-md shadow-slate-400" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold transform transition-transform duration-300 hover:scale-105">
          <Link
            to="/"
            style={linkHover.hoverStyle}
            onMouseEnter={linkHover.onMouseEnter}
            onMouseLeave={linkHover.onMouseLeave}
          >
            ShopNest
          </Link>
        </div>
        <div className="relative flex-1 mx-4 md:mx-2">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4 pr-10"
              type="text"
              placeholder="Search product"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              style={{
                borderColor: theme.borderColor,
                backgroundColor: theme.backgroundColor,
                color: theme.textColor,
              }}
            />
            <button
              type="submit"
              className="absolute top-1/2 transform -translate-y-1/2 right-3 md:right-2"
              style={{ color: theme.accentColor }}
            >
              <Nav_Icons.Search className="text-current" />
            </button>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <Nav_Icons.Shopping
              className="text-lg transform transition-transform duration-300 hover:scale-105"
              style={{ color: theme.textColor }}
            />
            {products.length > 0 && (
              <span
                className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: theme.accentColor }}
              >
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setisModelOpen(true)}
            style={buttonHover.hoverStyle}
            onMouseEnter={buttonHover.onMouseEnter}
            onMouseLeave={buttonHover.onMouseLeave}
          >
            Login | Register
          </button>
          <button
            className="block md:hidden"
            onClick={() => setisModelOpen(true)}
          >
            <Nav_Icons.User style={{ color: theme.textColor }} />
          </button>

          {/* Theme Toggle Button */}
          <button
            className="p-2 rounded-full"
            onClick={toggleTheme}
            style={{ color: theme.textColor }}
          >
            {theme.name === "light" ? "🌞" : "🌜"}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link
          to="/"
          className="hover:underline"
          style={HomeHover.hoverStyle}
            onMouseEnter={HomeHover.onMouseEnter}
            onMouseLeave={HomeHover.onMouseLeave}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="hover:underline"
          style={ShopHover.hoverStyle}
            onMouseEnter={ShopHover.onMouseEnter}
            onMouseLeave={ShopHover.onMouseLeave}
         
        >
          Shop
        </Link>
        <button
          onClick={openContactModal}
          className="hover:underline"
          style={ContactHover.hoverStyle}
            onMouseEnter={ContactHover.onMouseEnter}
            onMouseLeave={ContactHover.onMouseLeave}
         
        >
          Contact
        </button>
        <Link
          to="/about"
          className="hover:underline"
          style={AboutHover.hoverStyle}
            onMouseEnter={AboutHover.onMouseEnter}
            onMouseLeave={AboutHover.onMouseLeave}
          
        >
          About
        </Link>
      </div>
      <Modal IsModalOpen={isModelOpen} setIsModalOpen={setisModelOpen}>
        {isLogin ? (
          <Login openSingUp={openSingUp} />
        ) : (
          <Registered openLogin={openLogin} />
        )}
      </Modal>
      <Modal IsModalOpen={isContactOpen} setIsModalOpen={setIsContactOpen}>
        <Contact />
      </Modal>
    </nav>
  );
};

export default Navbar;
