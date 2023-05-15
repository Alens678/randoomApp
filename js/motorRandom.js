// Seleccionar los diferentes articles del DOM
const carrousel = document.getElementsByClassName("carrousel");
const cardCabeza = document.getElementById("card-cabeza");
const cardPecho = document.getElementById("card-pecho");
const cardPiernas = document.getElementById("card-piernas");
const cardPies = document.getElementById("card-pies");
// Crear array vacio para introducir los indices del array principal de forma aleatoria

// Declarar un array vaciio donde se guardarán los indices del array original desordenados
const randomClothes = [];

// Bucle para generar las imágenes y agregit checkou
for (let i = 0; i < clothes.length; i++) {
  for (let j = 0; j < clothes[i].length; j++) {
    const divCard = document.createElement("div");
    const img = document.createElement("img");

    img.src = clothes[i][j].src;
    img.alt = clothes[i][j].alt;

    divCard.appendChild(img);

    if (i === 0) {
      cardCabeza.appendChild(divCard);
    } else if (i === 1) {
      cardPecho.appendChild(divCard);
    } else if (i === 2) {
      cardPiernas.appendChild(divCard);
    } else if (i === 3) {
      cardPies.appendChild(divCard);
    }
  }
}
// Recorrer array original
/*for (let i = 0; i < clothes.length; i++) {
  let randomClothe = Math.floor(Math.random() * clothes.length);

  while (randomClothes.includes(randomClothe)) {
    randomClothe = Math.floor(Math.random() * clothes.length);
  }
  randomClothes.push(randomClothe);
}*/

//Funcion generar imagen random
let exist = false;

const randomImg = () => {
  for (let i = 0; i <clothes.length; i++) {
    const divCabeza = document.getElementById("select-cabeza");
    const divPecho = document.getElementById("select-pecho");
    const divPiernas = document.getElementById("select-piernas");
    const divPies = document.getElementById("select-pies");
    
    let imgRan = clothes[i][Math.floor(Math.random() *clothes[i].length)]
    const divCard = document.createElement("div");
    const img = document.createElement("img");

    console.log(imgRan);

    img.src=imgRan.src;
    img.alt=imgRan.alt;

    divCard.appendChild(img);

    if (i === 0) {
      divCabeza.appendChild(divCard);
    } else if (i === 1) {
      divPecho.appendChild(divCard);
    } else if (i === 2) {
      divPiernas.appendChild(divCard);
    } else if (i === 3) {
      divPies.appendChild(divCard);
    }
  }
  exist = true;
};

// Funcion para mostar imagen aleatoria y desaparecer carrousel
const selectRandom = () => {
  // Desaparecer carrousel divCard añadir clase .hidden
  for (let i = 0; i < carrousel.length; i++) {
    carrousel[i].classList.add("hidden");
  }
  // Mostar imagen random
  if (!exist) {
    randomImg();
  } else {
    alert("mensaje");
  }
};
// Evento click
const btnStart = document.addEventListener("click", selectRandom);
