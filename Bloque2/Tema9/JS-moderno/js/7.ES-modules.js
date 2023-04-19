/* ES Modulos */

//Supongamos que tenemos un archivo llamado calculadora.js dentro de una carpeta llamada utils

// Puedo exportar funciones, variables, clases, etc.
//Se puede exportar todo el contenido de un archivo o solo una parte
//Para exportar todo el contenido de un archivo se utiliza la palabra reservada export
//Para exportar solo una parte se utiliza la palabra reservada export y se indica el nombre de la función, variable, etc.

// Exportar función a función
export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

// Exportar todo el contenido de un archivo
export {suma, resta};  // ==> forma destructuring

// Exportar por defecto
export default function multiplicar(a, b) {
  return a * b;
}


/* AHORA PARA IMPORTAR ESAS FUNCIONES EN OTROS ARCHIVOS  */

// Importar un modulo
import {suma, resta} from './utils/calculadora.js';

// Importar un modulo y renombrar la función
import {suma as sumar, resta} from './6.Spread-operator.js';

// Importar función por defecto
import multiplicar from './utils/calculadora.js';
