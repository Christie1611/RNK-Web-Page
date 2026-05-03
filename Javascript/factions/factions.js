import { characterSlider } from "./funcionesFactions.js";
import { factionsData } from "./factionData.js";

const content = document.getElementById("factionContent");
const params = new URLSearchParams(window.location.search);
const section = params.get("section") || localStorage.getItem("currentFaction") || "forest";

loadFaction(section);

export function loadFaction(section) {
    const faction = factionsData[section];
    if (!faction) return;

    localStorage.setItem("currentFaction", section);
    history.replaceState(null, "", `?section=${section}`);
    setActiveFaction(section);
    renderFaction(faction);
    initializeFactionEvents(faction);
}

function renderFaction(faction) {
    const firstCharacter = faction.members[0];
    content.innerHTML = `
        <h1 class="factionTitle">${faction.title}</h1>

        <div class="divFaction">
            ${faction.description}

            <div class="moreText">
                ${faction.spoilers}
            </div>

            <div class="divReadMore">
                <a href="#" class="readMore">Leer Más (SPOILERS)</a>
            </div>
        </div>

        <div class="divFaction">
            <h1 class="factionSubTitle">Miembros</h1>
            <div class="members">
                <div class="characterCard">
                    <div class="divCharacterImg">
                        <img id="characterImg" src="${firstCharacter.img}" class="imgAnim">
                    </div>

                    <div class="info">
                        <h2 id="characterName" class="textPart">${firstCharacter.name}</h2>
                        <div id="characterDesc" class="textPart">
                            ${firstCharacter.desc}
                        </div>

                        <h2 id="characterTalent" class="textPart">Talento</h2>
                        <div id="characterDescT" class="textPart">
                            ${firstCharacter.talent}
                        </div>
                    </div>
                </div>

                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
            </div>
        </div>
    `;
}

function initializeFactionEvents(faction) {
    initializeReadMore();
    characterSlider(faction.members);
}

// LEER MÁS
function initializeReadMore() {
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
}

const links = document.querySelectorAll(".menu li > a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        const submenu = link.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
            e.preventDefault();
            submenu.classList.toggle("open");
        }
    });
});

function setActiveFaction(section) {
    const items = document.querySelectorAll("[data-section]");

    items.forEach(item => {
        item.classList.toggle(
            "active",
            item.dataset.section === section
        );

    });
}

const menuItems = document.querySelectorAll("[data-section]");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const section = item.dataset.section;
        loadFaction(section);
    });

});

const savedFaction = localStorage.getItem("currentFaction") || "forest";
loadFaction(savedFaction);