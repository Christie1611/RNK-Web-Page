import { loadEditReenForm } from "./editReenForm.js";
import { showDeleteReenModal } from "./modal.js";

const userReen = window.userReen;
const content = document.getElementById("mainContent");

export function reenProfileHandler() {
    const cards = document.querySelectorAll(".reenCard");

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.stopPropagation();

            removeExistingMenus();
            const id = card.dataset.id;
            const reen = userReen.find(r => r.idreencarnado == id);

            if (!reen) return;
            const menu = document.createElement("div");
            menu.classList.add("reenMenu");
            menu.innerHTML = `
                <ul class="reenMenuList">
                    <h2 class="reenMenuTitle">${reen.nombre}</h2>
                    <li class="menuView">Ver Perfil</li>
                    <li class="menuEdit">Modificar</li>
                    <li class="menuDelete">Eliminar</li>
                </ul>
            `;

            document.body.appendChild(menu);
            const clickX = e.pageX;
            const clickY = e.pageY;

            menu.style.visibility = "hidden";
            menu.style.display = "block";

            const menuHeight = menu.offsetHeight;

            const spaceBelow = window.innerHeight - e.clientY;

            if (spaceBelow < menuHeight) {
                menu.style.top = (clickY - menuHeight) + "px";
            } else {
                menu.style.top = clickY + "px";
            }

            menu.style.left = clickX + "px";
            menu.style.visibility = "visible";

            menu.querySelector(".menuView").addEventListener("click", () => {
                localStorage.setItem("reenProfileOrigin", "profile");
                localStorage.setItem("currentSection", "reenProfile");
                localStorage.setItem("currentReenProfile", id);

                loadReenProfile(id, {
                    source: userReen,
                    showAuthor: false
                });

                menu.remove();
            });

            menu.querySelector(".menuEdit")
                .addEventListener("click", () => {
                    loadEditReenForm(reen);
                    menu.remove();
                });

            menu.querySelector(".menuDelete")
                .addEventListener("click", () => {
                    showDeleteReenModal(reen.idreencarnado);
                    menu.remove();
                });
        });
    });
    document.addEventListener("click", removeExistingMenus);
}

function removeExistingMenus() {
    document.querySelectorAll(".reenMenu")
        .forEach(menu => menu.remove());
}

export function goBack() {
    const origin = localStorage.getItem("reenProfileOrigin") || "profile";

    localStorage.setItem("currentSection", origin);
    localStorage.removeItem("currentReenProfile");
    localStorage.removeItem("reenProfileOrigin");
    location.reload();
}

export function loadReenProfile(reenId, options = {}) {
    const {source = userReen, showAuthor = false} = options;
    let currentIndex = source.findIndex(r => r.idreencarnado == reenId);

    if (currentIndex === -1) return;
    renderReenProfile(source[currentIndex], options);
    attachSliderEvents();

    function attachSliderEvents() {
        const prevBtn = document.getElementById("prevReen");
        const nextBtn = document.getElementById("nextReen");

        nextBtn.addEventListener("click", () => {
            const newIndex = (currentIndex + 1) % source.length;
            animateReenChange(newIndex);
        });

        prevBtn.addEventListener("click", () => {
            const newIndex = (currentIndex - 1 + source.length) % source.length;
            animateReenChange(newIndex);
        });
    }

    function animateReenChange(newIndex) {
        const image = document.querySelector(".reenProfileImage");
        const contentBox = document.querySelector(".reenContent");
        const mainInfo = document.querySelector(".reenMainInfo");

        image.classList.add("imgTrans");
        contentBox.classList.add("textTrans");
        mainInfo.classList.add("textTrans");

        setTimeout(() => {
            currentIndex = newIndex;
            renderReenProfile(source[currentIndex], options);
            attachSliderEvents();

            const newImage = document.querySelector(".reenProfileImage");
            const newContent = document.querySelector(".reenContent");
            const mainInfo = document.querySelector(".reenMainInfo");

            newImage.classList.add("imgIn");
            newContent.classList.add("textOut");
            mainInfo.classList.add("textOut");

            setTimeout(() => {
                newImage.classList.remove("imgIn");
                newContent.classList.remove("textOut")
                mainInfo.classList.remove("textOut");;
            }, 300);

        }, 300);
    }
}

function renderReenProfile(reen, options = {}) {
    let talentosHTML = "";
    const {showAuthor = false} = options;

    const reenImage = (reen.diseno && reen.diseno !== null) ? `../reen/${reen.diseno}` : "../uploads/defaultImage.png";

    if (reen.talentos && reen.talentos.length > 0) {
        reen.talentos.forEach(talento => {
            talentosHTML += `
                <div class="talentCard">
                    <h3>${talento.talento}</h3>
                    ${talento.descripcion ? `<p>${talento.descripcion}</p>` : ""}
                </div>
            `;
        });
    }

    content.innerHTML = `
        <div class="reenProfile">
            <div class="reenBanner"></div>
            <div class="reenTop">
                <div class="reenImageContainer">
                    <img class="reenProfileImage" src="${reenImage}">
                </div>

                <div class="reenMainInfo">
                    <h1 class="reenProfileName">
                        ${reen.nombre}
                    </h1>

                    <div class="factionBadge faction-${reen.idfaccion}">
                        ${getFactionName(reen.idfaccion)}
                    </div>

                    ${showAuthor ? ` <p class="reenCreator">Creado por ${reen.usuario}</p>` : ""}
                </div>
            </div>

            <div class="reenContent">
                <div class="reenLoreCard">
                    <h2>Trasfondo</h2>
                    <p>
                        ${reen.trasfondo || "Sin trasfondo"}
                    </p>
                </div>

                <div class="reenTalentsSection">
                    <h2>Talentos</h2>
                    <div class="talentsList">
                        ${talentosHTML}
                    </div>
                </div>
            </div>
        <button class="goBack" id="goBackBtn">X</button>
        <button class="sliderBtn sliderLeft prev" id="prevReen">&#10094;</button>
        <button class="sliderBtn sliderRight next" id="nextReen">&#10095;</button>
        </div>
    `;

    document.getElementById("goBackBtn").addEventListener("click", goBack);
}

// Recordé cómo se hacía esto :D
const factions = {
    1: "Forest",
    2: "Sinners",
    3: "Strays",
    4: "Others"
};

function getFactionName(id) {
    return factions[Number(id)] || "Desconocida";
}