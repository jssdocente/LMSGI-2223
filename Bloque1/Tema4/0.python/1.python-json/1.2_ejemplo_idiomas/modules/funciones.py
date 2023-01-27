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

