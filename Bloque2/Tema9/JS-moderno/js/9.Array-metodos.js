/* METODOS DE ARRRAYS */

//Si queremos saber si un elemento está en un array, podemos usar el método includes
const amigos = ['Susan', 'Peter', 'Mark', 'Sarah', 'John'];
console.log(amigos.includes('Susan')); //true

//Si queremos filtrar un array, podemos usar el método filter ==> devuelve un array ==> amigos con más de 4 letras
const amigosFiltrados = amigos.filter((amigo) => amigo.length > 4);

//También podemos usar el método filter para filtrar un array de objetos
const amigosObjetos = [
  { name: 'Susan', age: 14 },
  { name: 'Peter', age: 18 },
  { name: 'Mark', age: 20 },
  { name: 'Sarah', age: 12 },
  { name: 'John', age: 16 },
];

//Si queremos filtrar los amigos mayores de 18 años
const amigosMayores = amigosObjetos.filter((amigo) => amigo.age > 18);

//Si queremos filtrar los amigos mayores de 18 años y que se llamen Peter
const amigosMayoresPeter = amigosObjetos.filter((amigo) => amigo.age > 18 && amigo.name === 'Peter');

//Si queremos encontrar un elemento en un array, podemos usar el método find ==> devuelve un elemento ==> el primer amigo con más de 4 letras
const amigoEncontrado = amigos.find((amigo) => amigo.length > 4);

//Si queremos encontrar un elemento en un array de objetos, podemos usar el método find ==> devuelve un elemento ==> el primer amigo con más de 18 años
const amigoEncontradoObjeto = amigosObjetos.find((amigo) => amigo.age > 18);

/* METODO MAP */

//Si queremos transformar un array, podemos usar el método map ==> devuelve un array ==> transforma los nombres de los amigos a mayúsculas
const amigosMayusculas = amigos.map((amigo) => amigo.toUpperCase());

//También se puede usar el método map para transformar un array de objetos
const amigosMayusculasObjetos = amigosObjetos.map((amigo) => {
  return { ...amigo, name: amigo.name.toUpperCase() };
});

console.log("\nMETODO MAP\n")
console.log("array original")
console.log(amigosObjetos);

console.log("\n Transformar un array de objetos a mayúsculas");
console.log(amigosMayusculasObjetos);

//Si queremos transformar un objeto de personas en un array de nombres, podemos usar el método map
const personas = [
  { name:'Susan', age: 14, job: 'student' },
  { name:'Ryan', age: 18, job: 'developer' },
  { name:'Javier', age: 20, job: 'teacher' },
  { name:'Oliver', age: 12, job: 'student' },
  { name:'Enzo', age: 16, job: 'developer' },
];

console.log("\nobjeto original de personas")
console.log(personas);

//Si queremos transformar el objeto personas en un array de nombres
const personasArray = personas.map((persona) => persona.name);

console.log("\n Transformar un array de objetos a array");
console.log(personasArray);

//Si queremos transformar el objeto personas en un array de nombres y edades
const personasVivenCiudad = personas.map((persona) => {
  return {...persona, viveEn: 'Madrid' };
});

console.log("\n Transformar un array de objetos a otro objeto");
console.log(personasVivenCiudad);

