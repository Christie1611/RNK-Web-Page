const content = document.getElementById("mainContent");
const menuItems = document.querySelectorAll(".divMenu li");
const h2 = document.getElementById("user").textContent;

// Guarda la sección hecha
menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const section = item.dataset.section;

        localStorage.setItem("currentSection", section);

        loadSection(section);
    });
});

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
// ----------------------------------------------------

// Lo que cargará las secciones.
function loadSection(section) {
    switch(section) {
        case "home":
            content.innerHTML = `<h1>Bienvenido</h1>`;
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
            showDeleteModal();
            break;

        case "logout":
            localStorage.removeItem("currentSection");
            window.location.href = "logout.php";
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
    content.innerHTML = content.innerHTML = `
        <form action="../PHP/validarUsers.php" method="POST" enctype="multipart/form-data" class="form">
        <div class="profileCard">

            <div class="profileLeft">
                <label>Imagen de perfil</label>
                <input type="hidden" name="action" value="modificar">
                
                <div class="previewContainer">
                    <img class="profileImage" id="previewImage" src="${userImage}" alt="preview">
                </div>
                
                <input type="file" name="imagen" id="fileInput" accept="image/*">
                
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
                    <input type="password" name="contrasena" placeholder="Contraseña" value="${userData.contrasena}" required>
                    <span class="error" id="error-contrasena"></span>
                </div>

                <div class="formGroup">
                    <label>Descripción</label>
                    <textarea name="descripcion" placeholder="Opcional">${userData.descripcion}</textarea>
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

// BOTÓN DE BORRAR
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