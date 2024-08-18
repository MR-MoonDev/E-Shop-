import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav_Icons } from "../Icons/Nav_Icon";
import { useDispatch, useSelector } from "react-redux";
import Registered from "./Registered";
import Login from "./Login";
import Modal from "./Modal";
import Contact from "./Contact";
import { setSearchTerm } from "../redux/ProductSlice";

const Navbar = () => {
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

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold hover:text-red-600 transform transition-transform duration-300 hover:scale-105">
          <Link to="/">ShopNest</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4"
              type="text"
              placeholder="search product"
              value={search} 
              onChange={(e) => setsearch(e.target.value)}
            />
            <Nav_Icons.Search className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex flex-center items-center space-x-4">
          <Link to="/cart" className="relative">
            <Nav_Icons.Shopping className="text-lg  transform transition-transform duration-300 hover:scale-105" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full
               flex items-center justify-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block hover:text-red-600"
            onClick={() => setisModelOpen(true)}
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <Nav_Icons.User />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline hover:text-red-600">
          Home
        </Link>
        <Link to="/shop" className="hover:underline hover:text-red-600">
          Shope
        </Link>
        <button onClick={openContactModal} className="hover:underline hover:text-red-600">
          Contact
        </button>
        <Link to="/about" className="hover:underline hover:text-red-600">
          About
        </Link>
      </div>
      <Modal IsModalOpen={isModelOpen} setIsModalOpen={setisModelOpen}>
        {isLogin ? <Login openSingUp={openSingUp} /> : <Registered openLogin={openLogin} />}
      </Modal>
      <Modal IsModalOpen={isContactOpen} setIsModalOpen={setIsContactOpen}>
        <Contact />
      </Modal>
    </nav>
  );
};

export default Navbar;
