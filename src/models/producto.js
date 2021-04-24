// DataTypes => https://sequelize.org/master/manual/model-basics.html#data-types
import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

// Opciones para poner a las columnas => https://sequelize.org/master/manual/model-basics.html#column-options
export default producto_model = () =>
  conexion.define("producto", {
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      field: "id",
    },
    productoNombre: {
      type: DataTypes.STRING(45),
      field: "nombre",
    },
    productoPrecio: {
      type: DataTypes.DECIMAL(5, 2),
      field: "precio",
    },
  });
