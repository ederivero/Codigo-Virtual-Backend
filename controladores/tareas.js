// es el encargo de hacer la logica cuando se llame a determinada ruta y con un determinado metodo (GET, POST, PUT)
const tareas = [];
// CRUD
// siempre todo controlador recibe un REQUEST (req) y un RESPONSE (res), ADICIONALMENTE A ELLO si usamos middlewares recibimos un tercer parametro opcional llamado NEXT (next) que es el encargado de pasar al siguiente controlador
// el request es todo lo que me va a mandar el client
// el response es la forma en la cual le voy a responder al cliente
// se puede responder mediante un json (.json()) un texto (.send()) un estado (.status())
export const crearTarea = (req, res) => {
  console.log(req.body);
  tareas.push(req.body);
  return res.json({
    content: tareas[tareas.length - 1],
  });
};
