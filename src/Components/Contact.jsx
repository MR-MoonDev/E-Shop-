import React, { useState } from 'react';

const Contact = () => {
  // State to manage input values and error message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Clear previous error message
    setError('');

    // Validation: Check if any field is empty
    if (!name || !email || !description) {
      setError('Please fill in all fields.');
      return;
    }

    // Log input values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Description:', description);

    // Proceed with form submission (e.g., API call)
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Name</label>
          <input
            type="text"
            placeholder='Enter Name'
            className='w-full px-3 py-2 border'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type="email"
            placeholder='Enter Email'
            className='w-full px-3 py-2 border'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Description</label>
          <textarea
            placeholder='Description'
            className='w-full px-3 py-2 border'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-red-600 text-white py-2 hover:bg-red-700'>
            Send
          </button>
        </div>
        {error && (
          <div className='text-red-500 text-center mb-4'>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
