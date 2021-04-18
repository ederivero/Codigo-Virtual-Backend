from rest_framework import serializers
from .models import CategoriaModel

# hay dos tipos de serializadores
# 1. un serializador en el cual no es necesario usar un modelo (crear una plantilla comun para capturar datos que no necesariamente corresponderan a un model)
# 2. un serializador basado en un modelo (tabla) jalara todos los campos definidos como parte del serializador


class MostrarCategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        # estos atributos son OBLIGATORIOS en el caso que usemos un ModelSerializer
        model = CategoriaModel
        # ahora indicamos que campos deseamos utilizar de ese modelo para el serializador
        # '__all__' | ['categoriaNombre'] | ['categoriaNombre','categoriaOtro']
        fields = '__all__'
        # o bien podriamos usar el atributo exclude = []
        # exclude = ['categoriaId', 'categoriaOtro', '...']
        # ? NOTA: NO PODEMOS USAR fields Y exclude al mismo tiempo, OBLIGATORIAMENTE TENEMOS QUE USAR UNO DE LOS DOS
