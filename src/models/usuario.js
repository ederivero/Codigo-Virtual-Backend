// un usuario puede tener varios telefonos, sin embargo, un telefono pertenece a un solo usuario, hacer el modelado en bd no relacional (mongodb)
// ! el usuario tiene :
// * nombre (required, longitud maxima 50char, minima 10char)
// * apellido (required)
// * direccion
// * fotografia
// * sexo (required)
// ! el telefono tiene:
// * codigo de ciudad
// * numero telefonico (required, solo numerico)
// no se necesita time stamps para ninguno de los casos

import { Schema, model } from "mongoose";

const telefonoSchema = new Schema(
  {
    codigo_ciudad: Schema.Types.Number,
    numero: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  {
    _id: false, // sirve para que en ese esquema no se genere automaticamente el identificador unico
    timestamps: false,
  }
);

const usuarioSchema = new Schema(
  {
    nombre: {
      required: true,
      type: Schema.Types.String,
      maxlength: 50,
      minlength: 10,
    },
    apellido: {
      required: true,
      type: Schema.Types.String,
    },
    direccion: Schema.Types.String,
    fotografia: Schema.Types.String,
    sexo: {
      required: true,
      type: Schema.Types.String,
    },
    telefonos: [telefonoSchema],
  },
  {
    timestamps: false,
  }
);

export const Usuario = model("usuario", usuarioSchema);
