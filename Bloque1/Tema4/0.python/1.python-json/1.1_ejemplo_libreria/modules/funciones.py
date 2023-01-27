import json
import sys
import os
import pprint as pp

def leer_json(fichero):
    try:
        with open(fichero) as f:
            datos=json.load(f,)

        return datos
    except Exception as ex:
        print(f"Error al leer el fichero.\n{ex}")
        sys.exit(0)


def contar_libros(doc):
	return len(doc.get("bookstore").get("book"))

def getBooks(doc):
    return doc.get("bookstore").get("book")

def seleccionar_por_precios(doc,precioMax,precioMin):
    books = getBooks(doc)

    booksInPrice = []

    for book in books:
        bookPrice = float(book["price"])
        if bookPrice>=precioMin and bookPrice<=precioMax:
            booksInPrice.append(book)
    
    return booksInPrice

