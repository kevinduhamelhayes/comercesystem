"use client"
import React, { useState, useEffect } from 'react';

type Product = {
  id: number;
  codigo: string;
  descripcion: string;
  precio: number;
};

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/allProducts');
        if (!response.ok) {
          throw new Error('No se pudieron obtener los productos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Todos los Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.codigo} - {product.descripcion} - ${product.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
