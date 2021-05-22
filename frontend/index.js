const socket = io("http://127.0.0.1:5000");
const nombre = document.getElementById("nombre");
const ingresar = document.getElementById("ingresar");
const listaUsuarios = document.getElementById("lista-usuarios");
const mensaje = document.getElementById("mensaje");
const listaMensaje = document.getElementById("lista-mensajes");

socket.on("connect", () => {
  console.log("Me conecte al socket del back!");
});
socket.on("cliente", (cliente) => {
  console.log(cliente);
});
ingresar.onclick = (e) => {
  e.preventDefault();
  ingresar.disabled = true;
  nombre.disabled = true;
  socket.emit("configurar-cliente", nombre.value);
};

socket.on("lista-usuarios", (usuarios) => {
  console.log("La lista de usuarios es:");
  console.log(usuarios);
  listaUsuarios.innerHTML = "";
  for (const key in usuarios) {
    const usuarioLi = document.createElement("li");
    usuarioLi.className = "list-group-item";
    usuarioLi.innerText = usuarios[key].nombre;
    listaUsuarios.appendChild(usuarioLi);
  }
});

mensaje.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    socket.emit("crear-mensaje", mensaje.value);
    console.log(mensaje.value);
    mensaje.value = "";
  }
});

socket.on("lista-mensajes", (mensajes) => {
  console.log(mensajes);
  listaMensaje.innerHTML = "";
  mensajes.forEach((mensaje) => {
    console.log(mensaje);
    const mensajeLi = document.createElement("li");
    mensajeLi.innerText = `${mensaje.nombre} dice: ${mensaje.mensaje}. Enviado el ${mensaje.fecha}`;
    listaMensaje.appendChild(mensajeLi);
  });
});
