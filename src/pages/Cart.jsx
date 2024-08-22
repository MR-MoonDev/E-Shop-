import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Mackdata_image } from "../assets/Assets";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../Components/Modal";
import ChangeAddress from "../Components/ChangeAddress";
import { useNavigate } from "react-router-dom";
import {
  decreaseQunatity,
  IncreaseQunatity,
  removeFormCart,
} from "../redux/CartSlice";
import { useTheme } from "../context/ThemeContext";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 0012");
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [hoverprocesscheak, sethoverprocesscheakout] = useState(false);
  const[ isHoveredremove,sethoverremove]=useState(false);
  return (
    <div
      className="mx-auto mt-4 px-8 py-5  md:px-16 lg:px-24"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      {cart.products.length > 0 ? (
        <div>
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: theme.textColor }}
          >
            SHOPPING CART
          </h3>
          <div className="flex flex-col md:flex-row justify-between p-2 space-y-8 md:space-y-0 md:space-x-10">
            <div className="md:w-2/3">
              <div className="overflow-x-auto">
                <table
                  className="min-w-full"
                  style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                    borderColor: theme.borderColor,
                  }}
                >
                  <thead>
                    <tr className="border-b">
                      <th
                        className="py-2 px-4 text-center text-xs sm:text-sm md:text-base"
                        style={{ borderColor: theme.borderColor }}
                      >
                        PRODUCT
                      </th>
                      <th
                        className="py-2 px-4 text-center text-xs sm:text-sm md:text-base"
                        style={{ borderColor: theme.borderColor }}
                      >
                        PRICE
                      </th>
                      <th
                        className="py-2 px-4 text-center text-xs sm:text-sm md:text-base"
                        style={{ borderColor: theme.borderColor }}
                      >
                        QUANTITY
                      </th>
                      <th
                        className="py-2 px-4 text-center text-xs sm:text-sm md:text-base"
                        style={{ borderColor: theme.borderColor }}
                      >
                        SUBTOTAL
                      </th>
                      <th
                        className="py-2 px-4 text-center text-xs sm:text-sm md:text-base"
                        style={{ borderColor: theme.borderColor }}
                      >
                        REMOVE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.products.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b"
                        style={{ borderColor: theme.borderColor }}
                      >
                        <td className="py-2 px-4">
                          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 object-contain rounded"
                            />
                            <span className="text-lg font-semibold text-center sm:text-left">
                              {product.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-2 px-4 text-center text-sm sm:text-base">
                          ${product.price}
                        </td>
                        <td className="py-2 px-4 text-center text-sm sm:text-base">
                          <div
                            className="flex items-center border"
                            style={{ borderColor: theme.borderColor }}
                          >
                            <button
                              className="text-lg font-bold px-2 py-1 border-r border-gray-300 flex-1"
                              style={{ borderColor: theme.borderColor }}
                              onClick={() =>
                                dispatch(decreaseQunatity(product.id))
                              }
                            >
                              -
                            </button>
                            <span className="text-lg px-3">
                              {product.quantity}
                            </span>
                            <button
                              className="text-lg font-bold px-2 py-1 border-l border-gray-300 flex-1"
                              style={{ borderColor: theme.borderColor }}
                              onClick={() =>
                                dispatch(IncreaseQunatity(product.id))
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-2 px-4 text-center text-sm sm:text-base">
                          ${(product.quantity * product.price).toFixed(2)}
                        </td>
                        <td className="py-2 px-4 text-center text-sm sm:text-base">
                          <button
                            style={{
                              color: isHoveredremove
                                ? theme.hoverColor
                                : theme.accentColor,
                            }}
                            onMouseEnter={() => sethoverremove(true)}
                            onMouseLeave={() => sethoverremove(false)}
                            onClick={() => dispatch(removeFormCart(product.id))}
                          >
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Cart totals */}

            <div
              className="md:w-1/3 p-6 rounded-lg shadow-md border  overflow-y-auto"
             
            style={{ backgroundColor: theme.secondaryBackgroundColor }}

            >
              <h3 className="text-sm font-bold mb-5">CART TOTALS</h3>
              <div
                className="flex justify-between mb-5 border-b pb-1"
                style={{ borderColor: theme.borderColor }}
              >
                <span className="text-sm">TOTAL ITEMS:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div
                className="mb-4 border-b pb-2"
                style={{ borderColor: theme.borderColor }}
              >
                <p className="font-bold">Shipping:</p>
                <p>
                  Shipping to:{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-bold">Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full text-white py-2"
                onClick={() => navigate("/cheakout")}
                style={{
                  backgroundColor: hoverprocesscheak
                    ? theme.hoverColor
                    : theme.accentColor,
                }}
                onMouseEnter={() => sethoverprocesscheakout(true)}
                onMouseLeave={() => sethoverprocesscheakout(false)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal IsModalOpen={IsModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src={Mackdata_image.Emptycart}
            alt="Empty cart"
            className="h-96"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
