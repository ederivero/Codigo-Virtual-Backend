import express from "express";
import { json } from "body-parser";

export default class Server {
  constructor() {
    this.app = express();
    // definimos el puerto que por lo general es una variable de entorno (esto solo se da en servidores de produccion como HEROKU, DIGITAL OCEAN, AZURE) en el caso que no encontrase esa variable de entorno usara el numero definido (8000)
    this.port = process.env.PORT || 8000;
    this.bodyParser();
    this.rutas();
  }
  bodyParser() {
    // sirve para configurar la forma en la cual el API REST va a recibir datos del front mediante el body
    this.app.use(json());
  }
  rutas() {
    this.app.get("/", (req, res) => res.send("Bienvenido a mi API"));
  }
  start() {
    // sirve para levantar el servidor en el cual le tenemos que pasar el puerto y si todo es exitoso ingresaremos al callback (segundo parametro)
    this.app.listen(this.port, async () => {
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
    });
  }
}
