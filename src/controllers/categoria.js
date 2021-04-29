import { Categoria } from "../config/relaciones";

export const crearCategoria = async (req, res) => {
  // crear una categoria
  // retornar un estado 201 si se creo exitosamente
  // retornar un estado 500 si hubo algun error (try-catch)
  // mandar un screenshot del codigo y del postman
  try {
    // antes de agregar la nueva categoria primero validar que no exista, si existe, entonces no guardar y retornar un status BAD REQUEST (400) indicando que la categoria ya existe
    const { categoriaNombre } = req.body;
    const coincidencia = await Categoria.findOne({
      where: {
        categoriaNombre,
      },
    });
    if (coincidencia) {
      return res.status(400).json({
        success: false,
        content: null,
        message: "categoria ya existe",
      });
    }
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
