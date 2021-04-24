import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

export default () =>
  conexion.define(
    "categoria",
    {
      categoriaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "id",
      },
      categoriaNombre: {
        type: DataTypes.STRING(45),
        field: "nombre",
      },
    },
    {
      tableName: "categorias",
    }
  );
