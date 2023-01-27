from modules.funciones import *
import os

filename = "res//libros.json"
fullPath = f"{os.path.dirname(os.path.abspath(__file__))}{filename}"
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


# Ejercicio 3
# Pide por teclado una cadena, y muestra el título 
# y el año de publicación de los libros donde el título empiece por la cadena introducida.
filtroTitulo = input("Por favor introduce el filtro del titulo:\n")
listaTitulosFiltrados = filtrar_x_titulo(doc,filtroTitulo)

for book in listaTitulosFiltrados:
     print(f"Titulo: {book['title']['__text']} año publicación: {book['year']} ")


# Ejercicio 4

# filtroTitulo = input("Por favor introduce el filtro del titulo:\n")
listaTitulosFiltrados = filtrar_x_lista_autores(doc,["Giada De Laurentiis", "J K. Rowling"])

for book in listaTitulosFiltrados:
     print(f"Titulo: {book['title']['__text']}, año publicación: {book['year']} ")
