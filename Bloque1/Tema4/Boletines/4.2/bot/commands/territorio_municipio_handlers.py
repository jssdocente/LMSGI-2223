from telegram import Update
from telegram.ext import ContextTypes
from bot.funciones import *
from utils.cache import *


async def municipios_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """
    Función que se encarga de manejar el comando /municipios
    """

    if len(context.args)==0:
        # Obtener todas las provincias
        # retonar todas las provincias
        
        await context.bot.send_message(chat_id=update.message.chat_id,text=f"Queda obtener la lista completa")
        return

    if len(context.args)==1:
        # El usuario ha introducido 1 argumento ==> Tengo que validar si es una provincia correcta
        argProv = context.args[0]
        # Validar si la provincia existe
        if not cache["provincias"]:
            #obtener todas las provincias
            result = territorio.getListaProvincias()
            if not result:
                return await context.bot.send_message(chat_id=update.message.chat_id,text=f"Error no se pueden obtener las pronvincias")         

            """
            Devuelve una lista, con este diccionario dentro 
            {
               "nombre": provinciaDict["NOMBRE_PROVINCIA"],
               "codigo": provinciaDict["CODPROV"],
               "region": provinciaDict["COMUNIDAD_CIUDAD_AUTONOMA"],
            }
            """ 
            listaProvincias = []   
            for item in result["provincias"]:
                listaProvincias.append(item["nombre"].upper())
        
            cache["provincias"] = listaProvincias

        if not argProv.upper() in cache["provincias"]:
            return await context.bot.send_message(chat_id=update.message.chat_id,text=f"{argProv} no es una provincia válida")    
    
        ## HAPPY-PATH
        await context.bot.send_message(chat_id=update.message.chat_id,text=f"AHORA QUEDA OBTENER LOS MUNICIPOS POR PROVINCIAS")    
        return




