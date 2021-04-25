import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";
import { hashSync } from "bcrypt";
// Para ver las validaciones disponibles => https://sequelize.org/master/manual/validations-and-constraints.html#per-attribute-validations
export default () => {
  let usuario = conexion.define(
    "usuario",
    {
      usuarioId: {
        field: "id",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      usuarioNombre: {
        field: "nombre",
        type: DataTypes.STRING(25),
      },
      usuarioApellido: {
        field: "apellido",
        type: DataTypes.STRING(25),
      },
      usuarioCorreo: {
        field: "correo",
        type: DataTypes.STRING(25),
        validate: {
          isEmail: true,
        },
      },
      usuarioPassword: {
        field: "password",
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );
  /** Aqui ira la encriptacion y algunos otros metodos PROPIOS DEL MODELO */
  usuario.prototype.setearPassword = function (password) {
    const hash = hashSync(password, 10);
    this.usuarioPassword = hash;
  };

  return usuario;
};
