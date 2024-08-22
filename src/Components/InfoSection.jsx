import React from "react";
import { InfoSection_Icon } from "../Icons/InfoSection_Icon";
import { useTheme } from "../context/ThemeContext";

const InfoSection = () => {
  const { theme } = useTheme();

  const infoItems = [
    {
      icons: <InfoSection_Icon.FreeShiping className="text-3xl" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icons: <InfoSection_Icon.Support  />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icons: <InfoSection_Icon.FreeShiping  />,
      title: "100% Money Back",
      description: "Full refund if you're not satisfied",
    },
    {
      icons: (
        <InfoSection_Icon.PaymentSecure  />
      ),
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icons: <InfoSection_Icon.Discount  />,
      title: "Discount",
      description: "Enjoy the best prices on your products",
    },
  ];

  return (
    <div className="mt-4" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((items, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md 
            transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{
              color: theme.accentColor,
            }}
          >
            {React.cloneElement(items.icons, { className: "text-3xl " })}
            <h3
              className="mt-4 text-xl font-semibold"
              style={{ color: theme.textColor }}
            >
              {items.title}
            </h3>
            <p className="mt-2" style={{ color: theme.textColor }}>
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
