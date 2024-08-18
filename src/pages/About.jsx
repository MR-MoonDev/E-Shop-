import React from 'react';

function About() {
  return (
    <div className="container mx-auto py-12 px-4 ">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>
      
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
          At <span className="text-red-600 font-bold">ShopNest</span>, our mission is to provide the best online shopping experience by offering high-quality products, exceptional customer service, and a seamless user experience. We believe in making shopping convenient and accessible for everyone, everywhere.
        </p>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
          Founded in <span className="text-red-600 font-bold">2024</span>, <span className="text-red-600 font-bold">ShopNest</span> started with the goal of bringing quality products to consumers at competitive prices. Our journey began with a small team of passionate individuals who wanted to change the way people shop online. Today, we have grown into a trusted name in the eCommerce industry, serving thousands of satisfied customers worldwide.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Our Values</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto space-y-2">
          <li><span className="text-red-600 font-bold">Customer Focus:</span> Our customers are at the heart of everything we do. We strive to exceed their expectations with every purchase.</li>
          <li><span className="text-red-600 font-bold">Quality Products:</span> We are committed to offering only the highest quality products that meet our strict standards.</li>
          <li><span className="text-red-600 font-bold">Integrity:</span> We believe in conducting our business with honesty and transparency.</li>
          <li><span className="text-red-600 font-bold">Innovation:</span> We continuously seek new ways to improve our services and enhance the shopping experience.</li>
        </ul>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Why Shop With Us?</h2>
        <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of products across various categories, including fashion, electronics, home goods, and more. Our easy-to-use website, secure payment options, and fast shipping make us a preferred choice for online shoppers.
        </p>
        <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto mt-4">
          Plus, our dedicated customer support team is always here to assist you with any questions or concerns you may have. At <span className="text-red-600 font-bold">ShopNest</span>, your satisfaction is our top priority.
        </p>
      </div>

      <div className="text-center">
        <p className="text-lg leading-relaxed text-gray-600">
          Thank you for choosing <span className="text-red-600 font-bold">ShopNest</span> as your go-to online shopping destination. We look forward to serving you!
          </p>
          </div>
          </div>
  );
}

export default About
