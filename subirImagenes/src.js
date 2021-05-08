const nombre = document.getElementById("inputNombre");
const apellido = document.getElementById("inputApellido");
const sexo = document.getElementById("inputSexo");
const direccion = document.getElementById("inputDireccion");
const fotografia = document.getElementById("inputFotografia");
const telefono = document.getElementById("inputTelefono");
const registrar = document.getElementById("registrar");
const BASE_URL = "http://127.0.0.1:8000";

// esto me sirve para subir la imagen al back
const formData = new FormData();
registrar.addEventListener("click", async (e) => {
  e.preventDefault();
  // el imput de tipo file siempre guarda los archivos que seleccionamos en un array, aun asi sera un unico archivo
  console.log(fotografia.files[0]);
  formData.append("imagen", fotografia.files[0]);
  const resultado = await fetch(BASE_URL + "/subirImagen", {
    method: "POST",
    body: formData,
    // esto no sirve , solamente es para indicar como seria en el caso que necesitamos indicar un JWT o algun metodo de autenticacion
    headers: {
      Authorization: "Bearer 126534165243.546zf4a65f4a.5134465465a4f",
    },
  });
  const json = await resultado.json();
  console.log(json);
});
