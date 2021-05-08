// libreria que nos permite manipular nuestro storage de firebase
import { Storage } from "@google-cloud/storage";
// inicializamos el objeto de firebase para poder conectarnos al almacenamiento (bucket)
const storage = new Storage({
  projectId: "codigo9-166dd",
  keyFilename: "./credenciales_firebase.json",
});

// ahora creamos la instancia de nuestro storage
const bucket = storage.bucket("codigo9-166dd.appspot.com");

export const subirArchivo = (archivo) => {
  return new Promise((resuelto, rechazo) => {
    // validamos que tengamos un archivo que subir
    if (!archivo) return rechazo("No se encontro el archivo");
    // crea la instancia de nuestro archivo en firebase y adicionalmente a ello nos retorna metodos para manipular dicho archivo
    const file = bucket.file(archivo.originalname);
    // agregamos la configuracion adicional de nuestro archivo como su extension y formato
    const blobStream = file.createWriteStream({
      metadata: {
        contentType: archivo.mimetype,
      },
    });
    // el proceso de subida se genera en un segundo plano mediante el cual se controla en estados
    blobStream.on("error", (error) => {
      // ingresara cuando el archivo tuvo problema para subirse a firebase
      return rechazo(error);
    });
    blobStream.on("finish", () => {
      // ingresara a este arrow function cuanto el archivo termine de subir exitosamente
      // getSignedUrl sirve para que nos brinde firebase una ruta para acceder a nuestro archivo fuera del storage
      file
        .getSignedUrl({
          action: "read",
          expires: "12-31-2021", // MM-DD-YYYY
        })
        .then((link) => {
          return resuelto(link);
        })
        .catch((error) => {
          return rechazo(error);
        });
    });
    // culmino el proceso de conexion con firebase
    // le mando el contenido del archivo
    // en si este es el inicio y fin de la conexion con firebase, luego recien viene los estados de mas arriba
    blobStream.end(archivo.buffer);
  });
};

export const eliminarArchivo = (nombreArchivo) =>
  bucket.file(nombreArchivo).delete();
