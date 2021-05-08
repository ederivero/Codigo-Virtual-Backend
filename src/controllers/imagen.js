import { subirArchivo } from "../utils/manejadorArchivosFirebase";

export const subirImagen = async (req, res) => {
  // si subimos un solo archivo (single) usaremos el parametro <<req.file>>, caso contrario, si subimos varios archivos (array) usaremos el parametro <<req.files>>
  try {
    const link = await subirArchivo(req.file);
    return res.status(201).json({
      succes: true,
      content: link,
      message: "Imagen subida exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al subir la imagen",
    });
  }
};
