import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Mackdata_image } from "../assets/Assets"; // Empty item pic
import { FaTrashAlt } from "react-icons/fa"; // Dustbin icon
import Modal from "../Components/Modal";
import ChangeAddress from "../Components/ChangeAddress";
import { useNavigate } from "react-router-dom";
import {
  decreaseQunatity,
  IncreaseQunatity,
  removeFormCart,
} from "../redux/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 0012");
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-10">
            <div className="md:w-2/3">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4  text-center">PRODUCT</th>
                      <th className="py-2 px-4 text-center">PRICE</th>
                      <th className="py-2 px-4 text-center">QUANTITY</th>
                      <th className="py-2 px-4 text-center">SUBTOTAL</th>
                      <th className="py-2 px-4 text-center">REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.products.map((product) => (
                      <tr key={product.id} className="border-b">
                        <td className="py-2 px-4">
                          <div className="flex items-center space-x-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 object-contain rounded"
                            />
                            <span className="text-lg font-semibold">
                              {product.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-2 px-4 text-center">
                          ${product.price}
                        </td>
                        <td className="py-2 px-4 text-center">
                          <div className="flex items-center border">
                            <button
                              className="text-xl font-bold px-2 py-1 border-r border-gray-300 flex-1"
                              onClick={() =>
                                dispatch(decreaseQunatity(product.id))
                              }
                            >
                              -
                            </button>
                            <span className="text-xl px-3">
                              {product.quantity}
                            </span>
                            <button
                              className="text-xl font-bold px-2 py-1 border-l border-gray-300 flex-1"
                              onClick={() =>
                                dispatch(IncreaseQunatity(product.id))
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td className="py-2 px-4 text-center">
                          ${(product.quantity * product.price).toFixed(2)}
                        </td>
                        <td className="py-2 px-4 text-center">
                          <button
                            className="text-red-500 hover:text-red-700"
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
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-bold mb-5">CART TOTALS</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">TOTAL ITEMS:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b  pb-2">
                <p className="font-bold">Shipping:</p>
                <p >
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
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/cheakout")}
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
