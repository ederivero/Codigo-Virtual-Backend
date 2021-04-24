import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

export default () =>
  conexion.define(
    "producto_estante",
    {
      productoEstanteId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: "id",
        unique: true,
        allowNull: false,
        autoIncrement: true,
      },
      productoEstanteUnidad: {
        field: "unidad",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "productos_estantes",
      timestamps: false,
    }
  );
