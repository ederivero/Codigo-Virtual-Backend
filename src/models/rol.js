import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

export default () =>
  conexion.define(
    "rol",
    {
      rolId: {
        field: "id",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      rolNombre: {
        field: "nombre",
        type: DataTypes.STRING(25),
      },
    },
    {
      tableName: "roles",
      timestamps: false,
    }
  );
