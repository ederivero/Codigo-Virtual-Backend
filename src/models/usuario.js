import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";
import { hashSync, compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";
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
  usuario.prototype.validarPassword = function (password) {
    // compara la contraseña entrante con el hash guardado en la bd, si la contraseña es correcta retornara true, caso contrario false
    return compareSync(password, this.usuarioPassword);
  };
  usuario.prototype.generarJWT = function () {
    // el payload es la parte en la cual podemos agregar informacion adicional para que el front la pueda utilizar a su conveniencia (no se necesita desencriptar nada, no necesita contraseña)
    const payload = {
      usuarioId: this.usuarioId,
      usuarioCorreo: this.usuarioCorreo,
    };
    // luego indico la firma que va a servir para encriptar la JWT
    const password = "password";
    return sign(payload, password, { expiresIn: "1h" });
  };

  return usuario;
};
