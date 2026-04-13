import { characters } from "./personajesFactions.js"

// PARTE DESPLEGABLE DEL MENÚ
const links = document.querySelectorAll(".menu li > a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        const submenu = link.nextElementSibling;

        if (submenu && submenu.classList.contains("submenu")) {
            e.preventDefault();

            submenu.classList.toggle("open");
        }
    })
});

// LEER MÁS
const readM = document.querySelector(".readMore");
const moreT = document.querySelector(".moreText");

readM.addEventListener("click", (e) => {
    e.preventDefault();

    if (moreT.style.maxHeight) {
        moreT.style.maxHeight = null;
        readM.textContent = "Leer Más (SPOILERS)";
    } else {
        moreT.style.maxHeight = moreT.scrollHeight + "px";
        readM.textContent = "Leer Menos";
    }
});

// PERSONAJES DE LAS FACCIONES
let index = 0;
function updateCharacter() {
    document.getElementById("characterName").textContent = characters[index].name;
    document.getElementById("characterImg").src = characters[index].img ;
    document.getElementById("characterDesc").textContent = characters[index].desc;
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
    index = (index + 1) % characters.length;
    updateCharacter();
});

prev.addEventListener("click", () => {
    index = (index - 1 + characters.length) % characters.length;
    updateCharacter();
});