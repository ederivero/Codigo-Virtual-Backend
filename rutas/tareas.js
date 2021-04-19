import { Router } from "express";
import {
  crearTarea,
  listarTareas,
  listarTareaPorId,
} from "../controladores/tareas";

export const tareas_router = Router();

tareas_router.route("/tareas").post(crearTarea).get(listarTareas);
// para hacer un parametro x url DINAMICO simplemente definimos el nombre de esa variable pero con ":" para que express sepa que sera dinamico
tareas_router.route("/tarea/:id").get(listarTareaPorId);
