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
  const [isContact, setisContact] = useState(false);
  const [search, setsearch] = useState();

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
  const openContact = () => {
    setisContact(true);
    setisModelOpen(true);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">ShopNest</Link>
        </div>
        <div className="relative flex-1  mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4"
              type="text"
              placeholder="search product"
              onChange={(e) => setsearch(e.target.value)}
            />
            <Nav_Icons.Search className="absolute top-3 right-3 text-red-500 " />
          </form>
        </div>
        <div className="flex flex-center space-x-4">
          <Link to="/cart" className="relative">
            <Nav_Icons.Shopping className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full
               flex items-center justify-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
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
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shope
        </Link>
        <Link onClick={openContact} className="hover:underline ">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
      <Modal IsModalOpen={isModelOpen} setIsModalOpen={setisModelOpen}>
        {isContact ? (
          <Contact />
        ) : isLogin ? (
          <Login openSingUp={openSingUp} />
        ) : (
          <Registered openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
