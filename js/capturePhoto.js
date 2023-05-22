// Obtener el elemento del botón "FOTO" del DOM
const fotoBtn = document.querySelector("#foto");
const modalOverlay2 = document.getElementById("modal-overlay2");
const modalCam = document.querySelector("#modal-cam");
const cancelBtn2 = document.getElementById("cancel-btn2");

// Función para mostrar el modal de captura de foto
function mostrarModalFoto() {
  modalOverlay2.style.display = "block";
  modalCam.style.display = "block";
}

const cancelModalFoto = () => {
  modalOverlay2.style.display = "none";
  modalCam.style.display = "none";

  // Detener la reproducción de la cámara y apagarla
  const stream = videoElement.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach(function (track) {
    track.stop();
  });
  videoElement.srcObject = null;
};

// Asignar evento de clic al botón "FOTO"
fotoBtn.addEventListener("click", mostrarModalFoto);
cancelBtn2.addEventListener("click", cancelModalFoto);
