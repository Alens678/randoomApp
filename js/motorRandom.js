// Seleccionamosel Article con el id #card-cabeza
const cardCabeza = document.getElementById("card-cabeza");
// Crear elemento div
const divCard = document.createElement("div");
// Crear elemento img
const img = document.createElement("img");
// Añadir los atributos a las imagenes
img.src = clothes[3].src;
img.alt = clothes[3].alt;

// Agregar la imagen al div
divCard.appendChild(img);

// Agregar el div al artículo
cardCabeza.appendChild(divCard);

// Crear array vacio para introducir los indices del array principal de forma aleatoria
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
for (let i = 0; i < randomClothes.length; i++) {
  const divCard = document.createElement("div");
  // Crear elemento img
  const img = document.createElement("img");
  // Añadir los atributos a las imagenes
  img.src = clothes[i].src;
  img.alt = clothes[i].alt;ves

  // Agregar la imagen al div
  divCard.appendChild(img);

  // Agregar el div al artículo
  cardCabeza.appendChild(divCard);
}
