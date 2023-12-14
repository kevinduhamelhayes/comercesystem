"use client"
import React, { useState } from 'react';
type Product = {
  unit: number;
  description: string;
  price: number;
};
// Mock function to simulate fetching product data from a database
const fetchProductByBarcode = async (barcode) => {
  // This is a placeholder. Replace with your database query logic.
  return {
    unit: 1,
    description: `Product for ${barcode}`,
    price: Math.floor(Math.random() * 100) // Random price for demonstration
  };
};

const PantallaDeCobro: React.FC = () => {
  const [barcode, setBarcode] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleBarcodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = await fetchProductByBarcode(barcode);
    setProducts([...products, product]);
    setTotal(total + product.price);
    setBarcode(''); // Clear the barcode input
  };
  return (
    <div className="p-4">
      <form onSubmit={handleBarcodeSubmit}>
        <input 
          type="text" 
          value={barcode} 
          onChange={(e) => setBarcode(e.target.value)} 
          placeholder="Enter barcode" 
          className="border p-2 rounded"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">Add Product</button>
      </form>

      <div className="mt-4">
        <h2 className="text-xl semibold">Products</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              <span>{product.unit}</span>
              <span>{product.description}</span>
              <span>${product.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl semibold">Total: ${total}</h2>
      </div>
    </div>
  );
};

export default PantallaDeCobro;
