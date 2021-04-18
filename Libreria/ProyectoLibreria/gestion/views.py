from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.response import Response
from .models import CategoriaModel
from .serializers import MostrarCategoriasSerializer


# https://www.django-rest-framework.org/api-guide/generic-views/#concrete-view-classes
# C => Create (Crear)
# R => Read   (Leer)
# U => Update (Actualizar)
# D => Delete (Eliminar)
class ListarCategoriaController(ListCreateAPIView):
    # el atributo queryset es el encargado de hacer la consulta a la base de datos para rellenar la respuesta en la vista generica
    # SELECT * FROM CATEGORIAS (sentencia SQL) (sentencias RAW)
    queryset = CategoriaModel.objects.all()
    serializer_class = MostrarCategoriasSerializer


class CRUDCategoriaController(RetrieveUpdateDestroyAPIView):
    queryset = CategoriaModel.objects.all()
    serializer_class = MostrarCategoriasSerializer

    # def get(self, request, pk):
    #     data = self.get_queryset().filter(categoriaId=pk)
    #     if len(data) == 0:
    #         return Response({
    #             "error": "No se encontro"
    #         })
    #     return Response(self.serializer_class(instance=data, many=True).data)
