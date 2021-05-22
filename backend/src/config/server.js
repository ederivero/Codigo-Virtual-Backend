import express from "express";
import { Server as ServerHttp } from "http";
import socketio from "socket.io";
import { json } from "body-parser";

export default class Server {
  constructor() {
    this.app = express();
    this.puerto = process.env.PORT || 5000;
    this.httpServer = new ServerHttp(this.app);
    this.io = socketio(this.httpServer, {
      cors: {
        // https://socket.io/docs/v4/handling-cors/
        origin: "*", // Access-Control-Allow-Origin | para indicar que dominios pueden acceder a mi API
        methods: ["GET", "POST", "PUT"], // Access-Control-Allowed-Methods | para indicar que metodos puede ser consultados mediante mi servicio REST
        allowedHeaders: ["Content-Type", "Authorization"], // Access-Control-Allowed-Headers | para indicar que tipos de cabeceras pueden ser enviadas a mi servicio REST
      },
    });
    this.cors();
    this.bodyParser();
    this.rutas();
    this.configuracionSockets();
  }
  rutas() {
    this.app.get("/", (req, res) => {
      res.json({
        message: "Bienvenido a mi API de sockets 🔌",
      });
    });
  }
  bodyParser() {
    this.app.use(json());
  }
  cors() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
      next();
    });
  }
  configuracionSockets() {
    let usuarios = [];
    const mensajes = [];
    this.io.on("connect", (cliente) => {
      // el metodo connect se llamara cuando un cliente se conecte al servicio de sockets
      console.log("SE CONECTO EL CLIENTE:");
      console.log(cliente.id);

      cliente.on("configurar-cliente", (nombre) => {
        console.log(nombre);
        usuarios.push({
          id: cliente.id,
          nombre,
        });
        this.io.emit("lista-usuarios", usuarios);
      });
      cliente.on("disconnect", (motivo) => {
        // quitar el usuario del array y hacer un emit del evento lista-usuarios
        // USAR EL METODO FILTER de los arrays
        console.log(`Se desconecto el cliente ${cliente.id}`);
        usuarios = usuarios.filter((usuario) => usuario.id !== cliente.id);
        console.log(usuarios);
        console.log(motivo);
        this.io.emit("lista-usuarios", usuarios);
      });
      // recibir el evento crear-mensaje e imprimir el mensaje enviado 📧
      cliente.on("crear-mensaje", (mensaje) => {
        mensajes.push({
          id: cliente.id,
          mensaje,
          fecha: new Date(),
        });
        // cliente.emit() => cuando llamamos al cliente en el cual estamos conectados y hacemos un emit solamente se va a emitir el evento al mismo cliente
        // cliente.broadcast.emit() => hara un broadcast a todos los demas clientes conectados al socket EXCEPTUANDO al propio cliente que emitio el evento
        // this.io.emit() => emitira el evento a todos los clientes conectados al socket
        // cliente.emit("lista-mensajes", mensajes);
        this.io.emit("lista-mensajes", mensajes);
      });
      cliente.emit("cliente", cliente.id);
      this.io.emit("lista-usuarios", usuarios);
    });
  }
  start() {
    this.httpServer.listen(this.puerto, () => {
      console.log(
        `Servidor de sockets 🔌 corriendo exitosamente en el puerto ${this.puerto}`
      );
    });
  }
}
