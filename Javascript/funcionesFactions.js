const links = document.querySelectorAll(".menu li > a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        const submenu = link.nextElementSibling;

        if (submenu && submenu.classList.contains("submenu")) {
            e.preventDefault();

            submenu.classList.toggle("open");
        }
    })
})

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
})