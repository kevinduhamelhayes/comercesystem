
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productData = req.body;

  try {
    const savedProduct = await prisma.producto.create({
      data: productData,
    });
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar el producto' });
  }
}
