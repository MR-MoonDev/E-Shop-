import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !description) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Description:", description);
  };

  return (
    <div
      className="p-6 rounded-lg"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor, 
        borderColor: theme.borderColor,
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block" style={{ color: theme.textColor }}>
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border"
            style={{
              borderColor: theme.borderColor,
              color: theme.textColor,
              backgroundColor: theme.secondaryBackgroundColor,
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block" style={{ color: theme.textColor }}>
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border"
            style={{
              borderColor: theme.borderColor,
              color: theme.textColor,
              backgroundColor: theme.secondaryBackgroundColor,
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block" style={{ color: theme.textColor }}>
            Description
          </label>
          <textarea
            placeholder="Description"
            className="w-full px-3 py-2 border"
            style={{
              borderColor: theme.borderColor,
              color: theme.textColor,
              backgroundColor: theme.secondaryBackgroundColor,
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 text-white rounded transition-all duration-300"
            style={{
              backgroundColor: isHovered ? theme.hoverColor : theme.accentColor,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Send
          </button>
        </div>
        {error && (
          <div className="text-center mb-4" style={{ color: theme.errorColor }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
