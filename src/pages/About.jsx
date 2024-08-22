import React from 'react';
import { useTheme } from '../context/ThemeContext'; 

function About() {
  const { theme } = useTheme(); 

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }} className="mx-auto mt-4 px-8 md:px-16 lg:px-24 py-5">
      <h1 className="text-4xl  font-bold mb-6 text-center" style={{ color: theme.headerTextColor }}>
        About Us
      </h1>
      
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.subHeaderTextColor }}>
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: theme.paragraphTextColor }}>
          At <span style={{ color: theme.accentColor, fontWeight: 'bold' }}>ShopNest</span>, our mission is to provide the best online shopping experience by offering high-quality products, exceptional customer service, and a seamless user experience. We believe in making shopping convenient and accessible for everyone, everywhere.
        </p>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.subHeaderTextColor }}>
          Our Story
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: theme.paragraphTextColor }}>
          Founded in <span style={{ color: theme.accentColor, fontWeight: 'bold' }}>2024</span>, <span style={{ color: theme.accentColor, fontWeight: 'bold' }}>ShopNest</span> started with the goal of bringing quality products to consumers at competitive prices. Our journey began with a small team of passionate individuals who wanted to change the way people shop online. Today, we have grown into a trusted name in the eCommerce industry, serving thousands of satisfied customers worldwide.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: theme.subHeaderTextColor }}>
          Our Values
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed max-w-2xl mx-auto space-y-2" style={{ color: theme.paragraphTextColor }}>
          <li><span style={{ color: theme.accentColor, fontWeight: 'bold' }}>Customer Focus:</span> Our customers are at the heart of everything we do. We strive to exceed their expectations with every purchase.</li>
          <li><span style={{ color: theme.accentColor, fontWeight: 'bold' }}>Quality Products:</span> We are committed to offering only the highest quality products that meet our strict standards.</li>
          <li><span style={{ color: theme.accentColor, fontWeight: 'bold' }}>Integrity:</span> We believe in conducting our business with honesty and transparency.</li>
          <li><span style={{ color: theme.accentColor, fontWeight: 'bold' }}>Innovation:</span> We continuously seek new ways to improve our services and enhance the shopping experience.</li>
        </ul>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.subHeaderTextColor }}>
          Why Shop With Us?
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: theme.paragraphTextColor }}>
          We offer a wide range of products across various categories, including fashion, electronics, home goods, and more. Our easy-to-use website, secure payment options, and fast shipping make us a preferred choice for online shoppers.
        </p>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mt-4" style={{ color: theme.paragraphTextColor }}>
          Plus, our dedicated customer support team is always here to assist you with any questions or concerns you may have. At <span style={{ color: theme.accentColor, fontWeight: 'bold' }}>ShopNest</span>, your satisfaction is our top priority.
        </p>
      </div>

      <div className="text-center">
        <p className="text-lg leading-relaxed" style={{ color: theme.paragraphTextColor }}>
          Thank you for choosing <span style={{ color: theme.accentColor, fontWeight: 'bold' }}>ShopNest</span> as your go-to online shopping destination. We look forward to serving you!
        </p>
      </div>
    </div>
  );
}

export default About;
