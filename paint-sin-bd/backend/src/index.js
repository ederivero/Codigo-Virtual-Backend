import express from "express";
import { Server } from "http";
import socketIo from "socket.io";

class ServerPaint {
  constructor() {
    this.app = express();
    this.puerto = process.env.PORT || 5000;
    this.httpServer = new Server(this.app);
    this.io = socketIo(this.httpServer, {
      cors: "*",
    });
    this.escucharSocket();
  }
  escucharSocket() {
    this.io.on("connect", (cliente) => {
      console.log(cliente.id);
      cliente.on("coordenada", (data) => {
        console.log(data);
        cliente.broadcast.emit("coordenadas", data);
      });
    });
  }
  start() {
    this.httpServer.listen(this.puerto, () => {
      console.log("server corriendo exitosamente");
    });
  }
}

const objServer = new ServerPaint();
objServer.start();
