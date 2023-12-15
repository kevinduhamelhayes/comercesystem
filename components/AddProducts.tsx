"use client"
import React, { useState } from 'react';

const AddProducts: React.FC = () => {
  const [product, setProduct] = useState({
    codigo: '',
    descripcion: '',
    precio: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue = name === 'precio' ? parseFloat(value) || 0 : value;
    setProduct({ ...product, [name]: updatedValue });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/addProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar el producto');
      }
      console.log('Producto agregado con éxito');
    } catch (error) {
      console.error('Error al enviar el producto:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow rounded">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigo">
      Código:
    </label>
    <input
      type="text"
      name="codigo"
      id="codigo"
      value={product.codigo}
      onChange={handleChange}o
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
      Descripción:
    </label>
    <input
      type="text"
      name="descripcion"
      id="descripcion"
      value={product.descripcion}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
      Precio:
    </label>
    <input
      type="number"
      name="precio"
      id="precio"
      value={product.precio}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="flex items-center justify-between">
  <button
  type="submit"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline"
>
  Agregar Producto
</button>

  </div>
</form>

  );
};

export default AddProducts;
