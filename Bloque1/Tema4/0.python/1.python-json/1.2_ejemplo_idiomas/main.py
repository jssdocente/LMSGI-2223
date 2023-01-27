from modules.funciones import *
import os

filename = "res//curso_idiomas.json"
fullPath = f"{os.path.dirname(os.path.abspath(__file__))}//{filename}"
doc = leer_json(fullPath)


