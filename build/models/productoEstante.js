"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("producto_estante", {
  productoEstanteId: {
    primaryKey: true,
    type: _sequelize.DataTypes.INTEGER,
    field: "id",
    unique: true,
    allowNull: false,
    autoIncrement: true
  },
  productoEstanteUnidad: {
    field: "unidad",
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: "productos_estantes",
  timestamps: false
});

exports.default = _default;