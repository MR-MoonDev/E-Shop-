import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ IsModalOpen, setIsModalOpen, children }) => {
  if (!IsModalOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md m-3">
        <button
          className="absolute top-4 right-4 text-gray-300 text-3xl"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
