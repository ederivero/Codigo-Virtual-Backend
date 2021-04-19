// yarn add express
// forma de importar usando js puro
// const express = require("express");
// y ahora con babelrc
import express from "express";
import { tareas_router } from "../rutas/tareas";
import { json } from "body-parser";

export class Server {
  constructor() {
    this.app = express();
    // proccess.env => mira en las variables de entorno de la maquina
    this.puerto = process.env.PORT || 8000;
    this.app.use(json()); // sirve para indicar a express que tiene que recibir un json del front
    this.rutas();
  }
  rutas() {
    this.app.get("/", (req, res) => {
      res.send("Hola, bienvenido a mi API 😍");
    });
    // es crea un middleware (tbn sirve para indicar un conglomerado de rutas)
    this.app.use(tareas_router);
  }
  iniciarServidor() {
    // el metodo listen sirve para levantar un servidor en express
    this.app.listen(this.puerto, () => {
      console.log(`Servidor corriendo exitosamente: 127.0.0.1:${this.puerto}`);
    });
  }
}

// module.exports = {
//   Server,
// };
