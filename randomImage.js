window.addEventListener("load", function () {
  randomImg();
});
const selectRandom = () => {
  // Desaparecer carrousel divCard añadir clase .hidden
  // for (let i = 0; i < carrousel.length; i++) {
  //   carrousel[i].classList.add("hidden");
  //   btnStart.classList.add("hidden");
  // }
  // Mostar imagen random llamando
  if (!exist) {
    randomImg();
  } else {
    alert("Refresca la pagina y juega de nuevo");
  }
};
