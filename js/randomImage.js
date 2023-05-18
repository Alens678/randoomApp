window.addEventListener("load", function () {
  randomImg();
});
const selectRandom = () => {
  
   btnStart.classList.add("hidden");
  
  // Mostar imagen random llamando
  if (!exist) {
    randomImg();
  } else {
    alert("Refresca la pagina y juega de nuevo");
  }
};
