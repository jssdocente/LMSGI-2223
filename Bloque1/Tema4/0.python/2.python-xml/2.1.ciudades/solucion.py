from funciones import *
from lxml import etree
import os

filename = "res/provinciasypoblaciones.xml"
fullPath = f"{os.path.dirname(os.path.abspath(__file__))}/{filename}"

# Creamos el objeto arbol desde el fichero XML
# Este objeto es de tipo ElementTree
arbol = etree.parse(fullPath)


#Ejercicio 1
print("NOMBRE DE TODAS LAS PROVINCIAS")
for nombre in lista_provincias(arbol):
	print (nombre)


##Ejercicio 2
print("\nNOMBRE DE TODAS LAS 50 PRIMERAS POBLACIONES")
todasPoblaciones = lista_poblaciones(arbol)
for nombre in todasPoblaciones[:51]:
	print (nombre)

## Ejercicio 3
print("\n TODAS LAS PROVINCIAS Y EL Nº DE POBLACIONES")
for nombre ,total in lista_provincias_total_poblaciones(arbol):
	print (nombre,total)

## Ejercicio 4
provinciaName = input("\n Introduce el nombre de la provincia para obtener todas sus poblaciones:")
for nombre in getPoblacionByProvincia(provinciaName,arbol):
	print (nombre)

## Ejercicio 5
poblacionName = input("\n Introduce el nombre de la población para obtener a qué provincia pertenece:")
print(getProvinciaByPoblacion(poblacionName,arbol))

## Ejercicio 6
print("\nIntroduce una serie de IDs de provincias. Cuando haya terminado pulse 0:")
lista_id=[]
id=input("id:")
while id!="0":
	lista_id.append(id)
	id=input("id:")

print("\n=== Provincias y localidades de los identificadores introducidos ===\n")
lista=provincias_por_identificador(lista_id,arbol)
for prov in lista:
	print(f"Provincia: '{prov[0]}' y sus localidades --> ")

	localidadesLista=prov[1]
	for loc in localidadesLista:
		print(loc)


## Ejercicio 7
provinciaName = input("\n Introduce el nombre de la provincia para obtener las poblaciones Grandes:")
print(localidades_grandes(provinciaName,arbol))

## Ejercicio 8
poblacionName = input("\n Introduce el nombre de la población para obtener la provincia y si es una población grande:")
print(localidad_grande(poblacionName,arbol))