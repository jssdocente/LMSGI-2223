import funciones as fn

#1. Obten todas las provincias de españa y muestra su código y nombre de la forma 04-Almería
listaProvincias =fn.getProvincias()
print("1. Lista de todas las provincias y su código\n")
for provinciaDict in listaProvincias:
    print(f"{provinciaDict['CODPROV']}-{provinciaDict['NOMBRE_PROVINCIA']}")
