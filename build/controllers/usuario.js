"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.registro = void 0;

var _relaciones = require("../config/relaciones");

const registro = async (req, res) => {
  try {
    // vamos a utilizar la creacion en dos pasos
    const {
      password
    } = req.body;

    const nuevoUsuario = _relaciones.Usuario.build(req.body); // con esto ya hemos encriptado la contraseña de texto plano a un HASH


    nuevoUsuario.setearPassword(password);
    await nuevoUsuario.save();
    return res.status(201).json({
      success: true,
      content: nuevoUsuario,
      message: "Usuario creado exitosamente"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear el usuario"
    });
  }
};

exports.registro = registro;

const login = async (req, res) => {
  const {
    email,
    password
  } = req.body; // ver si hay un usuario con ese correo

  try {
    const usuarioEncontrado = await _relaciones.Usuario.findOne({
      where: {
        usuarioCorreo: email
      }
    });

    if (!usuarioEncontrado) {
      return res.status(404).json({
        success: false,
        content: null,
        message: "Usuario no encontrado"
      });
    }

    const resultado = usuarioEncontrado.validarPassword(password);

    if (resultado) {
      return res.json({
        success: true,
        content: usuarioEncontrado.generarJWT(),
        message: "Bienvenido"
      });
    } else {
      return res.status(400).json({
        success: false,
        content: null,
        message: "Contraseña incorrecta"
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al hacer el login"
    });
  }
};

exports.login = login;