/*
Los callbacks son la pieza clave para que Javascript pueda funcionar de forma asíncrona. 
De hecho, el resto de patrones asíncronos en Javascript está basado en callbacks de un modo u otro, simplemente añaden azúcar sintáctico para trabajar con ellos más cómodamente.
Un callback no es más que una función que se pasa como argumento de otra función,
y que será invocada para completar algún tipo de acción. 

En nuestro contexto asíncrono, un callback representa el 
'¿Qué quieres hacer una vez que tu operación asíncrona termine?'. 
Por tanto, es el trozo de código que será ejecutado una vez que una operación asíncrona notifique que ha terminado. 
Esta ejecución se hará en algún momento futuro, gracias al mecanismo que implementa el bucle de eventos.

Fíjate en el siguiente ejemplo sencillo utilizando un callback: 
*/

/*
const llamameAlTerminar = () => console.log("Hola Mundo con retraso!");

console.log("antes de la función setTimeout");
setTimeout(llamameAlTerminar, 1000)

console.log("despues de la función setTimeout");
*/

/* INFIERNO DE LOS CALLBACKS */

/*
setTimeout(function(){
    console.log("Etapa 1 completada");
    setTimeout(function(){
      console.log("Etapa 2 completada");
      setTimeout(function(){
        console.log("Etapa 3 completada");
        setTimeout(function(){
          console.log("Etapa 4 completada");
          // Podríamos continuar hasta el infinito...
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
  */

//Éste es uno de los inconvenientes clásicos de los callbacks, además de la indentación, resta legibilidad, dificulta su mantenimiento y añade complejidad ciclomática. 
//Al Callback Hell también se le conoce como Pyramid of Doom o Hadouken.

/*
const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

const findPostById = (id, callback) => {
    setTimeout(() => {
        const post = posts.filer((item) => item.id === id);
        callback(post);
    }, 1000);
};

console.log("Antes de llamar a obtener los Post")
findPostById(1, (post) => {
    console.log(post);
});
console.log("Después de llamar a obtener los Post")
*/