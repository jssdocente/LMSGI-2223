/* OPERADOR TERNARIO */

// Si un cliente tiene más de 100 puntos en su cuenta, es un 'Gold' de lo contrario, es un 'Silver'
const points = 110;

//Antes lo haríamos así:
let type;
if (points > 100) {
  type = 'Gold';
} else {
  type = 'Silver';
}

//Con operador ternario
type = points > 100 ? 'Gold' : 'Silver';


//También se puede aplicar a funciones
//Si un cliente tiene más de 100 puntos en su cuenta, es un 'Gold' de lo contrario, es un 'Silver'
function getCustomerType(points) {
  return points > 100 ? 'Gold' : 'Silver';
}

console.log(`El cliente es ${getCustomerType(110)}`); //El cliente es Gold

//Para valores booleanos, se puede usar así:
const isGold = points > 100 ? true : false;

//O así:
const isGold2 = points > 100;  //La propia comparación ya devuelve un booleano
