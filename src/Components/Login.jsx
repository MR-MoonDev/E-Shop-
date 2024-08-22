import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Login = ({ openSingUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);
  const [isHoveredSignUp, setIsHoveredSignUp] = useState(false);

  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        backgroundColor: theme.secondaryBackgroundColor,
        color: theme.textColor,
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">
            {theme.textColor === "#ffffff" ? "Email" : "Email"}
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
          <label className="block">
            {theme.textColor === "#ffffff" ? "Password" : "Password"}
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border"
            style={{
              borderColor: theme.borderColor,
              color: theme.textColor,
              backgroundColor: theme.secondaryBackgroundColor,
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">
              {theme.textColor === "#ffffff" ? "Remember Me" : "Remember Me"}
            </span>
          </label>
          <a 
            href="#" 
            style={{ color: theme.accentColor }}
          >
            Forgot Password?
          </a>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 text-white rounded transition-all duration-300"
            style={{
              backgroundColor: isHoveredLogin ? theme.hoverColor : theme.accentColor,
            }}
            onMouseEnter={() => setIsHoveredLogin(true)}
            onMouseLeave={() => setIsHoveredLogin(false)}
          >
            Login
          </button>
        </div>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      </form>
      <div className="text-center mt-4">
        <span>
          {theme.textColor === "#ffffff" ? "Don’t have an Account? " : "Don’t have an Account? "}
        </span>
        <button
          style={{ color: isHoveredSignUp ? theme.hoverColor : theme.accentColor }}
          onClick={openSingUp}
          onMouseEnter={() => setIsHoveredSignUp(true)}
          onMouseLeave={() => setIsHoveredSignUp(false)}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
