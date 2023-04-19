/* En JS destructuring es una forma de extraer datos de un array o un objeto. */

/* DESTRUCTURING OBJETOS */

//Un objeto usuario
const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
};

//Antes lo haríamos así:
var firstName = Susan.firstName;
var age = Susan.age;
var hobby1 = Susan.hobbies.hobby1;

console.log(firstName, age, hobby1); //"Susan" 14 "singing"

//pero con la desestructuración es mucho más fácil: 
//Extraemos las propiedades firstName, age y hobby1 del objeto Susan, y las asignamos a las variables firstName, age y hobby1
//Las variables se tienen que llamar igual que las propiedades del objeto
let {firstName, lastName, age} = Susan;


/* DESTRUCTURING ARRAYS */
const friends = ['Susan', 'Peter', 'Mark', 'Sarah', 'John'];

//Antes lo haríamos así:
var friend1 = friends[0];
var friend2 = friends[1];
var friend3 = friends[2];

//pero con la desestructuración es mucho más fácil:
//Extraemos los elementos del array friends, y los asignamos a las variables friend1, friend2 y friend3
//En este caso las variables se asignan en el orden en que están los elementos en el array
let [friend1, friend2, friend3] = friends;

//Si no nos interesan todos los elementos del array, podemos dejar huecos
let [friend1, , friend3] = friends;


/* DESTRUCTURING EN FUNCIONES */
//la desestructuración también se puede usar en funciones

//Antes lo haríamos así:
function printUser(user) {
  console.log(user.firstName, user.lastName, user.age);
}

//pero con la desestructuración es mucho más fácil:
//En este caso, en la definición de la función, extraemos las propiedades firstName, lastName y age del objeto user, y las asignamos a las variables firstName, lastName y age
function printUser({firstName, lastName, age}) {
  console.log(firstName, lastName, age);
}

//Llamamos a la función pasándole el objeto Susan ==> ya no hace falta poner user.firstName, user.lastName, user.age
printUser(Susan);

//Es muy interesante, ya que permite definir funciones que aceptan objetos con propiedades diferentes, y que solo se usan las propiedades que nos interesan


