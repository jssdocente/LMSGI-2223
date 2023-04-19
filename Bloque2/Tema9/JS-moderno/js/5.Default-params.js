/* En JS destructuring es una forma de extraer datos de un array o un objeto. */

/* DEFAFULT PARAMS */
//Los parámetros por defecto nos permiten asignar un valor por defecto a los parámetros de una función, 
//en caso de que no se le pase ningún valor a la función
//Si no se le pasa ningún valor a la función, se usa el valor por defecto

function printUser({firstName, lastName, age = 18}) {
  console.log(firstName, lastName, age);
}

//Otro ejemplo
function suma(a,b) {
  if (a === undefined || b === undefined) {
    console.log("Faltan parámetros");
    return
  }

  return a +b;
}

//Con todos los parámetros
console.log(`La suma de 2 y 3 es ${suma(2,3)}`); //5

//Con un parámetro
console.log(`La suma de 2 es ${suma(2)}`); //Faltán parmetros

//Con default params
function suma(a = 0,b = 0) {
  return a +b;
}

//Con default params
console.log(`Con default params. Solo 1 parámetro ${suma(2)}`); //Retorna 2

console.log(`Con default params. Solo ningún parámetro ${suma()}`); //Retorna 0
