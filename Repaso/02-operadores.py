# Operadores aritmeticos
# Todos los operadores solamente funcionan en variables numericas!!
var1 = 27
var2 = 5

resultado = var1 + var2  # suma
print("El resultado es: ", resultado)
resultado = var1 - var2  # resta
resultado = var1 * var2  # multiplicacion
resultado = var1 / var2  # division
print("La division es:", resultado)
resultado = var1 % var2  # modulo | solo agarra parte entera
print("El modulo es:", resultado)
resultado = var1 // var2  # cociente | solo agarra parte entera
print("El cociente es:", resultado)
resultado = var1 ** var2  # exponente

# OPERADORES DE ASIGNACION
# Igual (=)
# Incremento
resultado += var1
# Decremento
resultado -= var1
# Multiplicacion
resultado *= var1
# Division
resultado /= var1
# Potencia
resultado **= var1

# OPERADORES DE COMPARACION
print(5 == 4)
# == para saber si el valor de la izq es igual al valor de la derecha (retornara un True o False (bool))
# != para saber si el valor de la izq  es diferente al valor de la derecha
print(5 != 4)
# < > es menor | es mayor
print(10 > 5)
# >=, <= , es mayor o igual, es menor o igual
print(10 >= 10)
