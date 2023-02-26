import logging
import os
from telegram import Update
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler, MessageHandler, filters
from dotenv import load_dotenv


import constants as ct
import utils.georef as geo

#Leer el fichero .env donde deben estar guardadas las variables y sus valores con información sensible
 #> para obtener el valor de una variable `os.getenv('<nombre_variable_entorno>')`
load_dotenv()


#Configurar el loggin (explico en clase)
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Soy un bot, estoy para ayudarte")

async def caps(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text_caps = ' '.join(context.args).upper()
    await context.bot.send_message(chat_id=update.effective_chat.id, text=text_caps)

async def unknown(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Sorry, I didn't understand that command.")

async def location_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    location = update.message.location

    # Ejemplo de método dentro de Utils.geo, para obtener la Georeferencia-inversa de una coordenada-gps
    resp = geo.getCityByLocation(location)
    if not resp:
        #Si la respuesta es None (valor Falsy) indicamos al usuario una respuesta amigable
        context.bot.send_message(chat_id=update.effective_chat.id, text="Lo siento no sé en qué ciudad está 🤔")    

    #Indicar en qué ciudad está el usuario.
    await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Usted está en {resp['city']}")
    

if __name__ == '__main__':
    #Obtengo el Token desde una variable-entorno (en vuestro caso no hace falta y es necesario que el profesor tenga el Token disponible para Evaluar)
    botToken = os.getenv('TELEGRAM_BOT_TOKEN')
    application = ApplicationBuilder().token(ct.Constants.TELEGRAM_BOT_TOKEN).build()
  
    start_handler = CommandHandler('start', start)
    application.add_handler(start_handler)

    application.add_handler(MessageHandler(filters.LOCATION,location_handler))

    #Utiliza en caso de que el comando no sea reconocido
    unknown_handler = MessageHandler(filters.COMMAND, unknown)
    application.add_handler(unknown_handler)
    
    #Queda esperando a que el usuario introduzca comandos..
    application.run_polling()