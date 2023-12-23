import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma'; 

// Define un tipo para los datos del producto que se espera en la solicitud
type ProductData = {
  // Aquí defines los campos esperados para un producto
  nombre: string;
  precio: number;
  // ...otros campos relevantes
};

// Define un tipo para la respuesta del API
type ApiResponse = {
  data?: ProductData;  // Suponiendo que 'Product' es un tipo definido
  message?: string;
};

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const productData = req.body as ProductData;
  console.log(productData)

  try {
    const savedProduct = await prisma.producto.create({
      data: productData,
    });
    console.log(savedProduct)
    res.status(200).json({ data: savedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar el producto', error: error.message });
  }
}
