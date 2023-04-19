/* NOVEDADES ES2020 */

// nULLISH COALESCING OPERATOR
// El operador de coalescencia nula (??) devuelve su operando derecho cuando su operando izquierdo es null o undefined, 
//y de lo contrario devuelve su operando izquierdo.

//Antes lo haríamos así:
const user = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
};

console.log(`\n\n ==NULLISH COALESCING OPERATOR==`);
console.log(`\nfirstName con ||>`);
const firstName = user.firstName || 'John';
console.log(firstName)

//Con el operador nullish coalescing
//Si el valor de firstName es null o undefined, entonces se mostrará el valor de la derecha, en este caso 'John'
const firstName2 = user.firstName ?? 'John';

console.log(`\nfirstName con ??>`);
console.log(firstName2)

//Si la propieadad no existe, entonces se mostrará el valor de la derecha, en este caso 'John'
const firstName3 = user.firstName2 ?? 'John';


// OPTIONAL CHAINING
// El encadenamiento opcional (?.) permite leer el valor de una propiedad ubicada profundamente en una cadena de
// objetos sin tener que verificar que cada parte de esta cadena exista.

console.log(`\n\n ==OPTIONAL CHAINING==`);
const user2 = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  address: {
    street: "Main Street",
    number: 123,
    city: "New York",
    country: "USA",
  },
};

//Antes lo haríamos así:
if (user2.address) {
  if (user2.address.city) {
    console.log(`\n\n ==OPTIONAL CHAINING==`);
    console.log(`\nAntes del optional chaining>`);
    console.log(user2.address.city);
  }
}

//Con el optional chaining
console.log(`\n\n ==OPTIONAL CHAINING==`);
console.log(`\nCon el optional chaining>`);
console.log(user2.address?.city);

//Si la propiedad no existe, entonces se mostrará undefined
console.log(`\n\n ==OPTIONAL CHAINING==`);
console.log(`\nSi la propiedad no existe, entonces se mostrará undefined>`);
console.log(user2.address?.city2);

//Si la propiedad no existe, entonces se mostrará el valor de la derecha, en este caso 'New York'
console.log(`\n\n ==OPTIONAL CHAINING y NULLISH COALESCING OPERATOR ==`);
console.log(`\nSi la propiedad no existe, entonces se mostrará el valor de la derecha, en este caso 'New York'>`);
console.log(user2.address?.city2 ?? 'New York');



