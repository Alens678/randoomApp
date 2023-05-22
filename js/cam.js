// Obtener los elementos del DOM
const openCameraBtn = document.getElementById("open-camera-btn");
const captureBtn = document.getElementById("capture-btn");
const videoElement = document.getElementById("video");
const canvasElement = document.getElementById("canvas");
const context = canvasElement.getContext("2d");
const modalCam = document.querySelector("#modal-cam");

// Función para abrir la cámara
function openCamera() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      videoElement.srcObject = stream;

      const modalWidth = modalCam.offsetWidth;
      const modalHeight = modalCam.offsetHeight;

      videoElement.addEventListener("loadedmetadata", function () {
        videoElement.width = modalWidth;
        videoElement.height = modalHeight;
        videoElement.play();
      });
    })
    .catch(function (error) {
      console.log("Error al acceder a la cámara: ", error);
    });
}

// Función para capturar la foto
function capturePhoto() {
  // Obtener el ancho y alto del elemento de video
  const videoWidth = videoElement.offsetWidth;
  const videoHeight = videoElement.offsetHeight;

  // Establecer el ancho y alto del elemento canvas
  canvasElement.width = videoWidth;
  canvasElement.height = videoHeight;

  // Dibujar el marco actual del video en el canvas
  context.drawImage(videoElement, 0, 0, videoWidth, videoHeight);

  // Obtener la imagen capturada en formato base64
  const imageDataUrl = canvasElement.toDataURL("image/png");

  // Descargar la imagen en el navegador (opcional)
  const link = document.createElement("a");
  link.href = imageDataUrl;
  link.download = "captura.png";
  link.click();
}

// Agregar eventos de clic a los botones
openCameraBtn.addEventListener("click", openCamera);
captureBtn.addEventListener("click", capturePhoto);

modalCam.addEventListener("transitionend", function () {
  openCamera;
});
