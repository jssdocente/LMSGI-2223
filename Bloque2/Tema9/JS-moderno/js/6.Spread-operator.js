/* SPREAD OPERATOR */
// El operador spread permite expandir un array en sus elementos

//Antes lo haríamos así:
const friends = ['Susan', 'Peter', 'Mark', 'Sarah', 'John'];
const newFriends = ['Jane', 'Bob'];
console.log(`\n Listado de amigos: friends:${friends} y nuevos-amigos:${newFriends}`);

//Ahorra mucho código
const allFriends = [...friends, ...newFriends];
console.log(`\n AllFriend con spread operator>  [...friends, ...newFriends]`);
console.log(allFriends); //["Susan", "Peter", "Mark", "Sarah", "John", "Jane", "Bob"]


//También se puede usar para copiar arrays. FriendsCopy es una copia de friends. Y si modificamos friendsCopy, friends no se modifica
const friendsCopy = [...friends];

//Antes tendríamos que copiar elemento a elemento
function copyArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

const friendNewCopy = copyArray(friends);

//SPREAD OPERATOR EN OBJETOS
//El operador spread también se puede usar en objetos

console.log(`\n\n ==SPREAD OPERATOR en OBJETOS==`);

//Un objeto usuario
const user = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
};

//Antes para copiar el objeto lo haríamos así:
const userCopy = {
  firstName: user.firstName,
  lastName: user.lastName,
  age: user.age,
};
console.log(`\nuserCopy sin spread>`);
console.log(userCopy)

//pero con el operador spread es mucho más fácil:
const userCopyWithSpred = {...user};
console.log(`\nuserCopyWithSpred>>  {...user}`);
console.log(userCopyWithSpred)

//y si queremos modificar alguna propiedad, lo haríamos así:
const userCopyWithSpredModifyProperty = {...user, age: 15};
console.log(`\nuserCopy con spread modificando propiedad>>  {...user, age: 15}`);
console.log(userCopyWithSpredModifyProperty)

//y si queremos añadir una propiedad, lo haríamos así:
const userCopyWithSpredNewProperty = {...user, age: 15, hobby: 'singing'};
console.log(`\nuserCopy con spread agregando propiedad>>  {...user, age: 15, hobby: 'singing'}`);
console.log(userCopyWithSpredNewProperty)

/* REST OPERATOR */
// El operador rest permite agrupar un número indefinido de argumentos en un array

console.log(`\n\n ==REST OPERATOR==`);
const amigos = ['Susan', 'Peter', 'Mark', 'Sarah', 'John'];

//Antes lo haríamos así:
function printAmigos(friend1, friend2, friend3) {
  console.log(friend1, friend2, friend3);
}

console.log(`\nImprimir los amigos forma antigua:  printAmigos(amigos[0], amigos[1], amigos[2])`);
printAmigos(amigos[0], amigos[1], amigos[2]); //"Susan" "Peter" "Mark"

//pero con el operador rest es mucho más fácil: Se pasan las variables según las posiciones del array
console.log(`\nImprimir los amigos forma moderna:  printAmigos(...amigos)`); 
printAmigos(...amigos); //"Susan" "Peter" "Mark"







