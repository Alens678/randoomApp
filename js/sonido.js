
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


const boton2 = document.getElementById("miBoton2");
boton2.addEventListener("click", reproducirSonido2);



function reproducirSonido2() {
  var audio = new Audio('bu.mp3');
  audio.play();

  boton2.classList.add("clicked");

  setTimeout(function() {
    boton2.classList.remove("clicked");
  }, 200); // Restablecer la clase después de 200 milisegundos (ajusta el tiempo según tus necesidades)
}