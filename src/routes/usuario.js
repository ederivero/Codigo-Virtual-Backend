import { Router } from "express";
import * as usuario_controller from "../controllers/usuario";

export const usuario_router = Router();

usuario_router.route("/usuarios").post(usuario_controller.crearUsuario);
