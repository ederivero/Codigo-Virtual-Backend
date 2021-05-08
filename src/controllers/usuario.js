import { Usuario } from "../models/usuario";

export const crearUsuario = async (req, res) => {
  try {
    const usuarioCreado = await Usuario.create(req.body);
    return res.status(201).json({
      success: true,
      content: usuarioCreado,
      message: "Usuario creado exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      content: error,
      message: "error al registrar el usuario",
    });
  }
};
