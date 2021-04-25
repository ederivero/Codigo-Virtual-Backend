import { Producto } from "../config/relaciones";

// CRUD
export const crearProducto = async (req, res) => {
  // cuando creamos un nuevo registro este retornara el registro creado en la bd
  // En sequelize hay 2 formas de crear (agregar) un nuevo registro y es:
  // await Modelo.create(data) => va a crear el nuevo registro en la bd y retornara su data creada
  // Modelo.build() => todavia no crea el registro en la bd, hace la validacion de que todos los campos se cumpplan, va de la mano con .save() este si retorna una promesa y esto se usa para hacer una pre-configuracion de los campos antes de guardarlos en la bd
  try {
    const nuevoProducto = await Producto.create(req.body);
    return res.status(201).json({
      success: true,
      content: nuevoProducto,
      message: "Producto creado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Hubo un error al registrar un producto",
    });
  }
};
