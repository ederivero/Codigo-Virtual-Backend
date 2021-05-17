from bd import bd
from sqlalchemy import Column, types


class ContactoModel(bd.Model):
    # para modificar el nombre de la tabla en la bd
    __tablename__ = "contactos"
    clienteId = Column(
        name="id",
        type_=types.Integer,
        primary_key=True,
        autoincrement=True,
        unique=True,
        nullable=False
    )
    clienteNombre = Column(
        name="nombre",
        type_=types.String(25),
        nullable=False
    )
    clienteApellido = Column(
        name="apellido",
        type_=types.String(25),
        nullable=False
    )
    clienteTitulo = Column(
        name="titulo",
        type_=types.String(25),
        nullable=False
    )
