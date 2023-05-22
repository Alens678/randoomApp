// Seleccionar los diferentes articles del DOM
const carrousel = document.getElementsByClassName("carrousel");
const cardCabeza = document.getElementById("card-cabeza");
const cardPecho = document.getElementById("card-pecho");
const cardPiernas = document.getElementById("card-piernas");
const cardPies = document.getElementById("card-pies");
const btnStart = document.getElementById("start");
// Declarar un array vacio donde se guardarán los objetos seleccionados del array clothes
const randomClothes = [];
//Variable que me permite evaluar si existe un random outfit generado por randomImg para ocultar el carousel en selectRandom()
let exist = false;
