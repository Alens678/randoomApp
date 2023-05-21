// Seleccionar elementos del DOM
const btnAddCabeza = document.querySelector(".add .cabeza");
const btnAddPecho = document.querySelector(".add .pecho");
const btnAddPiernas = document.querySelector(".add .piernas");
const btnAddPies = document.querySelector(".add .pies");

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
const addImageFunction = (event) => {
  event.preventDefault();

  // Obtener la imagen seleccionada en el input file
  const file = imageInput.files[0];
  console.log(file);

  // Validar si se seleccionó una imagen
  if (file && file.type.includes("image")) {
    // Crear un objeto FileReader para leer el archivo
    const reader = new FileReader();

    // Configurar evento de carga del FileReader
    reader.onload = function (event) {
      // Obtener el resultado de la lectura del archivo (URL base64)
      // console.log(event);
      const imageDataUrl = event.target.result;

      // Guardar la imagen en el localStorage
      localStorage.setItem("imageDataUrl", imageDataUrl);

      const images = [];
      images.push(imageDataUrl);
      console.log(images);

      // Mostrar la imagen en el div de vista previa
      const image = document.createElement("img");

      image.src = imageDataUrl;
      image.alt = "Preview Image";
      image.width = "100"; //tamño con el que se mostrará en la web
      //   preview.innerHTML = "";
      //   preview.appendChild(image);

      divCabeza.innerHTML = "";
      divCabeza.appendChild(image);
    };

    // Leer el archivo como URL base64
    reader.readAsDataURL(file);
    cancelF();
  }
};
// Agregar evento submit al formulario
form.addEventListener("submit", addImageFunction);

// Evento al pulsar boton
btnAddCabeza.addEventListener("click", addImageFunction);
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
const mostrarF = () => {
  modalOverlay.style.display = "block";
  modal.style.display = "block";
};

const cancelF = () => {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
};

btnAddCabeza.addEventListener("click", mostrarF);

cancelBtn.addEventListener("click", cancelF);
