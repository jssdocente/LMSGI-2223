from modules.funciones import *
import os
import pprint as pp

filename = "res\\libros.json"
fullPath = f"{os.path.dirname(os.path.abspath(__file__))}\\{filename}"
doc = leer_json(fullPath)


# Ejercicio 1
print(40*"*")
print("Cuantos libros tenemos:")
print(contar_libros(doc))

# Ejercicio 2
print(40*"*")
#precio_min=float(input("Precio mínimo:"))
#precio_max=float(input("Precio máximo:"))
print("Libros entre los dos precios:")
for libro in seleccionar_por_precios(doc,30,20):
    print("\n"+ 10*"-" + "libro:" + libro["title"]["__text"] + "\n")
    print(libro)