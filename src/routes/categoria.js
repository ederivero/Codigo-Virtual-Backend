import { Router } from "express";
import { crearCategoria } from "../controllers/categoria";

export const categoria_router = Router();

categoria_router.route("/categoria").post(crearCategoria);
