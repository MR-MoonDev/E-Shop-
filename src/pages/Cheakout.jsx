import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cheakout = ({ setOrderfuntion }) => {
  const [billingToggle, setBillingToggle] = useState(false);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleOrder = () => {
    // Validate all required fields
    if (
      !billingInfo.name ||
      !billingInfo.email ||
      !billingInfo.phone ||
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.zip
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const newOrder = {
      products: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrderfuntion(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
        <div className="md:w-2/3">
          {/* Billing information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                  value={billingInfo.name}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border"
                  value={billingInfo.email}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Phone #"
                  className="w-full px-3 py-2 border"
                  value={billingInfo.phone}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Shipping information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="address" className="block text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City Name"
                  className="w-full px-3 py-2 border"
                  value={shippingInfo.city}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  id="zip"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border"
                  value={shippingInfo.zip}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Payment method */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  checked={paymentMethod === "Cash on delivery"}
                  onChange={() => setPaymentMethod("Cash on delivery")}
                />
                <label htmlFor="cod" className="block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="debit"
                  name="paymentMethod"
                  checked={paymentMethod === "Debit Card"}
                  onChange={() => setPaymentMethod("Debit Card")}
                />
                <label htmlFor="debit" className="block text-gray-700 ml-2">
                  Debit Card
                </label>
              </div>
            </div>
            {paymentMethod === "Debit Card" && (
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="Enter card number"
                    className="border p-2 w-full rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="cardHolder" className="block text-gray-700 font-semibold mb-2">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="cardHolder"
                    placeholder="Enter card holder name"
                    className="border p-2 w-full rounded"
                    required
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-1/2 me-2">
                    <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      placeholder="MM/YY"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="CVV"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">ORDER SUMMARY</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start"
              >
                <div className="flex items-center w-full sm:w-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4 flex flex-col text-center sm:text-left">
                    <h4 className="text-md font-semibold mb-1">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800 mt-2 sm:mt-0 sm:ml-auto">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
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
