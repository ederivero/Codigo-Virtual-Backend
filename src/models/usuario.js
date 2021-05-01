import { model, Schema } from "mongoose";
import { tareaSchema } from "./tarea";

const usuarioSchema = new Schema(
  {
    usuarioNombre: {
      type: Schema.Types.String,
      alias: "nombre",
    },
    usuarioApellido: {
      type: Schema.Types.String,
      alias: "apellido", // sirve para modificar el nombre de la columna en la bd
      required: true, // indica que el campo no puede tener un valor nulo
      // adicionalmente a las caracteristicas previas podemos indicar algunas adicionales dependiendo del tipo de dato de la columna https://mongoosejs.com/docs/schematypes.html
      trim: true, // elimina los espacios al comienzo y al final del texto
      minLength: 5, // longitud minima del texto
      maxLength: 30, // longitud maxima del texto
    },
    usuarioCorreo: {
      unique: true, // nunca se puede ingresar el mismo correo dos veces o mas
      type: Schema.Types.String,
      required: true,
      alias: "correo",
    },
    usuarioPassword: {
      type: Schema.Types.String,
      alias: "password",
    },
    usuarioCelular: {
      type: Schema.Types.Number,
      unique: true,
      alias: "celular",
    },
    usuarioFechaNacimiento: {
      type: Schema.Types.Date,
      alias: "fec_nacimiento",
    },

    usuarioTareas: {
      type: [tareaSchema],
      alias: "tareas",
    },
  },
  {
    timestamps: {
      createdAt: "fecha_creacion",
      updatedAt: false,
    },
  }
);
export const Usuario = model("usuario", usuarioSchema);
