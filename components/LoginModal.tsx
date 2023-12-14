"use client"

import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', username, password);
    onClose(); // Close modal after login
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-xl semibold mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="block w-full p-2 border rounded mb-2" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            className="block w-full p-2 border rounded mb-2" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
        </form>
        <button onClick={onClose} className="mt-2 text-sm text-gray-500">Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
