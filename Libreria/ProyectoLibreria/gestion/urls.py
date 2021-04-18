from django.urls import path
from .views import ListarCategoriaController, CRUDCategoriaController

# ! esta variable se tiene que llamar SI O SI asi:
urlpatterns = [
    path('categorias', ListarCategoriaController.as_view()),
    path('categorias/<int:pk>', CRUDCategoriaController.as_view()),
]
