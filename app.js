
// Debe existir solo un elemento con el id
// indicado página web
const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(titulo.innerText);
console.log(titulo.tagName);


// Acceder a todos los elementos que contengan la misma clase
// Retorna colecion HTML
const toppings = document.getElementsByClassName('topping');
console.log(toppings[2].id);


// Búsqueda general por nombre de etiqueta
const misToppings = document.getElementsByTagName('li');
console.log(misToppings);


// Solo seleccionar los que tienen una clase especifica
const misToppings2 = document.getElementsByClassName('fondo-naranja');
console.log(misToppings2);


// Seleccionar
const aceituna = document.querySelector('.toppings');
console.log(aceituna);

const element1 = document.querySelector('.topping.fondo-naranja');
console.log(element1);

const element2 = document.querySelector('ul li.fondo-naranja');
console.log(element2);


// Descarta los que tengan fondo-marron
const element3 = document.querySelector('ul li:not(.fondo-marron)');
console.log(element3);

// Obtener todos los elementos
const toppingNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingNaranja);



/*
    ASIGNAR ESTILOS CON JS
*/

const primerToppingEstilo = document.querySelector('.topping');
primerToppingEstilo.style.backgroundColor = 'blue';
primerToppingEstilo.style.color = '#6dff00';
primerToppingEstilo.style.textTransform = 'uppercase';
console.log(primerToppingEstilo.style);




const listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings);
console.log(listaDeToppings.innerText);
console.log(listaDeToppings.textContent);
console.log(listaDeToppings.innerHTML);


/*
    Modificar Textos
*/
const titulo1 = document.getElementById('titulo');
titulo1.innerText = 'Mis Topings Fav';


/* Modificar Atributos */

const enlaces = document.getElementsByTagName('a');
console.log(enlaces[0].getAttribute('href'));

console.log(enlaces[0].setAttribute('href', 'https://alicruz.dev'));

console.log(enlaces[0].removeAttribute('href'));




/* Agregar Modificar CLASES */
const primerToppingA = document.querySelector('.topping');
console.log(primerToppingA.classList);


/* AGREGAR Clase */
primerToppingA.classList.add('clase-agregada');
console.log(primerToppingA.classList);

/*  Validar si contiene la clase señalada
 */

console.log(primerToppingA.classList.contains('fondo-marron'));


// Eliminar clase de un elemento

primerToppingA.classList.remove('fondo-marron');



