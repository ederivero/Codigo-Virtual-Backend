import Server from "../config/server";
import { Usuario } from "../models/usuario";
import * as faker from "faker";
const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export const ingresarCoordenada = async (data, cliente) => {
  // creo mi instancia de mi servidor, y gracias al patron Singleton si ya hay una instancia creada, no creara otra y se reusara la que ya esta creada
  const objServidor = new Server();
  // de la informacion que me esta mandando mi cliente del socket, extraere la posicion x, posicion y y el nombre del usuario
  const { x, y } = data;
  // buscare segun el nombre del usuario, sus cooredenadas
  try {
    // primero busco si existe el usuario con determinado nombre
    const usuario = await Usuario.findOne({ nombre: cliente.id });
    // si no existe el usuario entonces hare lo siguiente
    if (!usuario) {
      // creo el nuevo usuario con su nombre, y le registro las coordenadas iniciales
      await Usuario.create({
        nombre: cliente.id,
        color: getRandomColor(),
        coordenadas: [{ x, y }],
      });
    } else {
      // agrego a ese registro de coordendas, las ultimas coordenadas mandadas por el socket
      usuario.coordenadas.push({
        x,
        y,
      });
      // actualizo el usuario con las nuevas coordenadas ingresadas
      await Usuario.findOneAndUpdate(
        { nombre: cliente.id },
        { coordenadas: usuario.coordenadas }
      );
    }
    // ahora buscamos todos los usuarios para devolver con sus coordenadas
    const usuarios = await Usuario.find();
    // emito el evento para que todos los cliente conectados escuchen los cambios en tiempo real
    cliente.broadcast.emit("coordenadas", usuarios);
  } catch (error) {
    console.log(error);
  }
};
