import { loadProfile } from "./profile.js";
import { loadEditForm } from "./editForm.js";
import { loadReenForm } from "./reenForm.js";
import { showDeleteModal, showLogoutModal } from "./modal.js";
import { flashMessages } from "./flash.js";

let previousSection = null;
const content = document.getElementById("mainContent");
const menuItems = document.querySelectorAll(".divMenu li");

flashMessages();

// Lo que cargará las secciones.
function loadSection(section) {
    switch(section) {
        case "home":
            //content.innerHTML = `<h1>Bienvenido</h1>`;
            localStorage.removeItem("currentSection");
            window.location.href = "../Index.php";
            break;

        case "explore":
            content.innerHTML = `<h1>Explorar</h1>`;
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
function setActiveMenu(section) {
    menuItems.forEach(item => {
        item.classList.toggle("active", item.dataset.section === section);
    });
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const section = item.dataset.section;
        if (section === "delete") {
            loadSection("delete");
            return;
        }

        if (section === "logout") {
            loadSection("logout");
            return;
        }

        localStorage.setItem("currentSection", section);
        setActiveMenu(section);
        loadSection(section);
    });
});

const savedSection = localStorage.getItem("currentSection") || "profile";
setActiveMenu(savedSection);
loadSection(savedSection);