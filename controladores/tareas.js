// es el encargo de hacer la logica cuando se llame a determinada ruta y con un determinado metodo (GET, POST, PUT)
// CRUD
// siempre todo controlador recibe un REQUEST (req) y un RESPONSE (res), ADICIONALMENTE A ELLO si usamos middlewares recibimos un tercer parametro opcional llamado NEXT (next) que es el encargado de pasar al siguiente controlador
// el request es todo lo que me va a mandar el client
// el response es la forma en la cual le voy a responder al cliente
// se puede responder mediante un json (.json()) un texto (.send()) un estado (.status())
const tareas = [
  {
    nombre: "Hacer el foro",
    estado: true,
  },
  {
    nombre: "Hacer el ejercicio de Flask",
    estado: false,
  },
];
export const crearTarea = (req, res) => {
  console.log(req.body);
  tareas.push(req.body);
  return res.json({
    content: tareas[tareas.length - 1],
  });
};

export const listarTareas = (req, res) => {
  return res.json({
    content: tareas,
  });
};

export const listarTareaPorId = (req, res) => {
  // mediante el id mandado por la url buscar si existe esa posicion en el arreglo tareas y si la hay mostrar el contenido, caso contrario, indicar que no se encuentra esa tarea
  console.log(req.params);
  const { id } = req.params;
  if (tareas[id - 1]) {
    return res.json({
      content: tareas[id - 1],
    });
  } else {
    return res.status(404).json({
      message: "Not found",
    });
  }
};
