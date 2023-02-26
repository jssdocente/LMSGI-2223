import os
import requests
import constants as ct
from telegram import Location
from dotenv import load_dotenv
from box import Box

# Utilizar la Api de RapidAPI <Forward & Reverse Geocoding>. Se necesita registro. Usar email@iesarroyoharnina.
def getCityByLocation(location :Location):
    """
    Obtiene la georeferencia inversa desde un (latitud,longitud)
    Para obtener el esquema de la respuesta, haz una petición
    """

    url = "https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse"

    # Rellenar el código necesario para llamar a la API.. => revisar la API en web RapidAPI
    pass  #TODO: quitar esta linea al desarrollar

    #Retornar un dictionario con los datos necesarios... abajo os dejo un ejemplo de una opción posible
    
    #return {
    #    "city": ...
    #    "postalCode": ...
    #    "description": ...
    #}