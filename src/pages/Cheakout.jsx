import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Adjust path as needed

const Cheakout = ({ setOrderfuntion }) => {
  const { theme } = useTheme(); // Get theme from context
  const [isHoveredLogin,subscribe] = useState(false);

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
  const [error, setError] = useState("");
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
    <div
      className="mx-auto mt-4 px-8 md:px-16 p-8 lg:px-24"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
        <div className="md:w-2/3">
          {/* Billing information */}
          <div
            className="border p-2 mb-6"
            style={{ borderColor: theme.borderColor }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">{`Billing Information`}</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="name" className="block">{`Name`}</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    backgroundColor: theme.secondaryBackgroundColor,
                  }}
                  value={billingInfo.name}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="email" className="block">{`E-mail`}</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    backgroundColor: theme.secondaryBackgroundColor,
                  }}
                  value={billingInfo.email}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="phone" className="block">{`Phone`}</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter Phone #"
                  className="w-full px-3 py-2 border"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    backgroundColor: theme.secondaryBackgroundColor,
                  }}
                  value={billingInfo.phone}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Shipping information */}
          <div
            className="border p-2 mb-6"
            style={{ borderColor: theme.borderColor }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">{`Shipping Information`}</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="address" className="block">{`Address`}</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    backgroundColor: theme.secondaryBackgroundColor,
                  }}
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="city" className="block">{`City`}</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City Name"
                  className="w-full px-3 py-2 border"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    backgroundColor: theme.secondaryBackgroundColor,
                  }}
                  value={shippingInfo.city}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="zip" className="block">{`Zip Code`}</label>
                <input
                  type="number"
                  id="zip"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    backgroundColor: theme.secondaryBackgroundColor,
                  }}
                  value={shippingInfo.zip}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Payment method */}
          <div
            className="border p-2 mb-6"
            style={{ borderColor: theme.borderColor }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">{`Payment Method`}</h3>
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
                <label htmlFor="cod" className="block ml-2">
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
                <label htmlFor="debit" className="block ml-2">
                  Debit Card
                </label>
              </div>
            </div>
            {paymentMethod === "Debit Card" && (
              <div
                className="p-4 rounded-lg mb-4"
                style={{ backgroundColor: theme.secondaryBackgroundColor }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Debit Card Information
                </h3>
                <div className="mb-4">
                  <label
                    htmlFor="cardNumber"
                    className="block font-semibold mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="Enter card number"
                    className="border p-2 w-full rounded"
                    style={{
                      borderColor: theme.borderColor,
                      color: theme.textColor,
                      backgroundColor: theme.secondaryBackgroundColor,
                    }}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cardHolder"
                    className="block font-semibold mb-2"
                  >
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="cardHolder"
                    placeholder="Enter card holder name"
                    className="border p-2 w-full rounded"
                    style={{
                      borderColor: theme.borderColor,
                      color: theme.textColor,
                      backgroundColor: theme.secondaryBackgroundColor,
                    }}
                    required
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-1/2 mr-2">
                    <label
                      htmlFor="expiryDate"
                      className="block font-semibold mb-2"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      placeholder="MM/YY"
                      className="border p-2 w-full rounded"
                      style={{
                        borderColor: theme.borderColor,
                        color: theme.textColor,
                        backgroundColor: theme.secondaryBackgroundColor,
                      }}
                      required
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label htmlFor="cvv" className="block font-semibold mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="CVV"
                      className="border p-2 w-full rounded"
                      style={{
                        borderColor: theme.borderColor,
                        color: theme.textColor,
                        backgroundColor: theme.secondaryBackgroundColor,
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
           {/* order summary  */}
        <div className="md:w-1/3 ">
          <div
            className="border p-4 rounded-lg"
            style={{ backgroundColor: theme.secondaryBackgroundColor }}
          >
            <h3 className="text-xl font-semibold mb-4 ">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Items Total:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleOrder}
              className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
              style={{
                backgroundColor: isHoveredLogin ? theme.hoverColor : theme.accentColor,
              }}
              onMouseEnter={() =>subscribe(true)}
              onMouseLeave={() =>subscribe(false)}
            >
              Place Order
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheakout;
