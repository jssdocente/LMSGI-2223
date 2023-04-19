/* ES6 Introdujo 2 nuevas fomras de hacer objetos más concisas y más legibles
Shorthand property names
Con ShortHand Property Names podemos crear propiedades de un objeto de forma más concisa
Cuando construimos un objeto, si el nombre de la propiedad es igual al nombre de la variable que contiene el valor de la propiedad, 
podemos omitir el nombre de la propiedad y dejar solo el nombre de la variable
*/

/* SHORTHAND PROPERTY NAMES*/

//Función que devuelve un objeto con las propiedades name, id, avatar y timestamp
function formatMessage (name, id, avatar) {
    return {
      name: name,
      id: id,
      avatar: avatar,
      timestamp: Date.now()
    }
  }

  //Ahora podemos escribirlo de forma más concisa
  function formatMessage (name, id, avatar) {
    return {
      name,
      id,
      avatar,
      timestamp: Date.now()
    }
  }


/* SHORTHAND METHOD NAMES*/
/** Que ocurre si es un método?
 *  Una función que es una propiedad de un objeto se llama método. Con ES6 podemos escribir métodos de forma más concisa, 
 *  por ejemplo: podemos omitir la palabra function y los dos puntos
 */
function formatMessage (name, id, avatar) {
    return {
      name,
      id,
      avatar,
      timestamp: Date.now(),
      save: function () {
        // save message
      }
    }
  }

  //Ahora podemos escribirlo de forma más concisa
  function formatMessage (name, id, avatar) {
    return {
      name,
      id,
      avatar,
      timestamp: Date.now(),
      save () {
        //save message
      }
    }
  }

  /* Ambos ShortHand property Names y Shorthand method names son Azucar sintáctio, es decir edulcoramos la sintáxis para que sea más fácil su uso pero no cambiamos nada */