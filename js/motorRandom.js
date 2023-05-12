// Seleccionar los diferentes articles del DOM
const carrousel = document.getElementsByClassName("carrousel")
const cardCabeza = document.getElementById("card-cabeza");
const cardPecho = document.getElementById("card-pecho");
const cardPiernas = document.getElementById("card-piernas");
const cardPies = document.getElementById("card-pies");
// Crear array vacio para introducir los indices del array principal de forma aleatoria

// Declarar un array vaciio donde se guardarán los indices del array original desordenados
const randomClothes = [];

// Recorrer array original
for (let i = 0; i < clothes.length; i++) {
  let randomClothe = Math.floor(Math.random() * clothes.length);

  while (randomClothes.includes(randomClothe)) {
    randomClothe = Math.floor(Math.random() * clothes.length);
  }
  randomClothes.push(randomClothe);
}

// Bucle para generar imagenes
for (let i = 0; i < clothes.length; i++) {
   const divCard = document.createElement("div");
  // Crear elemento img
  const img = document.createElement("img");
  // Añadir los atributos a las imagenes
  img.src = clothes[i].src;
  img.alt = clothes[i].alt;

  // Agregar la imagen al div
  divCard.appendChild(img);

  // Agregar el div al artículo
  cardCabeza.appendChild(divCard);
}

// Funcion para mostar imagen aleatoria y desaparecer carrousel
const selectRandom = () => {
  
  // Desaparecer carrousel divCard añadir clase .hidden
for (let i = 0; i < carrousel.length; i++) {
  carrousel[i].classList.add("hidden");
}
  // Mostar imagen random
  
};
// Evento click
const btnStart = document.addEventListener("click", selectRandom);
