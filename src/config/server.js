import express from "express";
import { json } from "body-parser";
import { conexion } from "./sequelize";
import { producto_router } from "../routes/producto";
import { usuario_router } from "../routes/usuario";
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
    this.app.use(producto_router);
    this.app.use(usuario_router);
  }
  start() {
    // sirve para levantar el servidor en el cual le tenemos que pasar el puerto y si todo es exitoso ingresaremos al callback (segundo parametro)
    this.app.listen(this.port, async () => {
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
      try {
        // esto va a trata de conectarse con el servidor usando las credenciales definidas anteriormente
        // alter => si hubo algun cambio en la bd volvera a generar SOLAMENTE esos cambios
        // force => RESETEA (borra) toda la bd y su contenido y lo vuelve a crear de 0, NUNCA USAR ESTO EN MODO DE PRODUCCION
        await conexion.sync();
        console.log("Base de datos sincronizada correctamente");
      } catch (error) {
        console.error(error);
      }
    });
  }
}
