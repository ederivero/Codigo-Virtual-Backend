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
        autoIncrement: true,
        unique: true,
      },
      categoriaNombre: {
        type: DataTypes.STRING(45),
        field: "nombre",
        unique: true,
      },
    },
    {
      tableName: "categorias",
    }
  );
