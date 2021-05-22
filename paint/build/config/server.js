import express from "express";
import { json } from "body-parser";
import { createServer } from "http";
import { connect } from "mongoose";
import { Server as socketio } from "socket.io";
export default class Server {
  constructor() {
    this.app = express();
    this.puerto = process.env.PORT || 5000;
    this.httpServer = new createServer(this.app);
    this.io = new socketio(this.httpServer, {
      cors: {
        origin: "*"
      }
    });
    this.bodyParser();
    this.rutas();
    this.escucharSockets();

    if (typeof Server.instance === "object") {
      console.log("Ya hay una instancia creada!");
      return Server.instance;
    } else {
      console.log("No hay una instancia creada previamente");
      Server.instance = this;
      return this;
    }
  }

  bodyParser() {
    this.app.use(json());
  }

  rutas() {
    this.app.get("/", (req, res) => {
      res.send("Bienvenido a mi API");
    });
  }

  escucharSockets() {}

  start() {
    this.httpServer.listen(this.puerto, () => {
      console.log("Servidor levantado");
      connect(process.env.MONGO_URL).then(() => {
        console.log("Bd conectada exitosamente");
      });
    });
  }

}