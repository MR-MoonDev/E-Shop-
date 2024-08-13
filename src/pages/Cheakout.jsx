import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cheakout = ({ setOrderfuntion }) => {
  const [billingToggle, setbillingToggle] = useState(true);
  const [ShippingToggle, setShippingToggle] = useState(true);
  const [PaymentToggle, setPaymentToggle] = useState(true);
  const [PaymentMethod, setPaymentMehod] = useState("Cash on delivery");
  const [shippingInfo, setshippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrderfuntion(newOrder);
    navigate("/order-confirmation");
  };
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4"> CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setbillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  name="name"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Phone #"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          {/* shipping information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!ShippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {ShippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${ShippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City Name"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setshippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setshippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          {/* payment method  */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!PaymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {PaymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${PaymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="Payment "
                  checked={PaymentToggle === "Cash on delivery"}
                  onChange={() => setPaymentMehod("Cash on delivery")}
                />
                <label className="block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2 ">
                <input
                  type="radio"
                  name="Payment "
                  checked={PaymentMethod === "Debit Card"}
                  onChange={() => setPaymentMehod("Debit Card")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>
            </div>
            {PaymentMethod === "Debit Card" && (
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-4">
                  Debit Card Information
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card number"
                      className="border p-2 w-full rounded "
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card holder name"
                      className="border p-2 w-full rounded "
                      required
                    />
                  </div>
                  <div className=" flex justify-between mb-4 ">
                    <div className="w-1/2 me-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Expire Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded "
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                  </div>
                </h3>
              </div>
            )}
          </div>
        </div>
        {/* cart totals */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border ">
          <h3 className="text-lg font-semibold mb-4">ORDER SUMMARY</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold ">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-red-600 text-white py-2 mt-3 hover:bg-red-800"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cheakout;
