from django.contrib import admin
from .models import CategoriaModel, ProductoModel

# https://docs.djangoproject.com/en/3.2/ref/contrib/admin/
# sirve para registrar un nuevo modelo en el panel administrativo
admin.site.register(CategoriaModel)
admin.site.register(ProductoModel)
