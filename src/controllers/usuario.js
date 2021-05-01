import { Usuario } from "../models/usuario";
import { hashSync } from "bcrypt";

export const registro = async (req, res) => {
  // hay dos formas de hacer una creacion
  // *Forma 1:
  const objUsuario = new Usuario(req.body);
  // *Aca encriptamos la contraseña
  const pwdHash = hashSync(req.body.password, 10);
  objUsuario.password = pwdHash;
  // *Fin de encriptacion
  // ?la primera todavia no guarda en la bd, solamente construye el objeto, luego tendremos que llamar a su metodo .save() para que recien se guarde en la bd
  try {
    const nuevoUsuario = await objUsuario.save();
    return res.status(201).json({
      success: true,
      content: nuevoUsuario,
      message: "Usuario creado exitosamente",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      content: error,
      message: "error al guardar el usuario",
    });
  }
  // *Forma 2:
  // ?una manera mas directa que la primera
  // const nuevoUsuario = await Usuario.create(req.body)
  // *Forma 3:
  // ?Insertar varios registros
  /*
  Usuario.insertMany([
    {
      usuarioNombre: "Eduardo",
      usuarioApellido: "de Rivero",
    },
    {
      usuarioNombre: "Pedro",
      usuarioApellido: "Gonzales",
    },
    {
      usuarioNombre: "Maria",
      usuarioApellido: "Perez",
    },
  ]);
  */
};
export const login = (req, res) => {};
export const mostrarUsuario = (req, res) => {};
