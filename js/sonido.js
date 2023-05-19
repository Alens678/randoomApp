
const boton = document.getElementById("miBoton");
boton.addEventListener("click", reproducirSonido);



function reproducirSonido() {
  var audio = new Audio('wow-113128.mp3');
  audio.play();

  boton.classList.add("clicked");

  setTimeout(function() {
    boton.classList.remove("clicked");
  }, 200); // Restablecer la clase después de 200 milisegundos (ajusta el tiempo según tus necesidades)
}