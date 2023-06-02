

var body = document.getElementsByTagName('body')[0];
var output = document.getElementById('output');
var keydel = document.getElementById('keyDel');

var btnLetters = Array.from(document.getElementsByClassName('letter'));
var btnNumbers = Array.from(document.getElementsByClassName('number'));

var btn = document.querySelectorAll('.letter, .number');

btnLetters = [...btnLetters, ...btnNumbers];

// const body = document.getElementsByTagName('body')[0]
// const output = document.getElementById('output');


// //body.addEventListener('keydown', handleKeyDown);

// body.addEventListener('keyup', handleKeyUp);

// function handleKeyUp(event) {
//     //Eliminar selector/clase al elemento divkey específico
//     // const divkey = document.querySelector(`div[data-key="${event.keyCode}"]`);
//     // divkey.classList.remove('playing');
//     output.innerHTML += event.key;
//     console.log(event);
// }

const btnFunctions = ['backspace', 'tab', 'enter', 'shift', 'ctrl', 'alt', 'capslock', 'space', 'left', 'up', 'down', 'right'];


body.addEventListener('keydown', (event) => {

    if (btnFunctions.includes(event.key.toLowerCase())) {
        //Funcionalides de teclas especiales

        if (event.key === 'Backspace') {
            console.log('backspace')
            let str = output.innerText;
            output.innerText = str.slice(0, -1);
            return;
        }

        return
    }

    //console.log(event)
    output.innerText += event.key;

    let keyFiltered = btnLetters.filter((a) => a.innerText == event.key.toUpperCase())

    if (keyFiltered.length > 0) {
        keyFiltered[0].classList.add('pressing');
        setTimeout(() => {
            keyFiltered[0].classList.remove('pressing');
        }, 100);
    }
})

// const handleKeyDown = (event) => {
//     console.log(event)
// }

// btnLetters[0].addEventListener('keydown', handleKeyDown);
// btnLetters[0].addEventListener('keydown', (event) => {
//     console.log(event)
// });


