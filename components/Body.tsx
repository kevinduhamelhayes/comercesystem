"use client"
import React, { useState } from 'react';

type Product = {
  unit: number;
  description: string;
  price: number;
  codigo: string; // Asegúrate de añadir el campo 'codigo' si lo estás utilizando
};

const fetchProductByBarcode = async (barcode: string) => {
  try {
    const response = await fetch(`/api/getProductByBarcode?barcode=${barcode}`);
    if (!response.ok) {
      throw new Error('Product not found');
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

const PantallaDeCobro: React.FC = () => {
  const [barcode, setBarcode] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleBarcodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchedProduct = await fetchProductByBarcode(barcode);

    if (fetchedProduct) {
      // Verifica si el producto ya está en la lista
      const existingProductIndex = products.findIndex(p => p.codigo === barcode);

      if (existingProductIndex >= 0) {
        // Actualiza la cantidad si el producto ya existe
        const updatedProducts = products.map((p, index) => {
          if (index === existingProductIndex) {
            return { ...p, unit: p.unit + 1 };
          }
          return p;
        });
        setProducts(updatedProducts);
      } else {
        // Añade el nuevo producto a la lista
        setProducts([...products, { ...fetchedProduct, unit: 1 }]);
      }

      // Actualiza el total
      setTotal(total + fetchedProduct.price);
    }

    setBarcode(''); // Limpia el input del código de barras
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
