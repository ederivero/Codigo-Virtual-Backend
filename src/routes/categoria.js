import { Router } from "express";
import { crearCategoria } from "../controllers/categoria";
import { watchmen } from "../utils/validadores";
export const categoria_router = Router();

categoria_router.route("/categoria").post(watchmen, crearCategoria);
