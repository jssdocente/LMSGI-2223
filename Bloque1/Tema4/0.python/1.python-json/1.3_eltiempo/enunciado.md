# Ejercicio: El-tiempo.es

En este ejercicios vamos a dar un paso más y obtener la información desde un Servicio-web, en este ejercicio vamos a trabajar con el-tiempo.es

Desde la [Api en su Web](https://www.el-tiempo.net/api) tenemos a nuestra disposición de la documentación de las distintas opciones para obtener los datos.

Realiza los siguientes ejercicios en Python, en base a las opciones disponibles en la Api de el-tiempo.es

1. Obten todas las provincias de españa y muestra su código y nombre de la forma `04-Almería`
2. Obten todas las provincias de españa y muestra su código, nombre de la pronvicina y la región a la que pertenece.
``04-Almería (Andalucía)`
3. Obten todas las provincias de españa y muestra su código, nombre de la provincia, la región a la que pertenece y cúal es su capital.
``04-Almería (Andalucía [Sevilla])`

4. Obtener todas las provincias de una región, utilizando la opción de obtener todas las provincias. `https://www.el-tiempo.net/api/json/v2/provincias`
   
5. Obtener los municipios de una provincia, utilizando la url `https://www.el-tiempo.net/api/json/v2/provincias/[CODPROV]/municipios`

6. Sabiendo que el código INE (Instituto Nacional Estadistica) identifica de forma única a un municipio:
   * El [ID] de un municipio son los primeros 5 dígitos del dato CODIGOINE que viene en la información de un municipio. 
   * Los dos primeros dígitos del CODIGOINE son los dos dígitos que representan CODPROV (id o código de provincia)
  
   Se debe solicitar al usuario un codigo INE de al menos 5 cifras (sino, indicar error), y obtener de el la siguiente información:
   `Municipio: Carmona (Sevilla) [Andalucia] Altitud:125, Superficie:3082 m2, Coordenadas ({latitud},{longitud})`    

7. Obtener del código de una provincia, solicitada al usuario, las poblaciones de mayor de 20000 habitantes.
   `Poblaciones de mayor de 20.000 habitantes de la provncia de : {provincia}`
   `{Municipio 1} - 22.000 Habitantes` ....

8. Indicar cúal es el tiempo que va a hacer en una provincia a través de su código solicitado al usuario.<br>
   Utilizar para ello la siguiente URL: `https://www.el-tiempo.net/api/json/v2/provincias/{codigo}`

   ```python
   """
   Tiempo previsto en 'Cantabria'
   
   >Hoy:
   Intervalos de nubes medias y altas. Probables bancos de niebla matinales en el interior. Temperaturas m\u00ednimas en ascenso, ...

   >Mañana:
   Intervalos de nubes medias y altas tendiendo a poco nuboso. Probables bancos de niebla matinales en el interior. Temperaturas mínimas en descenso en el norte y con ascensos locales en el sur; las m\u00e1ximas con pocos cambios. Viento de sur m\u00e1s intenso en zonas del norte tendiendo a amainar 

   Tiempo para hoy de las principales ciudades:
   >Vitoria-Gasteiz: Temperatura Max:12º y Min:1º,  Estado cielo: Nubes altas
   >Laguardia:  ....

   """
   ```
   
9. Indicar a partir del nombre de la localidad (solicitar al usuario) la siguiente información.<br>
   - Para obtener todos los municipios utiliza `https://www.el-tiempo.net/api/json/v2/municipios`
   - Utilizar para ello la siguiente URL: `https://www.el-tiempo.net/api/json/v2/provincias/{cod-provincia}/municipios/{codigo-municipio}`

   Mostrar la temperatura actual, y la máxima y mínima, la Humedad y la Velocidad del Viento 

    ```python
   """
   Tiempo actual en 'Almendralejo (Badajoz)'

   > Temperatura actual: 8º 
   > Máxima hoy: 12º
   > Mínima hoy: 5º
   
   > Humedad: 8
   > Viento: 8 Km/h

   """
   ```