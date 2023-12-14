import React, { useState } from 'react';

const RegisterModal = ({ isOpen, onClose }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', userData);
    onClose(); // Close modal after registration
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-xl semibold mb-4">Register</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username"
            className="block w-full p-2 border rounded mb-2" 
            placeholder="Username" 
            value={userData.username} 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email"
            className="block w-full p-2 border rounded mb-2" 
            placeholder="Email" 
            value={userData.email} 
            onChange={handleChange} 
          />
          <input 
            type="password" 
            name="password"
            className="block w-full p-2 border rounded mb-2" 
            placeholder="Password" 
            value={userData.password} 
            onChange={handleChange} 
          />
          <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">Register</button>
        </form>
        <button onClick={onClose} className="mt-2 text-sm text-gray-500">Close</button>
      </div>
    </div>
  );
};

export default RegisterModal;
