import datetime
import json
import tempfile
import os

# Guardo la cache en una ubicación temporal
_cacheFolderPath= f"{tempfile.gettempdir()}/telegramBot/cache"

def _readFileToJson(fichero):
    try:
        with open(fichero) as f:
            datos=json.load(f,)

        return datos
    
    except Exception as ex:
        print(f"Error al leer el fichero.\n{ex}")
        return None

def _saveFileToJson(fichero,datos):
    try:
        
        # create folder if not exits
        
        if not os.path.exists(f"{_cacheFolderPath}/"):
            os.makedirs(f"{_cacheFolderPath}/", exist_ok=True)

        with open(fichero, 'w') as f:
            json.dump(datos,f,indent=4)

        return True
    
    except Exception as ex:
        print(f"Error al leer el fichero.\n{ex}")
        return False


def cachearProvinciasResponse(data):
    _saveFileToJson(f"{_cacheFolderPath}/provincias.json",data)
    cache["response_provincias"] = data

def cachearMunicipiosResponse(data):
    _saveFileToJson(f"{_cacheFolderPath}/municipios.json",data)
    cache["response_municipios"] = data

def loadCache():
    
    if os.path.exists(f"{_cacheFolderPath}/provincias.json"):
        json_data = _readFileToJson(f"{_cacheFolderPath}/provincias.json")
        if json_data:
          cache["response_provincias"] = json_data

    if os.path.exists(f"{_cacheFolderPath}/municipios.json"):
        json_data = _readFileToJson(f"{_cacheFolderPath}/municipios.json")
        if json_data:
          cache["response_municipios"] = json_data


# Cache para usar cachear los elementos que se necesiten
"""
cache = {
    "municipios": {
      "almendralejo": {
        "provincia": "badajoz",
        "municipio": "almendralejo",
        "region": "Extremadura",
        "codigoINE": "06101"
      },
      "aceuchal": {
        "provincia": "badajoz",
        "municipio": "aceuchal",
        "region": "Extremadura",
        "codigoINE": "06102"
      }
    },
    "provincias": {
     
    },
}
"""

cache = {
    "provincias": [],
    # resultado de la request de provincias tal cual la devuelve la api
    "response_provincias": None,
    # resultado de la request de municipios tal cual la devuelve la api
    "response_municipios": None,

}