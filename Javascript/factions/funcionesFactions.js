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
export function characterSlider (characters) {
    let index = 0;
    function updateCharacter() {
        document.getElementById("characterName").innerHTML = characters[index].name;
        document.getElementById("characterImg").src = characters[index].img ;
        document.getElementById("characterDesc").innerHTML = characters[index].desc;
        document.getElementById("characterDescT").innerHTML = characters[index].talent;
    }

    function animationCharacter(newIndex, direction) { // ANIMACIÓN (plis funciona)
        const imgMember = document.getElementById("characterImg");
        const textParts = document.querySelectorAll(".textPart");

        imgMember.classList.add(direction === "next" ? "imgLeft" : "imgRight");
        textParts.forEach(e => e.classList.add(direction === "next" ? "textLeft" : "textRight"));

        setTimeout(() => {
            index = newIndex;
            updateCharacter();

            imgMember.classList.remove("imgLeft", "imgRight");
            imgMember.classList.add("imgIn");

            textParts.forEach(e => { 
                e.classList.remove("textLeft", "textRight");
                e.classList.add("textOut");
            });

            setTimeout(() => {
                imgMember.classList.remove("imgIn");
                textParts.forEach(e => e.classList.remove("textOut"));
            }, 50);
        }, 400);
    }

    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    next.addEventListener("click", () => {
        const newIndex = (index + 1) % characters.length;
        animationCharacter(newIndex, "next");
    });

    prev.addEventListener("click", () => {
        const newIndex = (index - 1 + characters.length) % characters.length;
        animationCharacter(newIndex, "prev");
    });
}