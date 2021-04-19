// con js puro:
// const { Server } = require("./config/Server");
// con babelrc:
import { Server } from "./config/Server";
const objServer = new Server();
objServer.iniciarServidor();
