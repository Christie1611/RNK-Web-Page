const content = document.getElementById("mainContent");
const menuItems = document.querySelectorAll(".divMenu li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const section = item.dataset.section;

        localStorage.setItem("currentSection", section);

        loadSection(section);
    });
});

function loadSection(section) {
    if (section === "home") {
        content.innerHTML = `<h1>Bienvenido</h1>`;
    }

    if (section === "explore") {
        content.innerHTML = `<h1>Explorar</h1>`;
    }

    if (section === "profile") {
        loadProfile();
    }

    if (section === "edit") {
        content.innerHTML = `<h1>Editar perfil</h1>`;
    }

    if (section === "create") {
        content.innerHTML = `<h1>Crear personaje</h1>`;
    }

    if (section === "delete") {
        showDeleteModal();
    }

    if (section === "logout") {
        localStorage.removeItem("currentSection");
        window.location.href = "index.html";
    }
}

function loadProfile() {
    content.innerHTML = `
        <div class="profileCard">
            <div class="profileLeft">
                <img src="../Imagenes/Neumann.png">
            </div>

            <div class="profileRight">
                <h2>Usuario123</h2>
                <p class="email">usuario@email.com</p>

                <div class="infoBlock">
                    <h3>Biografía</h3>
                    <p>Texto del usuario...</p>
                </div>

                <div class="infoBlock">
                    <h3>Personajes creados</h3>
                    <p>3 personajes</p>
                </div>
            </div>
        </div>
    `;
}

function showDeleteModal() {
    const modal = document.createElement("div");

    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modalBox">
            <p>¿Seguro que quieres borrar tu cuenta?</p>
            <button id="cancel">Cancelar</button>
            <button id="confirm" class="danger">Eliminar</button>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("cancel").onclick = () => modal.remove();
}

const savedSection = localStorage.getItem("currentSection");

if (savedSection) {
    loadSection(savedSection);

    menuItems.forEach(item => {
        if (item.dataset.section === savedSection) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

} else {
    loadSection("profile");
}