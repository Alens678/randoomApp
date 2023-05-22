// Seleccionar elementos del DOM
const btnAddCabeza = document.querySelector(".add .cabeza");
const btnAddPecho = document.querySelector(".add .pecho");
const btnAddPiernas = document.querySelector(".add .piernas");
const btnAddPies = document.querySelector(".add .pies");

//Variable

let divImagen;

// Seleccion DOM Modal
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const cancelBtn = document.getElementById("cancel-btn");

// Seleccionar elementos Form
// Obtener elementos del DOM
const form = document.getElementById("image-form");
const addImage = form.querySelector(".add-image");
const imageInput = document.getElementById("image-input");
const preview = document.getElementById("preview");

// Seleccionar donde pintar imagenes
const divCabeza = document.getElementById("select-cabeza");
const divPecho = document.getElementById("select-pecho");
const divPiernas = document.getElementById("select-piernas");
const divPies = document.getElementById("select-pies");

// Funcion para guardar imagen en localstorage y luego que se muestre en el html
// Funcion para guardar imagen en el array y luego mostrarla en el HTML
const addImageCabeza = (event) => {
  event.preventDefault();

  // Obtener la imagen seleccionada en el input file
  const file = imageInput.files[0];
  console.log(file.type);

  // Validar si se seleccionó una imagen
  if (file && file.type.includes("image")) {
    // Crear un objeto FileReader para leer el archivo
    const reader = new FileReader();

    // Configurar evento de carga del FileReader
    reader.onload = function (event) {
      // Obtener el resultado de la lectura del archivo (URL base64)
      const imageDataUrl = event.target.result;

      // Mostrar la imagen en el div de vista previa
      const image = document.createElement("img");
      image.src = imageDataUrl;
      image.alt = "Preview Image";
      image.width = "100"; // Tamaño con el que se mostrará en la web
      divImagen.innerHTML = "";
      divImagen.appendChild(image);

      // Guardar la imagen en el array
      newImage(image);
    };

    // Leer el archivo como URL base64
    reader.readAsDataURL(file);
    cancelF();
  }
};

// Funncion para guardar la imagen en el array de objetos
const newImage = (image) => {
  let newImg = new Object();
  newImg.src = image.src;
  newImg.alt = "";

  const newArray = JSON.parse(localStorage.getItem("clothes"));
  // Condicion para guardar en diferentes posicions del array
  if (clase === "cabeza") {
    newImg.clase = "cabeza";
    newArray[0].unshift(newImg);
  } else if (clase === "pecho") {
    newImg.clase = "pecho";
    newArray[1].unshift(newImg);
  } else if (clase === "piernas") {
    newImg.clase = "piernas";
    newArray[2].unshift(newImg);
  } else if (clase === "pies") {
    newImg.clase = "pies";
    newArray[3].unshift(newImg);
  }

  localStorage.setItem("clothes", JSON.stringify(newArray));
  console.log(newArray);
};

// Agregar evento submit al formulario
form.addEventListener("submit", addImageCabeza);

//Funciones para guardar variable de la imagen a modificar
let clase = "";
function mostrarCabeza() {
  divImagen = divCabeza;
  clase = "cabeza";
}

function mostrarPecho() {
  divImagen = divPecho;
  clase = "pecho";
}

function mostrarPiernas() {
  divImagen = divPiernas;
  clase = "piernas";
}

function mostrarPies() {
  divImagen = divPies;
  clase = "pies";
}

// Eventos Modal
const mostrarF = () => {
  modalOverlay.style.display = "block";
  modal.style.display = "block";
};

const cancelF = () => {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
};

btnAddCabeza.addEventListener("click", mostrarF);
btnAddCabeza.addEventListener("click", mostrarCabeza);
btnAddPecho.addEventListener("click", mostrarF);
btnAddPecho.addEventListener("click", mostrarPecho);
btnAddPiernas.addEventListener("click", mostrarF);
btnAddPiernas.addEventListener("click", mostrarPiernas);
btnAddPies.addEventListener("click", mostrarF);
btnAddPies.addEventListener("click", mostrarPies);

cancelBtn.addEventListener("click", cancelF);
