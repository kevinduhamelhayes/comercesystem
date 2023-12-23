// types.ts

export type Usuario = {
  id: number;
  nombre: string;
  email: string;
  ventas: Venta[];
};

export type Producto = {
  id: number;
  codigo: string;
  descripcion: string;
  precio: number;
  Ventas: Venta[];
};

export type Venta = {
  id: number;
  productoId: number;
  usuarioId: number;
  cantidad: number;
  total: number;
  fecha: Date;
  Producto: Producto;
  Usuario: Usuario;
};

export type CajaTotal = {
  id: number;
  total: number;
  fecha: Date;
};
