"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("categoria", {
  categoriaId: {
    allowNull: false,
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    field: "id",
    autoIncrement: true,
    unique: true
  },
  categoriaNombre: {
    type: _sequelize.DataTypes.STRING(45),
    field: "nombre",
    unique: true
  }
}, {
  tableName: "categorias"
});

exports.default = _default;