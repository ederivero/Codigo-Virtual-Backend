"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

require("dotenv").config();

// Para ver las validaciones disponibles => https://sequelize.org/master/manual/validations-and-constraints.html#per-attribute-validations
var _default = () => {
  let usuario = _sequelize2.conexion.define("usuario", {
    usuarioId: {
      field: "id",
      type: _sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    usuarioNombre: {
      field: "nombre",
      type: _sequelize.DataTypes.STRING(25)
    },
    usuarioApellido: {
      field: "apellido",
      type: _sequelize.DataTypes.STRING(25)
    },
    usuarioCorreo: {
      field: "correo",
      type: _sequelize.DataTypes.STRING(25),
      unique: true,
      validate: {
        isEmail: true
      }
    },
    usuarioPassword: {
      field: "password",
      type: _sequelize.DataTypes.TEXT
    }
  }, {
    tableName: "usuarios",
    timestamps: false
  });
  /** Aqui ira la encriptacion y algunos otros metodos PROPIOS DEL MODELO */


  usuario.prototype.setearPassword = function (password) {
    const hash = (0, _bcrypt.hashSync)(password, 10);
    this.usuarioPassword = hash;
  };

  usuario.prototype.validarPassword = function (password) {
    // compara la contraseña entrante con el hash guardado en la bd, si la contraseña es correcta retornara true, caso contrario false
    return (0, _bcrypt.compareSync)(password, this.usuarioPassword);
  };

  usuario.prototype.generarJWT = function () {
    // el payload es la parte en la cual podemos agregar informacion adicional para que el front la pueda utilizar a su conveniencia (no se necesita desencriptar nada, no necesita contraseña)
    const payload = {
      usuarioId: this.usuarioId,
      usuarioCorreo: this.usuarioCorreo
    }; // luego indico la firma que va a servir para encriptar la JWT

    return (0, _jsonwebtoken.sign)(payload, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });
  };

  return usuario;
};

exports.default = _default;