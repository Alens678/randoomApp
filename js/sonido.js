
const boton = document.getElementById("miBoton");
boton.addEventListener("click", reproducirSonido);



function reproducirSonido() {
  const audio = new Audio('assets/sound/wow-113128.mp3');
  audio.play();

  boton.classList.add("clicked");

  setTimeout(function() {
    boton.classList.remove("clicked");
  }, 200); 
}


const boton2 = document.getElementById("miBoton2");
boton2.addEventListener("click", reproducirSonido2);



function reproducirSonido2() {
  const audio = new Audio('assets/sound/bu.mp3');
  audio.play();

  boton2.classList.add("clicked");

  setTimeout(function() {
    boton2.classList.remove("clicked");
  }, 200); 
}