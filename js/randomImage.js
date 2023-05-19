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

const randomImg = () => {
  for (let i = 0; i < clothes.length; i++) {
    const divCabeza = document.getElementById("select-cabeza");
    const divPecho = document.getElementById("select-pecho");
    const divPiernas = document.getElementById("select-piernas");
    const divPies = document.getElementById("select-pies");

    let imgRan = clothes[i][Math.floor(Math.random() * clothes[i].length)];
    const divCard = document.createElement("div");
    const img = document.createElement("img");

    console.log(imgRan);

    img.src = imgRan.src;
    img.alt = imgRan.alt;

    divCard.appendChild(img);

    randomClothes.push(imgRan);

    if (i === 0) {
      divCabeza.appendChild(divCard);
    } else if (i === 1) {
      divPecho.appendChild(divCard);
    } else if (i === 2) {
      divPiernas.appendChild(divCard);
    } else if (i === 3) {
      divPies.appendChild(divCard);
    }
  }
  exist = true;
};
