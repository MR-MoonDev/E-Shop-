import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../context/ThemeContext'; 
const Order = ({ order }) => {
  const navigate = useNavigate();
  const { theme } = useTheme(); 
  const [isHoveredLogin,subscribe] = useState(false);

  return (
    <div
      className="mx-auto mt-4 px-8 md:px-16 lg:px-24 p-2"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p>
        Your order has been placed successfully. You will receive an email
        confirmation shortly.
      </p>
      <div
        className="mt-6 p-4 border rounded-lg"
        style={{ backgroundColor: theme.secondaryBackgroundColor, borderColor: theme.borderColor }}
      >
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p>Order Number: {order?.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping Information</h4>
          <p>Street: {order?.shippingInformation.address}</p>
          <p>City: {order?.shippingInformation.city}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Items Ordered</h4>
          {order?.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product?.name} (x{product?.quantity})
              </p>
              <p>${product?.price * product?.quantity}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price</span>
          <span className="font-semibold">
            ${(order?.totalPrice ?? 0).toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center">
  <button
    className="bg-green-600 text-white py-2 px-4 hover:bg-green-800 w-full sm:w-auto"
    style={{
      backgroundColor: theme.buttonBackgroundColor,
      color: theme.buttonTextColor,
    }}
  >
    Track Order
  </button>
  <button
    className="mt-4 sm:mt-0 sm:ml-4 text-white py-2 px-4 w-full sm:w-auto"
    onClick={() => navigate("/")}
    style={{
      backgroundColor: isHoveredLogin ? theme.hoverColor : theme.accentColor,
    }}
    onMouseEnter={() => subscribe(true)}
    onMouseLeave={() => subscribe(false)}
  >
    Continue Shopping
  </button>
</div>

    </div>
  );
};

export default Order;
