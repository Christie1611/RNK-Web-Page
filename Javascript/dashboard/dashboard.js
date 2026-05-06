import { loadProfile } from "./profile.js";
import { loadEditForm } from "./editForm.js";
import { loadReenForm } from "./reenForm.js";
import { showDeleteModal, showLogoutModal } from "./modal.js";
import { flashMessages } from "./flash.js";
import { loadEditReenForm } from "./editReenForm.js";
import { loadReenProfile } from "./reenProfile.js";
import { loadExplore } from "./explore.js";

let previousSection = null;
const content = document.getElementById("mainContent");
const menuItems = document.querySelectorAll(".menu > li[data-section]");

flashMessages();

// Lo que cargará las secciones.
export function loadSection(section) {
    switch(section) {
        case "home":
            //content.innerHTML = `<h1>Bienvenido</h1>`;
            localStorage.removeItem("currentSection");
            window.location.href = "../Index.php";
            break;

        case "explore":
            //content.innerHTML = `<h1>Explorar</h1>`;
            loadExplore();
            break;

        case "profile":
            loadProfile(content);
            break;

        case "edit":
            loadEditForm(content);
            break;

        case "create":
            // content.innerHTML = `<h1>Crear personaje</h1>`;
            loadReenForm(content);
            break;

        case "delete":
            previousSection = localStorage.getItem("currentSection") || "profile";
            showDeleteModal();
            break;

        case "logout":
            previousSection = localStorage.getItem("currentSection") || "profile";
            showLogoutModal();
            break;
    }
}


// Guarda la sección
export function setActiveMenu(section) {
    let activeSection = section;

    if (section === "reenProfile") {
        activeSection = localStorage.getItem("reenProfileOrigin") || "profile";
    }

    menuItems.forEach(item => {
        item.classList.toggle("active", item.dataset.section === activeSection);
    });
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const section = item.dataset.section;

        if (!section) return;

        if (section === "delete") {
            loadSection("delete");
            return;
        }

        if (section === "logout") {
            loadSection("logout");
            return;
        }

        localStorage.setItem("currentSection", section);

        if (section !== "reenProfile") {localStorage.removeItem("currentReenProfile");}
        setActiveMenu(section);
        loadSection(section);
    });
});

if (reenAction === "modificar" && reenEditId) {
    const reen = userReen.find(r => r.idreencarnado == reenEditId);
    if (reen) {
        setActiveMenu("profile");
        loadEditReenForm(reen);
    } else {
        let savedSection = localStorage.getItem("currentSection");

        if (!savedSection || savedSection === "home") {
            savedSection = "profile";
        }
        setActiveMenu(savedSection);
        loadSection(savedSection);
    }
} else {
    let savedSection = localStorage.getItem("currentSection");

    if (!savedSection || savedSection === "home") {
        savedSection = "profile";
    }
    setActiveMenu(savedSection);
    loadSection(savedSection);

    const savedReenProfile = localStorage.getItem("currentReenProfile");

    if (savedSection === "reenProfile" && savedReenProfile) {
        const origin = localStorage.getItem("reenProfileOrigin") || "profile";

        if (origin === "explore") {
            loadReenProfile(savedReenProfile, {
                source: window.exploreReen,
                showAuthor: true
            });
        } else {
            loadReenProfile(savedReenProfile, {
                source: window.userReen,
                showAuthor: false
            });
        }
    }
}

// Todo lo de Factions para que funcione.
const links = document.querySelectorAll(".menu > li > a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        const submenu = link.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
            e.preventDefault();
            submenu.classList.toggle("open");
        }
    });
});

if (window.location.pathname.includes("Factions.php")) {
    const params = new URLSearchParams(window.location.search);
    const currentFaction = params.get("section");

    if (currentFaction) {
        const links = document.querySelectorAll(".submenu a");

        links.forEach(link => {
            link.classList.toggle(
                "activeFaction",
                link.dataset.section === currentFaction
            );
        });
    }
}

document.querySelectorAll(".submenu a").forEach(link => {
    link.addEventListener("click", () => {
        localStorage.setItem("fromDashboard", "true");
    });
});

if (localStorage.getItem("fromDashboard")) {
    localStorage.setItem("currentSection", "profile");
    localStorage.removeItem("fromDashboard");
}