import React, { useState } from 'react';
import useModal from '@/app/hooks/useModal'; // Asegúrate de que la ruta de importación sea correcta

const LoginModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isModalOpen, openModal, closeModal, modalRef } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', username, password);
    closeModal(); 
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div ref={modalRef} className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
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
        <button onClick={closeModal} className="mt-2 text-sm text-gray-500">Close</button>
      </div>
    </div>
  );
};

export default LoginModal;