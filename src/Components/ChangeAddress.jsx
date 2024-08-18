import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState('');

  const onClose = () => {
    setAddress(newAddress);
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    onClose(); // Save address and close modal
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
        value={newAddress}
      />
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save Address
        </button>
      </div>
    </form>
  );
};

export default ChangeAddress;
