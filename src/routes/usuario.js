import { Router } from "express";
import * as usuario_controller from "../controllers/usuario";
import Multer from "multer";

export const usuario_router = Router();
// Configurar el middleware de multer
const multer = Multer({
  storage: Multer.memoryStorage(), // con esta opcion le indicamos que se almacenara el archivo de manera temporal en la memoria volatil (RAM) y no se guardara en el servidor
  limits: {
    // es una expresion en unidad de medida BYTES
    // byte * 1024 = kilobyte * 1024 = megabyte * 1024 = gigabyte * 1024 = terabyte * 1024
    fileSize: 5 * 1024 * 1024, // 5 Mb
  },
});

// https://www.npmjs.com/package/multer#singlefieldname
usuario_router
  .route("/usuarios")
  .post(multer.single("imagen"), usuario_controller.crearUsuario);
