# Antes de empezar es necesario instalar `pip install request` si no está instalado la librería

import requests

def getProvincias():

    """
    Retorna todas las provincias en una lista, del tipo:
    {
        "CODPROV": "01",
        "NOMBRE_PROVINCIA": "Araba/\u00c1lava",
        "CODAUTON": "16",
        "COMUNIDAD_CIUDAD_AUTONOMA": "Pa\u00eds Vasco/Euskadi",
        "CAPITAL_PROVINCIA": "Vitoria-Gasteiz"
    }
    """

    # Aqui se llama a la petición por el método GET (obtener)
    response = requests.get("https://www.el-tiempo.net/api/json/v2/provincias")

    # obtener la información en formato Json
    json_data = response.json()

    #Ahora simplemente queda obtener la información requerida el 
    return json_data["provincias"]