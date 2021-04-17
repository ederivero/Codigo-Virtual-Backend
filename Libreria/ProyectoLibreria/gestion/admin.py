from django.contrib import admin
from .models import CategoriaModel, ProductoModel


# https://docs.djangoproject.com/en/3.2/ref/contrib/admin/
class ProductoAdmin(admin.ModelAdmin):
    # para modificar la vista del modelo
    list_display = ['productoId', 'productoNombre',
                    'productoDescripcion', 'categoria']
    # para agregar un buscador del modelo
    search_fields = ['productoNombre', 'categoria__categoriaNombre']
    list_filter = ['categoria__categoriaNombre']


# sirve para registrar un nuevo modelo en el panel administrativo
admin.site.register(CategoriaModel)
admin.site.register(ProductoModel, ProductoAdmin)
