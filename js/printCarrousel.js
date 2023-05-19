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
window.addEventListener("load", function () {
  printCarousel();
});
