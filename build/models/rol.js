"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("rol", {
  rolId: {
    field: "id",
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    type: _sequelize.DataTypes.INTEGER
  },
  rolNombre: {
    field: "nombre",
    type: _sequelize.DataTypes.STRING(25)
  }
}, {
  tableName: "roles",
  timestamps: false
});

exports.default = _default;