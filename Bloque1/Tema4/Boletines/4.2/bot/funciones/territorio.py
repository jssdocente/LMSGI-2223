import requests
from utils.cache import *

def getListaProvincias():
    """
    Retorna todas las provincias:
   {
        "num_provincias": len(listaProvincias),
        "provincias": listaProvincias
    }
    """

    if not cache["response_provincias"]:

        try:
            # Aqui se llama a la petición por el método GET (obtener)
            response = requests.get("https://www.el-tiempo.net/api/json/v2/provincias",timeout=30)

            if response.status_code!=200:
                return None
        
        except Exception as ex:
            print("Error obtener la petición de provincias")
            return None 
        
        cachearProvinciasResponse(response.json())

    # obtengo la respuesta de la cache
    json_data = cache["response_provincias"]

    #Retorno request Provincias
    """
     provincias: [{
            "CODPROV": "01",
            "NOMBRE_PROVINCIA": "Araba/Álava",
            "CODAUTON": "16",
            "COMUNIDAD_CIUDAD_AUTONOMA": "País Vasco/Euskadi",
            "CAPITAL_PROVINCIA": "Vitoria-Gasteiz"
        }
        , ...
        ],
    """

    # obtener la información en formato Json
    provinciasRetornadas = json_data["provincias"]

    #Voy a devolver una lista de provincias, con el formato que quiero
    listaProvincias = []
    for provinciaDict in provinciasRetornadas:
         listaProvincias.append(
            {
               "nombre": provinciaDict["NOMBRE_PROVINCIA"].upper(),
               "codigo": provinciaDict["CODPROV"],
               "region": provinciaDict["COMUNIDAD_CIUDAD_AUTONOMA"],
            }
         )

    return {
        "num_provincias": len(listaProvincias),
        "provincias": listaProvincias
    }


def getListaMunicipios():
    """
    Retorna todos los municipios en una lista de diccionarios:
    [
        {
            "CODIGOINE": "01008000000",
            "CODPROV": "01",
            "NOMBRE_PROVINCIA": "Araba/Álava",
            "NOMBRE": "Arratzua-Ubarrundia",
            "POBLACION_MUNI": 994,
            "SUPERFICIE": 5740.9889,
            "PERIMETRO": 66639,
            "CODIGOINE_CAPITAL": "01008000501",
            "NOMBRE_CAPITAL": "Durana",
            "POBLACION_CAPITAL": "351",
            "ALTITUD": 528,
        },
        ...
    ]
    """

    if not cache["response_municipios"]:

        # request with error
        try:
        
            # Aqui se llama a la petición por el método GET (obtener)
            response = requests.get("https://www.el-tiempo.net/api/json/v2/municipios",timeout=30)

            if response.status_code!=200:
                return None
            
            cachearMunicipiosResponse(response.json())

        except:
            print("Error obtener la petición de municipios, timeout superado")
            return None

    # obtengo la respuesta de la cache
    municipiosRetornados = cache["response_municipios"]

    #Voy a devolver una lista de provincias, con el formato que quiero
    municipiosResult = []
    for item in municipiosRetornados:
         municipiosResult.append(
                {
                    "CODIGOINE": item["CODIGOINE"],
                    "CODPROV": item["CODPROV"],
                    "NOMBRE_PROVINCIA": item["NOMBRE_PROVINCIA"],
                    "NOMBRE": item["NOMBRE"],
                    "POBLACION_MUNI": item["POBLACION_MUNI"],
                    "SUPERFICIE": item["SUPERFICIE"],
                    "PERIMETRO": item["PERIMETRO"],
                    "CODIGOINE_CAPITAL": item["CODIGOINE_CAPITAL"],
                    "NOMBRE_CAPITAL": item["NOMBRE_CAPITAL"],
                    "POBLACION_CAPITAL": item["POBLACION_CAPITAL"],
                    "ALTITUD": item["ALTITUD"],
                }
         )

    return municipiosResult


