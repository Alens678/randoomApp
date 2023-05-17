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


// Bucle para generar las imágenes del carrousel
function printCarousel() {
for (let i = 0; i < clothes.length; i++) {
  for (let j = 0; j < clothes[i].length; j++) {
    const divCard = document.createElement("div");
    divCard.classList.add("slide-track");
    const img = document.createElement("img");

    img.src = clothes[i][j].src;
    img.alt = clothes[i][j].alt;
    img.classList.add("slide");

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
}

//Evento para imprimir el carousel una vez halla cargado la pagina.
window.addEventListener('load',function(){
  printCarousel();
});

//Función que genera el outfit randomized y agregar los objetos al arrar randomClothes[] 

const randomImg = () => {
  for (let i = 0; i < clothes.length; i++) {
    const divCabeza = document.getElementById("select-cabeza");
    const divPecho = document.getElementById("select-pecho");
    const divPiernas = document.getElementById("select-piernas");
    const divPies = document.getElementById("select-pies");

    let imgRan = clothes[i][Math.floor(Math.random() * clothes[i].length)];
    const divCard = document.createElement("div");
    const img = document.createElement("img");

    console.log(imgRan);

    img.src = imgRan.src;
    img.alt = imgRan.alt;

    divCard.appendChild(img);

    randomClothes.push(imgRan);

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
  // Mostar imagen random llamando 
  if (!exist) {
    randomImg();
  } else {
    alert("Refresca la pagina y juega de nuevo");
  }
  
};
// Evento click en el boton start
btnStart.addEventListener("click", selectRandom);
