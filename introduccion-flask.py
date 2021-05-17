from flask import Flask

# la variable app sera la instancia de la clase Flask
# el primer parametro para el constructor de la clase Flask tiene que ser el hilo en el cual se esta ejecutando la aplicacion (en el archivo principal de nuestro proyecto)
# __name__ sirve para definir que nuestra aplicacion de flask se va a ejecutar en el archivo principal del proyecto
app = Flask(__name__)


# es un controlador que se va a ejecutar cuando se llame a la ruta 127.0.0.1:5000/
@app.route('/')
def ruta_inicial():
    return {
        "message": "El servidor se ha levantado exitosamente."
    }


app.run(debug=True)
