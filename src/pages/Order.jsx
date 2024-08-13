import React from "react";

const Order = ({ order }) => {
  return (
    <div className="container mx-auto py-8 px-4 md:16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p>your Order has been placed successfully you will recieve an emailconfirmation shortly</p>
      <div className="mt-6 p-4 rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p>Order Number:{order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping Information</h4>
          <p>{order.ShippingInformation.name}</p>
          <p>{order.ShippingInformation.address}</p>
          <p>{order.ShippingInformation.city}</p>
          <p>{order.ShippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Items Ordered</h4>
          {order.products.map(product => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>{product.name}(x{product.quantity})</p>
              <p>${product.price * product.quantity}</p>
            </div>
          ))}  
        </div>
        <div className="mt-4 flex justify-between">
            <span>Total Price:</span>
            <span className="font-semibold">${order.totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6">
            <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">
                Track Order
                </button>
            <button className="bg-red-500 text-white py-2 px-4 hover:bg-red-800">
                Continue Shopping
                 </button>
        </div>
    </div>
  );
};

export default Order;
