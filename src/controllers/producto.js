import { Producto } from "../config/relaciones";

// CRUD
export const crearProducto = async (req, res) => {
  // cuando creamos un nuevo registro este retornara el registro creado en la bd
  const nuevoProducto = await Producto.create(req.body);
  res.status(201).json({
    success: true,
    content: nuevoProducto,
    message: "Producto creado exitosamente",
  });
};
