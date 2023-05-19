// Seleccionar elementos del DOM
const btnAddCabeza = document.querySelector(".add .cabeza");
const btnAddPecho = document.querySelector(".add .pecho");
const btnAddPiernas = document.querySelector(".add .piernas");
const btnAddPies = document.querySelector(".add .pies");

// Seleccion DOM Modal
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const cancelBtn = document.getElementById("cancel-btn");

// Funcion para guardar imagen en localstorage y luego que se muestre en el html

// Evento al pulsar boton
btnAddCabeza.addEventListener("click", (e) => {
  console.log("cabeza");
});
btnAddPecho.addEventListener("click", (e) => {
  console.log("pecho");
});
btnAddPiernas.addEventListener("click", (e) => {
  console.log("piernas");
});
btnAddPies.addEventListener("click", (e) => {
  console.log("pies");
});

// Eventos Modal
btnAddCabeza.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modal.style.display = "block";
});
cancelBtn.addEventListener("click", function () {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
});
