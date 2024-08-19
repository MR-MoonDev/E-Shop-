import React, { useState } from 'react';

const Login = ({ openSingUp }) => {
  // State to manage input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to manage error message

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Clear previous error message
    setError('');

    // Validation: Check if any field is empty
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Log input values to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Proceed with form submission (e.g., API call)
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <div className='mb-4 flex items-center justify-between'>
          <label className='inline-flex items-center'>
            <input type="checkbox" className='form-checkbox' />
            <span className='ml-2 text-gray-700'>Remember Me</span>
          </label>
          <a href="#" className='text-red-800'>Forgot Password?</a>
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
        </div>
        {error && (
          <div className='text-red-500 text-center mb-4'>
            {error}
          </div>
        )}
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Don’t have an Account? </span>
        <button className='text-red-800' onClick={openSingUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
