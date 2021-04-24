import categoria_model from "../models/categoria";
import estante_model from "../models/estante";
import producto_model from "../models/producto";
import producto_estante_model from "../models/productoEstante";
// creamos las variables con la referencia a sus modelos correspondientes
// al momento de llamarlas lo que va a suceder es que se va a crear la tabla en la base de datos, adicionalmente a ello almacenamos su resultado para poder crear posteriormente sus relaciones
export const Categoria = categoria_model();
export const Estante = estante_model();
export const Producto = producto_model();
export const ProductoEstante = producto_estante_model();

// https://sequelize.org/master/manual/assocs.html
// una vez definida todos los modelos ahora pasamos a crear sus relaciones
// una categoria TIENE MUCHOS estantes

Categoria.hasMany(Estante, {
  foreignKey: {
    name: "categorias_id",
    allowNull: false,
  },
});
// un estante PERTENECE A una categoria
Estante.belongsTo(Categoria, {
  foreignKey: "categorias_id",
});

Estante.hasMany(ProductoEstante, {
  foreignKey: {
    name: "estantes_id",
    allowNull: false,
  },
});
ProductoEstante.belongsTo(Estante, {
  foreignKey: "estantes_id",
});
Producto.hasMany(ProductoEstante, {
  foreignKey: {
    name: "productos_id",
    allowNull: false,
  },
});
ProductoEstante.belongsTo(Producto, {
  foreignKey: "productos_id",
});
