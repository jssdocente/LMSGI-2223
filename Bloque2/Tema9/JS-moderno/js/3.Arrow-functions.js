/* En JS existen varios tipos de declarar funciones. */

/* FORMA TRADICIONAL*/
function filterNumMayor5(num) {
  return num>5
}
//Para llamar a la función se utiliza el nombre de la función
Console.log(`Forma tradicional: ${filterNumMayor5(6)}`)


/* FORMA TRADICIONAL TIPO VALOR, ASIGNADA A VARIABLE*/
//En este caso la función es anónima, no tiene nombre. Para llamar a la función se utiliza la variable que la contiene
var varfilterNumMayor5 = function(num) {
  return num>5
}
Console.log(`Forma función anónima: ${varfilterNumMayor5(6)}`)

/* FORMA ARROW FUNCTION*/

//En este caso se utiliza la flecha => para indicar que es una función. Se borra la palabra function y los paréntesis son opcionales si solo hay un parámetro
var arrowfilterNumMayor5 = (num) => {
  return num>5
}

//Si la función solo tiene una línea de código, se puede omitir las llaves y el return
var arrowfilterNumMayor5 = (num) => num>5

//En este caso los paréntesis son obligatorios, pues hay más de un parámetro
var arrowMayor2Nums = (num1,num2) => {
  if (num1>num2)
    return num1
  else
    return num2
}



//Para llamar a la función se utiliza el nombre de la variable
Console.log(`Forma arrow function: ${arrowfilterNumMayor5(6)}`)
Console.log(`Forma arrow function (2 parámetros): ${arrowMayor2Nums(6,7)}`)


//Las funciones arrow son muy útiles cuando se utilizan en el contexto de un array. Por ejemplo, para filtrar un array
var array = [1,2,3,4,5,6,7,8,9,10]
var arrayFiltrado = array.filter(arrowfilterNumMayor5)
Console.log(`Array filtrado. Functión definida previamente: ${arrayFiltrado}`)

//O también podemos definir la función dentro de la llamada a filter
var arrayFiltrado2 = array.filter((num) => num>5)
Console.log(`Array filtrado. Functión definida en línea: ${arrayFiltrado2}`)
