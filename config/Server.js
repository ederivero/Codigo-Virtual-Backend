// yarn add express
// forma de importar usando js puro
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    // proccess.env => mira en las variables de entorno de la maquina
    this.puerto = process.env.PORT || 8000;
  }
  iniciarServidor() {
    // el metodo listen sirve para levantar un servidor en express
    this.app.listen(this.puerto, () => {
      console.log(`Servidor corriendo exitosamente: 127.0.0.1:${this.puerto}`);
    });
  }
}

module.exports = {
  Server,
};
