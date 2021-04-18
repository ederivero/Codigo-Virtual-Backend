from django.urls import path
from .views import ListarCategoriaController

# ! esta variable se tiene que llamar SI O SI asi:
urlpatterns = [
    path('categorias', ListarCategoriaController.as_view()),
]
