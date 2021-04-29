"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchmen = void 0;

var _jsonwebtoken = require("jsonwebtoken");

// para poder usar las variables declaradas en el archivo .env en este archivo debemos declarar lo siguiente:
require("dotenv").config();

const verificarToken = token => {
  try {
    // el metodo usarla la contraseña para ver si la token es la correcta, si tiene tiempo de vida y si es una token valida (tiene un buen formato) caso contrario saltará el catch
    const payload = (0, _jsonwebtoken.verify)(token, process.env.JWT_SECRET); // si la token esta buena no retornará el payload de dicha token

    return payload;
  } catch (error) {
    // si la token no es valida (la password no concuerda o si ya expiro) entrará al catch y nos devolvera un json con la llave message en la cual indicara la razon del porque
    return error.message;
  }
};

const watchmen = (req, res, next) => {
  if (!req.headers.authorization) {
    // si no esta correctamente autorizado
    return res.status(401).json({
      success: false,
      content: null,
      message: "Se necesita una token para esta ruta"
    });
  } // Bearer 123123asdfads.3423k4j2kl3j4.sd908zx0csa <- authorization


  const token = req.headers.authorization.split(" ")[1];
  const resultado = verificarToken(token);

  if (typeof resultado === "object") {
    next();
  } else {
    return res.status(401).json({
      success: false,
      content: resultado,
      message: "No estas autorizado para realizar esta solicitud"
    });
  }
};

exports.watchmen = watchmen;