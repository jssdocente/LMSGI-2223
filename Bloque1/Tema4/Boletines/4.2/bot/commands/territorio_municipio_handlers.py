from telegram import Update
from telegram.ext import ContextTypes
from bot.funciones import *
from utils.cache import *


async def municipios_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """
    Función que se encarga de manejar el comando /municipios
    """

    if len(context.args)==0:
        # Obtener todas los municipios
        result = territorio.getListaMunicipios()
        if not result:
            return await context.bot.send_message(chat_id=update.message.chat_id,text=f"Error no se pueden obtener las municipios")         

        # >> procesar el resultado de los municipios, y crear un STRING con el resultado ==> Mostrar el resultado en el Bot
        await context.bot.send_message(chat_id=update.message.chat_id,text=f"Queda obtener la lista completa")
        return

    if len(context.args)==1:
        # El usuario ha introducido 1 argumento ==> Tengo que validar si es una provincia correcta
        argProv = context.args[0]
        
        # Validar si la provincia existe
        if not cache["provincias"]:
            #obtener todas las provincias
            result = territorio.getListaMunicipios()
            if not result:
                return await context.bot.send_message(chat_id=update.message.chat_id,text=f"Error no se pueden obtener las municipios")         

        
            listaMunicipios = []   
            for item in result["provincias"]:
                listaMunicipios.append(item["nombre"].upper())
        
            cache["provincias"] = listaMunicipios

        if not argProv.upper() in cache["provincias"]:
            return await context.bot.send_message(chat_id=update.message.chat_id,text=f"{argProv} no es una provincia válida")    
    
        ## HAPPY-PATH
        await context.bot.send_message(chat_id=update.message.chat_id,text=f"AHORA QUEDA OBTENER LOS MUNICIPOS POR PROVINCIAS")    
        return




