import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Registered = ({ openLogin }) => {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isHoveredSignUp, setIsHoveredSignUp] = useState(false);
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        backgroundColor: theme.secondaryBackgroundColor,
        color: theme.textColor,
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
              backgroundColor: theme.backgroundColor,
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
              backgroundColor: theme.backgroundColor,
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block" style={{ color: theme.textColor }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border"
            style={{
              borderColor: theme.borderColor,
              color: theme.textColor,
              backgroundColor: theme.backgroundColor,
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full text-white py-2 rounded transition-all duration-300"
            style={{
              backgroundColor: isHoveredSignUp ? theme.hoverColor : theme.accentColor,
            }}
            onMouseEnter={() => setIsHoveredSignUp(true)}
            onMouseLeave={() => setIsHoveredSignUp(false)}
          >
            Sign Up
          </button>
        </div>
        {error && <div className="text-center mb-4" style={{ color: theme.errorColor }}>{error}</div>}
      </form>
      <div className="text-center mt-4">
        <span style={{ color: theme.textColor }}>
          Already have an Account?{" "}
        </span>
        <button
          style={{ color: isHoveredLogin ? theme.hoverColor : theme.accentColor }}
          onClick={openLogin}
          onMouseEnter={() => setIsHoveredLogin(true)}
          onMouseLeave={() => setIsHoveredLogin(false)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Registered;
