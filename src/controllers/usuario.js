import { Usuario } from "../models/usuario";
import { hashSync, compareSync } from "bcrypt";

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
export const login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({
    usuarioCorreo: email,
  });
  // * PRIMERA FORMA
  // https://docs.mongodb.com/manual/reference/operator/query/regex/
  // ? SELECT * FROM USUARIO WHERE EMAIL LIKE '%ederivero%'
  // await Usuario.findOne({
  //   usuarioCorreo: {$regex: ".*"127.0.0.1:8000/registro+email+"*."}
  // })
  // * SEGUNDA FORMA
  // https://mongoosejs.com/docs/api/query.html#query_Query-where
  // * Esto retorna un array de coincidencias
  // await Usuario.where({
  //     usuarioCorreo: email
  // })
  // * TERCERA FORMA
  // ? encuentrame todos los usuarios que su correo sea email y que su fecha de nacimiento sea mayor que 2000-01-01
  // await Usuario.where("usuarioCorreo").equals(email).where("usuarioFechaNacimiento").gt("2000-01-01")
  if (!usuario) {
    return res.status(404).json({
      success: false,
      content: null,
      message: "Usuario no existe",
    });
  }
  const resultado = compareSync(password, usuario.usuarioPassword);
  if (resultado) {
    /**
     * ! EN VEZ DE REALIZAR EL RETO 20 y 21 hacer lo siguiente
     * TODO: Primer parte: implementar jwt
     * ? 1. la password de la token guardarla en el archivo .env
     * ? 2. usar process.env.JWT_SECRET
     * TODO: SEGUNDA PARTE: crear una ruta para crear y devolver todas las tareas de un usuario pero proteger la ruta con un JWT
     * TODO: TERCERA PARTE: subirlo a un REPO en github y compartir el repo
     */

    return res.json({
      success: true,
      content: null,
      message: "bienvenido",
    });
  }
  return res.status(401).json({
    success: false,
    content: null,
    message: "credenciales incorrectas",
  });
};
export const mostrarUsuario = (req, res) => {};
