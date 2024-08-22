import React from "react";
import { Images } from "../assets/Assets";
import { useTheme } from "../context/ThemeContext";

const CategorySection = () => {
  const { theme } = useTheme();

  const Category_image = [
    {
      title: "Men",
      image: Images.man,
    },
    {
      title: "Women",
      image: Images.women,
    },
    {
      title: "Kid",
      image: Images.Kid,
    },
  ];

  return (
    <div
      className="container mt-4 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer"
      style={{ backgroundColor: theme.secondaryBackgroundColor }}
    >
      {Category_image.map((items, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={items.image}
            alt="category not found"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            className="absolute top-20 left-12"
            style={{ color: theme.textColor }}
          >
            <p className="text-xl font-bold">{items.title}</p>
            <p className="text-gray-900">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
