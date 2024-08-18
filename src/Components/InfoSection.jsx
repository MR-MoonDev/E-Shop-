import React from "react";
import { InfoSection_Icon } from "../Icons/InfoSection_Icon";
const InfoSection = () => {
  const infoItems = [
    {
      icons: <InfoSection_Icon.FreeShiping className="text-3xl text-red-600" />,
      title: "Free Shipping",
      decription: "get your orders deliverd with no extra cost",
    },
    {
      icons: <InfoSection_Icon.Support className="text-3xl text-red-600" />,
      title: "Support 24/7",
      decription: "we are here to assist you anytime",
    },
    {
      icons: <InfoSection_Icon.FreeShiping className="text-3xl text-red-600" />,
      title: "100% money back",
      decription: "Full refund if your not satisfied",
    },
    {
      icons: (
        <InfoSection_Icon.PaymentSecure className="text-3xl text-red-600" />
      ),
      title: "payment secure",
      decription: "your payment information is safe with us",
    },
    {
      icons: <InfoSection_Icon.Discount className="text-3xl text-red-600" />,
      title: "Discount",
      decription: "Enjoy the best prices on your products",
    },
  ];
  return (
    <div className="mt-4 bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((items, index) => (
          <div key={index} className="flex flex-col items-center text-centter p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
            {items.icons}
            <h3 className="mt-4 text-xl font-semibold ">{items.title}</h3>
            <p className="mt-2 text-gray-600">{items.decription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
