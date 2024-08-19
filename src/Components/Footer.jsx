import React, { useState } from "react";
import { footer_Icons } from "../Icons/Footer_Icons";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Contact from "./Contact";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert("Subscribed successfully!");
      setEmail(""); // Clear the input field after successful subscription
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
      <footer className="bg-gray-800 mt-4 text-white py-8 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">ShopNest</h3>
            <p className="mt-4">
              Your one step for all your needs. Shop with us and experience the
              best online shopping experiences.
            </p>
          </div>
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <button onClick={openContactModal} className="hover:underline">
                  Contact
                </button>{" "}
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow us</h4>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/muneeb.siddiqui.9400"
                className="hover:text-gray-400"
              >
                <footer_Icons.facebook />
              </a>
              <a
                href="https://www.instagram.com/programmer_side/?igsh=MTdkcDBhbGhrdzAwdA%3D%3D"
                className="hover:text-gray-400"
              >
                <footer_Icons.instagram />
              </a>
              <a
                href="https://github.com/MR-MoonDev"
                className="hover:text-gray-400"
              >
                <footer_Icons.gitHub />
              </a>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                className="hover:text-gray-400"
              >
                <footer_Icons.Linkedin />
              </a>
            </div>
            <form className="flex items-center justify-center mt-8" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter E-mail"
                className="w-full p-2 rounded-l-lg bg-gray-600 border border-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 e-shop all rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="" className="hover:underline">
                Privacy Policy
              </a>
              <a href="" className="hover:underline">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
        <Modal IsModalOpen={isContactOpen} setIsModalOpen={setIsContactOpen}>
          <Contact />
        </Modal>
      </footer>
    </>
  );
};

export default Footer;
