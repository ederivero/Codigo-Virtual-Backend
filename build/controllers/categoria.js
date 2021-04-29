"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearCategoria = void 0;

var _relaciones = require("../config/relaciones");

const crearCategoria = async (req, res) => {
  // crear una categoria
  // retornar un estado 201 si se creo exitosamente
  // retornar un estado 500 si hubo algun error (try-catch)
  // mandar un screenshot del codigo y del postman
  try {
    // antes de agregar la nueva categoria primero validar que no exista, si existe, entonces no guardar y retornar un status BAD REQUEST (400) indicando que la categoria ya existe
    const {
      categoriaNombre
    } = req.body;
    const coincidencia = await _relaciones.Categoria.findOne({
      where: {
        categoriaNombre
      }
    });

    if (coincidencia) {
      return res.status(400).json({
        success: false,
        content: null,
        message: "categoria ya existe"
      });
    }

    const nuevaCategoria = await _relaciones.Categoria.create(req.body);
    res.status(201).json({
      success: true,
      content: nuevaCategoria,
      message: "Categoria creada exitosamente"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear la categoria"
    });
  }
};

exports.crearCategoria = crearCategoria;