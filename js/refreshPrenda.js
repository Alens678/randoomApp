const refreshCabeza = document.querySelector(".refresh-cabeza");
const refreshPecho = document.querySelector(".refresh-pecho");
const refreshPiernas = document.querySelector(".refresh-piernas");
const refreshPies = document.querySelector(".refresh-pies");

const refreshingCabeza = ()=>{
    let divCabeza =  document.getElementById("select-cabeza");
    
    let imgRan = clothes[0][Math.floor(Math.random() * clothes[0].length)];
   
    const img = document.createElement("img");

    img.src = imgRan.src;
    img.alt = imgRan.alt;

    divCabeza.innerHTML = '';
    divCabeza.appendChild(img);
    
}

refreshCabeza.addEventListener("click", function (){refreshingCabeza()});

const refreshingPecho = ()=>{
    let divPecho =  document.getElementById("select-pecho");
    
    let imgRan = clothes[1][Math.floor(Math.random() * clothes[1].length)];
   
    const img = document.createElement("img");

    img.src = imgRan.src;
    img.alt = imgRan.alt;

    divPecho.innerHTML = '';
    divPecho.appendChild(img);
    
}

refreshPecho.addEventListener("click", function (){refreshingPecho()});

const refreshingPiernas = ()=>{
    let divPiernas =  document.getElementById("select-piernas");
    
    let imgRan = clothes[2][Math.floor(Math.random() * clothes[2].length)];
   
    const img = document.createElement("img");

    img.src = imgRan.src;
    img.alt = imgRan.alt;

    divPiernas.innerHTML = '';
    divPiernas.appendChild(img);
    
}

refreshPiernas.addEventListener("click", function (){refreshingPiernas()});

const refreshingPies = ()=>{
    let divPies =  document.getElementById("select-pies");
    
    let imgRan = clothes[3][Math.floor(Math.random() * clothes[3].length)];
   
    const img = document.createElement("img");

    img.src = imgRan.src;
    img.alt = imgRan.alt;

    divPies.innerHTML = '';
    divPies.appendChild(img);
    
}

refreshPies.addEventListener("click", function (){refreshingPies()});