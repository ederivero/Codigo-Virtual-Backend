import { Schema } from "mongoose";

export const tareaSchema = new Schema(
  {
    tareaFecha: {
      type: Schema.Types.Date,
      alias: "fecha",
      required: true,
    },
    tareaNombre: {
      type: Schema.Types.String,
      minLength: 3,
      maxLength: 40,
      alias: "nombre",
      required: true,
    },
    tareaLugar: {
      type: Schema.Types.String,
      alias: "lugar",
    },
    tareaEstado: {
      type: Schema.Types.String,
      alias: "estado",
    },
  },
  {
    timestamps: false,
  }
);
