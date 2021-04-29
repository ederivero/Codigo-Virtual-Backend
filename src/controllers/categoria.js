import { Categoria } from "../config/relaciones";

export const crearCategoria = async (req, res) => {
  // crear una categoria
  // retornar un estado 201 si se creo exitosamente
  // retornar un estado 500 si hubo algun error (try-catch)
  // mandar un screenshot del codigo y del postman
  try {
    const nuevaCategoria = await Categoria.create(req.body);
    res.status(201).json({
      success: true,
      content: nuevaCategoria,
      message: "Categoria creada exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear la categoria",
    });
  }
};
