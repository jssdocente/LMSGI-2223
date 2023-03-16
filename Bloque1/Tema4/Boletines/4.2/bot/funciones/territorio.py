import requests

def getListaProvincias():
    """
    Retorna todas las provincias:
   {
        "num_provincias": len(listaProvincias),
        "provincias": listaProvincias
    }
    """
    # Aqui se llama a la petición por el método GET (obtener)
    response = requests.get("https://www.el-tiempo.net/api/json/v2/provincias")

    if response.status_code!=200:
        return None


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
    json_data = response.json()
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



def getListaProvincias():
    """
    Retorna todas las provincias:
   {
        "num_provincias": len(listaProvincias),
        "provincias": listaProvincias
    }
    """
    # Aqui se llama a la petición por el método GET (obtener)
    response = requests.get("https://www.el-tiempo.net/api/json/v2/provincias")

    if response.status_code!=200:
        return None