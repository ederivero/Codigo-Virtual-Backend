export const crearUsuario = (req, res) => {
  // si subimos un solo archivo (single) usaremos el parametro <<req.file>>, caso contrario, si subimos varios archivos (array) usaremos el parametro <<req.files>>
  console.log(req.file);
  return res.json({
    success: true,
  });
};
