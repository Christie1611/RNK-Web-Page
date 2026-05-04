import { loadReenProfile } from "./reenProfile.js";

const exploreReen = window.exploreReen;
const content = document.getElementById("mainContent");
let currentExploreData = [...exploreReen];

export function loadExplore() {
    content.innerHTML = `
        <div class="exploreContainer">
            <div class="exploreTop">
                <input type="text" id="searchReen" placeholder="Buscar Reencarnado...">
                <input type="text" id="searchAuth" placeholder="Buscar por autor...">

                <select id="filterFaction">
                    <option value="">Todas las facciones</option>
                    <option value="1">Forest</option>
                    <option value="2">Sinners</option>
                    <option value="3">Strays</option>
                    <option value="4">Others</option>
                </select>
            </div>

            <div class="exploreGrid" id="exploreGrid"></div>
        </div>
    `;

    const search = document.getElementById("searchReen");
    const searchAuth = document.getElementById("searchAuth");
    const filter = document.getElementById("filterFaction");

    search.value = localStorage.getItem("exploreSearch") || "";
    searchAuth.value = localStorage.getItem("exploreAuthor") || "";
    filter.value = localStorage.getItem("exploreFaction") || "";

    search.addEventListener("input", applyFilters);
    searchAuth.addEventListener("input", applyFilters);
    filter.addEventListener("change", applyFilters);
    
    applyFilters();
}

function renderExploreCards(data) {
    const grid = document.getElementById("exploreGrid");

    if (!data.length) {
        grid.innerHTML = `<p>No hay resultados.</p>`;
        return;
    }

    let html = "";
    data.forEach(reen => {
        const image = reen.diseno ? `../reen/${reen.diseno}` : `../uploads/defaultImage.png`;

        html += `
            <div class="exploreCard" data-id="${reen.idreencarnado}">
                <img src="${image}" class="exploreImage">
                
                <div class="exploreInfo">
                    <h3>${reen.nombre}</h3>
                    <p>${reen.usuario}</p>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
    attachExploreEvents();
}

function attachExploreEvents() {
    const cards = document.querySelectorAll(".exploreCard");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            const reen = exploreReen.find(r => r.idreencarnado == id);

            if (reen) {
                localStorage.setItem("reenProfileOrigin", "explore");
                localStorage.setItem("currentSection", "reenProfile");
                localStorage.setItem("currentReenProfile", id);

                loadReenProfile(id, {
                    source: currentExploreData,
                    showAuthor: true
                });
            }
        });
    });
}

function applyFilters() {
    const search = document.getElementById("searchReen").value.toLowerCase();
    const searchAuth = document.getElementById("searchAuth").value.toLowerCase();
    const faction = document.getElementById("filterFaction").value;

    localStorage.setItem("exploreSearch", search);
    localStorage.setItem("exploreAuthor", searchAuth);
    localStorage.setItem("exploreFaction", faction);

    currentExploreData = exploreReen.filter(reen => {
        const matchesName = reen.nombre.toLowerCase().startsWith(search);
        const matchesAuth = reen.usuario.toLowerCase().startsWith(searchAuth);
        const matchesFaction = faction === "" || reen.idfaccion == faction;

        return matchesName && matchesAuth && matchesFaction;
    });

    renderExploreCards(currentExploreData);
}