from django.db import models


class AlmacenModel(models.Model):
    # aca iran todas las columnas en forma de atributos de la clase
    # NOTA: solamente usar verbose_name , help_text para cuando vayamos a utilizar el panel administrativo, caso contrario su uso es nulo
    almacenId = models.AutoField(
        unique=True,  # para que sea unico
        primary_key=True,  # para que sea PK
        null=False,  # para que no admita valores nulos
        db_column="id",  # para que su nombre de la columna en la bd sea diferente al del atributo
        # campos que sirven para el panel administrativo de django
        verbose_name="Id del almacen",
    )  # le indicamos que el atributo id sera un campo entero y autoincrementable. NOTA: solamente puede haber un autoincrementable por modelo (no puede haber mas de uno)
    almacenNombre = models.CharField(
        max_length=30,  # parametro obligatorio para cuando sea un charfield
        db_column="nombre",
        verbose_name="Nombre del almacen",
        # es un campo de ayuda que nos brinda una mejor informacion en el panel administrativo
        help_text="Nombrecito del almacen",
    )
    almacenDireccion = models.TextField(
        db_column="direccion",
        verbose_name="Direccion del almacen",
        help_text="Direccion expresada en texto indicando Calle Numero, Distrito, Provincia"
    )
    almacenEstado = models.BooleanField(
        # para indicar un valor por defecto en caso el cliente (frontend) no me lo diese y evitar que esa columna quede con un valor vacio
        default=True,
        null=False,
        db_column="estado",
        verbose_name="Estado del almacen",
        help_text="Estado de disponibilidad del almacen",
    )

    class Meta:
        # la clase meta es una clase propia de la clases en python y sirve para pasar metadatos (configuraciones adicionales) a la clase en la cual se esta haciendo la herencia (en este caso estamos heredando de la clase Model)
        # https://docs.djangoproject.com/en/3.2/ref/models/options/
        # para cambiar el nombre de la tabla en la bd:
        db_table = "almacenes"
        # para cuando querramos leer la informacion de la bd que nos devuelva en un orden especifico, en este caso le estamos diciendo que retorne ordenado por la columna nombre en forma ASC, si quisiesemos de forma DESC se coloca un "-" al comienzo
        ordering = ["nombre", ]
        # sirve para hacer que dos o mas columnas no se pueda repetir su misma informacion de todas esas columnas juntas
        unique_together = [["nombre", "direccion"]]
        # Almacen A | Calle juanes 123 ✅
        # Almacen A | Calle juanes 123 ❌
        # Almacen A | Calle Chinchuli 345 ✅
        # Almaben B | Calle juanes 123 ✅
        # ! NOTA: Los siguientes campos son para el panel administrativo:
        # se vera en el listado de los modelos en el panel administrativo
        verbose_name = "almacen"
        # se vera en el listado pero de una manera plural ya que puede contener varios registros
        verbose_name_plural = "almacenes"
