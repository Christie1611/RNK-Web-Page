const content = document.getElementById("mainContent");
const menuItems = document.querySelectorAll(".divMenu li");

let previousSection = null;

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

// ----------------------------------------------------

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
            loadProfile();
            break;

        case "edit":
            loadEditForm();
            break;

        case "create":
            content.innerHTML = `<h1>Crear personaje</h1>`;
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
// ----------------------------------------------------

// Contenido para cargar el perfil
function loadProfile() {
    const userImage = (userData.imagen && userData.imagen !== null) ? `../uploads/${userData.imagen}` : "../uploads/defaultImage.png";
    const userDesc = (userData.descripcion && userData.descripcion !== null)  ? userData.descripcion : "Descripción del usuario...";

    content.innerHTML = `
        <div class="profileCard">
            <div class="profileLeft">
                <img class="profileImage" src="${userImage}">
            </div>

            <div class="profileRight">
                <h2>${userData.usuario}</h2>
                <p class="email">${userData.email}</p>

                <div class="infoBlock">
                    <h3>Biografía</h3>
                    <p>${userDesc}</p>
                </div>

                <div class="infoBlock">
                    <h3>Personajes creados</h3>
                    <p>${userReen} personajes</p>
                </div>
            </div>
        </div>
    `;
}

// Contenido para editar el perfil
function loadEditForm() {
    const userImage = (userData.imagen && userData.imagen !== null) ? `../uploads/${userData.imagen}` : "../uploads/defaultImage.png";
    const userDesc = (userData.descripcion && userData.descripcion !== null)  ? userData.descripcion : "";

    content.innerHTML = content.innerHTML = `
        <form action="../PHP/validarUsers.php" method="POST" enctype="multipart/form-data" class="form">
            <div class="profileCard">
                <div class="profileLeft">
                    <!--<label>Imagen de perfil</label>-->
                    <input type="hidden" name="action" value="modificar">
                    
                    <div class="previewContainer">
                        <img class="profileImage" id="previewImage" src="${userImage}" alt="preview">
                        <input type="file" name="imagen" id="fileInput" accept="image/*" hidden>
                    </div>
                    
                    <input type="submit" value="Guardar cambios">
                </div>

                <div class="profileRight">
                    <div class="formGroup">
                        <label>Usuario</label>
                        <input type="text" name="usuario" placeholder="Usuario" value="${userData.usuario}">
                        <span class="error" id="error-usuario"></span>
                    </div>

                    <div class="formGroup">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value="${userData.email}" required>
                        <span class="error" id="error-email"></span>
                    </div>

                    <div class="formGroup">
                        <label>Contraseña</label>
                        <input type="password" name="contrasena" placeholder="Nueva contraseña (OPCIONAL)">
                        <span class="error" id="error-contrasena"></span>
                    </div>

                    <div class="formGroup">
                        <label>Descripción</label>
                        <textarea name="descripcion" placeholder="Añadir descripción, (Opcional)">${userDesc}</textarea>
                        <span class="error" id="error-descripcion"></span>
                    </div>
            </div>
        </form>
    `;

    Object.keys(userErrors).forEach(key => {
        const errorElement = document.querySelector(`#error-${key}`);

        if (errorElement && userErrors[key]) {
            errorElement.textContent = userErrors[key];
        }
    });

    previewImage();
    const img = document.getElementById("previewImage");
    const input = document.getElementById("fileInput");

    img.addEventListener("click", () => {
        input.click();
    });
}
// ----------------------------------------------------

// PREVIEW DE IMAGEN
function previewImage() {
    const input = document.getElementById("fileInput");
    const preview = document.getElementById("previewImage");

    input.addEventListener("change", () => {
        const file = input.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("El archivo no es una imagen");
            input.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
        }

        reader.readAsDataURL(file);
    });
}

// BOTÓN DE CERRAR SESIÓN / BORRAR
function showLogoutModal() {
    showModal(
        "logout",
        "¿Seguro/a que quieres cerrar sesión?",
        () => {
            localStorage.removeItem("currentSection");
            window.location.href = "logout.php";
        }
    );
}

function showDeleteModal() {
    showModal(
        "delete",
        "¿Seguro/a que quieres borrar tu cuenta?",
        () => {
            window.location.href = `../PHP/eliminar.php?id=${userData.id}`;
        }
    );
}

function showModal(type, message, onConfirm) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const isDelete = type === "delete";

    modal.innerHTML = `
        <div class="modalBox">
            <p class="warning">${isDelete ? "¡ATENCIÓN!" : "Confirmación"}</p>
            <p>${message}</p>

            <button class="cancel">Cancelar</button>
            <button class="confirm ${isDelete ? "danger" : ""}">
                ${isDelete ? "Eliminar" : "Aceptar"}
            </button>
        </div>
    `;

    document.body.appendChild(modal);
    const cancelBtn = modal.querySelector(".cancel");
    const confirmBtn = modal.querySelector(".confirm");

    cancelBtn.addEventListener("click", () => {
        modal.remove();
    });

    confirmBtn.addEventListener("click", () => {
        modal.remove();
        if (onConfirm) onConfirm();
        localStorage.setItem("currentSection", previousSection);
        setActiveMenu(previousSection);
        loadSection(previousSection);
    });
}

// MENSAJE PARA LOS FORMUARIOS
// Nota personal, NUNCA usar DOMContentLoaded PORQUE POR ALGÚN MOTIVO NO ME FUNCIONA. Solo ponlo todo al final.
document.querySelectorAll(".flash").forEach(flash => {
    setTimeout(() => removeFlash(flash), 4000);
});

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".flashClose");
    if (!btn) return;

    const flash = btn.closest(".flash");
    if (!flash) return;

    removeFlash(flash);
});

function removeFlash(flash) {
    flash.classList.add("hide");

    setTimeout(() => {
        flash.remove();
    }, 400);
}