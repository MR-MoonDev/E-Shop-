import React, { useState } from 'react';

const Registered = ({ openLogin }) => {
  // State to manage input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to manage error message

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Clear previous error message
    setError('');

    // Validation: Check if any field is empty
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Log input values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Proceed with form submission (e.g., API call)
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
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
          <label className='block text-gray-700'>Password</label>
          <input
            type="password"
            placeholder='Enter Password'
            className='w-full px-3 py-2 border'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign Up</button>
        </div>
        {error && (
          <div className='text-red-500 text-center mb-4'>
            {error}
          </div>
        )}
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Already have an Account? </span>
        <button className='text-red-800' onClick={openLogin}>Login</button>
      </div>
    </div>
  );
};

export default Registered;
