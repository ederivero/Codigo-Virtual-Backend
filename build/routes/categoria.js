"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoria_router = void 0;

var _express = require("express");

var _categoria = require("../controllers/categoria");

var _validadores = require("../utils/validadores");

const categoria_router = (0, _express.Router)();
exports.categoria_router = categoria_router;
categoria_router.route("/categoria").post(_validadores.watchmen, _categoria.crearCategoria);