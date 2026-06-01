import { loadAdminControl } from "./adminControl.js";
import { loadAdminUsers } from "./adminUsers.js";
import { loadAdminReen } from "./adminReen.js";
import { loadAdminSubfacciones } from "./adminSubfacciones.js";
import { flashMessages } from "../dashboard/flash.js";
import { showLogoutModal } from "../dashboard/modal.js";

const content = document.getElementById("mainContent");
const menuItems = document.querySelectorAll(".menu > li[data-section]");

flashMessages();

/* ---------------- CARGA DE SECCIONES ---------------- */
export function loadSection(section) {
    switch(section) {
        case "home":
            localStorage.removeItem("adminSection");
            window.location.href = "../Index.php";
            break;

        case "control":
            loadAdminControl(content);
            break;

        case "users":
            loadAdminUsers(content);
            break;

        case "reencarnados":
            loadAdminReen(content);
            break;

        case "subfacciones":
            loadAdminSubfacciones(content);
            break;

        case "logout":
            showLogoutModal();
            break;
    }
}

/* ---------------- MENÚ ACTIVO ---------------- */
export function setActiveMenu(section) {
    menuItems.forEach(item => {
        item.classList.toggle(
            "active",
            item.dataset.section === section
        );
    });
}

/* ---------------- EVENTOS MENÚ ---------------- */
menuItems.forEach(item => {
    item.addEventListener("click", () => {

        const section = item.dataset.section;

        if (!section) return;

        if (window.innerWidth <= 1024) {
            divMenu.classList.remove("openMenu");
            menuOverlay.classList.remove("show");
        }

        if (section === "logout") {
            loadSection("logout");
            return;
        }

        localStorage.setItem("adminSection", section);

        setActiveMenu(section);
        loadSection(section);

    });

});

/* ---------------- RESTAURAR SECCIÓN ---------------- */
let savedSection = localStorage.getItem("adminSection");

if (!savedSection || savedSection === "home") {
    savedSection = "control";
}

setActiveMenu(savedSection);
loadSection(savedSection);

/* ---------------- MENÚ TELÉFONO ---------------- */
const menuToggle = document.getElementById("menuToggle");
const divMenu = document.querySelector(".divMenu");
const menuOverlay = document.getElementById("menuOverlay");

if (menuToggle && divMenu && menuOverlay) {
    menuToggle.addEventListener("click", () => {
        divMenu.classList.toggle("openMenu");
        menuOverlay.classList.toggle("show");
    });

    menuOverlay.addEventListener("click", () => {
        divMenu.classList.remove("openMenu");
        menuOverlay.classList.remove("show");
    });

}