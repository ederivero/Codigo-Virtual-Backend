"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("estante", {
  estanteId: {
    primaryKey: true,
    field: "id",
    autoIncrement: true,
    unique: true,
    allowNull: false,
    type: _sequelize.DataTypes.INTEGER
  },
  estanteNombre: {
    field: "nombre",
    type: _sequelize.DataTypes.STRING(45)
  }
}, {
  tableName: "estantes",
  timestamps: false
});

exports.default = _default;