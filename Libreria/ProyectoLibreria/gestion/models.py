from django.db import models


# PA = Panel Administrativo
class CategoriaModel(models.Model):
    # https://docs.djangoproject.com/en/3.2/ref/models/fields
    categoriaId = models.AutoField(
        primary_key=True,  # sirve para indicar que sera PK
        unique=True,  # no se repetira su valor en otro registro
        null=False,  # no podra aceptar valores nulos
        db_column='id',  # nombre en la base de datos
    )
    categoriaNombre = models.CharField(
        max_length=45,  # longitud maxima del varchar
        null=False,
        db_column='nombre',
        verbose_name='nombre',  # mostrar en el panel administrativo
        help_text='Nombre de la categoria'  # ayuda para que sea visible en el PA
    )

    class Meta:
        # https://docs.djangoproject.com/en/3.2/ref/models/options/
        db_table = 'categorias'  # cambiar el nombre de la tabla en la bd
        verbose_name = 'categoria'  # visualizar el modelo en el PA
        verbose_name_plural = 'categorias'  # visualizar el modelo en plural en el PA
