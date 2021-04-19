import { Router } from "express";
import { crearTarea } from "../controladores/tareas";

export const tareas_router = Router();

tareas_router.route("/tareas").post(crearTarea);
