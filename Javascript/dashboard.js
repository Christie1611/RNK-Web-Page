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
            // content.innerHTML = `<h1>Crear personaje</h1>`;
            loadReenForm();
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
    let reenHTML = "";
    const userImage = (userData.imagen && userData.imagen !== null) ? `../uploads/${userData.imagen}` : "../uploads/defaultImage.png";
    const userDesc = (userData.descripcion && userData.descripcion !== null)  ? userData.descripcion : "Descripción del usuario...";

    if (userReen.length > 0) {
        userReen.forEach(reen => {
            const reenImage = (reen.diseno && reen.diseno !== null)
                ? `../reen/${reen.diseno}`
                : "../uploads/defaultImage.png";

            reenHTML += `
                <div class="reenCard" data-id="${reen.idreencarnado}">
                    <img src="${reenImage}" class="reenImage">
                    <p class="reenName">${reen.nombre}</p>
                </div>
            `;
        });
    } else {
        reenHTML = `<p>No hay personajes creados.</p>`;
    }

    content.innerHTML = `
        <div class="profileWrapper">
            <div class="profileCard">
                <div class="profileLeft">
                    <div class="previewContainer">
                        <img class="profileImage" src="${userImage}">
                    </div>
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
                        <p>${userCantReen} personajes</p>
                    </div>
                </div>
            </div>

            <div class="reenSection">
                <h2 class="reenTitle">Tus personajes</h2>

                <div class="reenCarouselWrapper">
                    <button class="carouselBtn left" id="carouselLeft">&#10094;</button>
                    <div class="reenCarousel" id="reenCarousel">
                        ${reenHTML}
                    </div>
                    <button class="carouselBtn right" id="carouselRight">&#10095;</button>
                </div>
            </div>
        </div>
    `;

   infiniteCarousel();
   reenProfileHandler();
}

// Scroll para los Reencarnados
function infiniteCarousel() {
    const carousel = document.getElementById("reenCarousel");
    const leftBtn = document.getElementById("carouselLeft");
    const rightBtn = document.getElementById("carouselRight");

    if (!carousel) return;

    const cards = carousel.querySelectorAll(".reenCard");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + (1/100);
    let index = 0;

    function updateButtons() {
        const hasOverflow = carousel.scrollWidth > carousel.clientWidth;
        if (!hasOverflow) {
            leftBtn.style.display = "none";
            rightBtn.style.display = "none";
        } else {
            leftBtn.style.display = "flex";
            rightBtn.style.display = "flex";
        }
    }

    updateButtons();
    window.addEventListener("resize", updateButtons);

    rightBtn.addEventListener("click", () => {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScroll - 5) {
            carousel.scrollLeft = 0;
        } else {
            carousel.scrollLeft += cardWidth;
        }
    });

    leftBtn.addEventListener("click", () => {
        if (carousel.scrollLeft <= 5) {
            carousel.scrollLeft = carousel.scrollWidth;
        } else {
            carousel.scrollLeft -= cardWidth;
        }
    });

    carousel.style.scrollBehavior = "smooth";
}

function reenProfileHandler() {
    const cards = document.querySelectorAll(".reenCard");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            const reen = userReen.find(r => r.idreencarnado == id);

            if (reen) {
                loadReenProfile(reen);
            }
        });
    });
}

function loadReenProfile(reen) {
    const reenImage = (reen.diseno && reen.diseno !== null)
        ? `../reen/${reen.diseno}`
        : "../uploads/defaultImage.png";

    content.innerHTML = `
        <div class="profileWrapper">
            <div class="profileCard">
                <div class="profileLeft">
                    <div class="previewContainer">
                        <img class="profileImage" src="${reenImage}">
                    </div>
                </div>

                <div class="profileRight">
                    <h2>${reen.nombre}</h2>
                    <div class="infoBlock">
                        <h3>Facción</h3>
                        <p>${getFactionName(reen.idfaccion)}</p>
                    </div>

                    <div class="infoBlock">
                        <h3>Trasfondo</h3>
                        <p>${reen.trasfondo}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getFactionName(id) {
    switch(id) {
        case 1:
            return "Forest";

        case 2:
            return "Sinners";

        case 3:
            return "Strays";

        case 4:
            return "Others";

        default:
            return "Desconocida";
    }
}

// Contenido para editar el perfil
function loadEditForm() {
    const userImage = (userData.imagen && userData.imagen !== null) ? `../uploads/${userData.imagen}` : "../uploads/defaultImage.png";
    const userDesc = (userData.descripcion && userData.descripcion !== null)  ? userData.descripcion : "";

    content.innerHTML = content.innerHTML = `
        <form action="../PHP/validarUsers.php" method="POST" enctype="multipart/form-data" class="form">
            <div class="profileCard">
                <div class="profileLeft">
                    
                    <h2 class="titForm">Perfil</h2>
                    <input type="hidden" name="action" value="modificar">
                    
                    <div class="previewContainer">
                        <img class="profileImage" id="previewImage" src="${userImage}" alt="preview">
                        <input type="file" name="imagen" id="fileInput" accept="image/*" hidden>
                    </div>
                    
                    <div class="formGroup">
                        <span class="error errimage" id="error-imagen"></span>
                        <input type="submit" value="Guardar cambios">
                    </div>
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
            </div>
        </form>
    `;

    inputImage();
    previewImage();
    paintErrors(userErrors);
}
// ----------------------------------------------------

// Contenido para crear a los Reencarnados
function loadReenForm() {
    const reenImage = (reenDataOld.diseno && reenDataOld.diseno !== null) ? `../uploads/${reenDataOld.diseno}` : "../uploads/defaultImage.png";

    content.innerHTML = content.innerHTML = `
        <form action="../PHP/validarReen.php" method="POST" enctype="multipart/form-data" class="form">
            <div class="profileCard">

                <div class="profileLeft">
                    <h2 class="titForm">Reencarnado</h2>
                    <input type="hidden" name="action" value="insertar">

                    <div class="previewContainer">
                        <img class="profileImage" id="previewImage" src="${reenImage}">
                        <input type="file" name="diseno" id="fileInput" accept="image/*" hidden>
                    </div>

                    <div class="formGroup">
                        <span class="error errimage" id="error-diseno"></span>
                        <input type="submit" value="Crear personaje">
                    </div>
                </div>

                <div class="profileRight">
                    <div class="formGroup">
                        <label>Nombre</label>
                        <input type="text" name="nombre" value="${reenDataOld?.nombre || ""}">
                        <span class="error" id="error-nombre"></span>
                    </div>

                    <div class="formGroup">
                        <label>Facción</label>
                        <select name="idfaccion">
                            <option value=""></option>
                            <option value="1" ${reenDataOld?.idfaccion == 1 ? "selected" : ""}>Forest</option>
                            <option value="2" ${reenDataOld?.idfaccion == 2 ? "selected" : ""}>Sinners</option>
                            <option value="3" ${reenDataOld?.idfaccion == 3 ? "selected" : ""}>Strays</option>
                            <option value="4" ${reenDataOld?.idfaccion == 4 ? "selected" : ""}>Others</option>
                        </select>
                        <span class="error" id="error-idfaccion"></span>
                    </div>

                    <div class="formGroup">
                        <label>Trasfondo</label>
                        <textarea name="trasfondo">${reenDataOld?.trasfondo || ""}</textarea>
                        <span class="error" id="error-trasfondo"></span>
                    </div>

                    <div id="talentosContainer">
                        <div class="talentoItem">
                            <div class="formGroup">
                                <div>
                                    <label>Talento</label> 
                                    <button type="button" class="removeTalento">Eliminar</button>
                                </div>
                                <input type="text" name="talento[]" placeholder="Nombre del talento">
                                <textarea name="descripcionTalento[]" placeholder="Descripción (Opcional)"></textarea>
                                
                                <span class="error error-talento"></span>
                            </div>
                        </div>
                    </div>

                    <button type="button" id="addTalento">+ Añadir talento</button>
                </div>

            </div>
        </form>
    `;

    inputImage();
    previewImage();
    rebuildTalentos();
    talentosHandler(); 
    paintErrors(reenErrors);
}
// ----------------------------------------------------

// LOS ENCARGADOS DE LOS TALENTOS
function talentosHandler() {
    const container = document.getElementById("talentosContainer");
    const addBtn = document.getElementById("addTalento");

    addBtn.addEventListener("click", () => {
        const div = document.createElement("div");
        div.classList.add("talentoItem");

        div.innerHTML = `
            <div class="formGroup">
                <div>
                    <label>Talento</label> 
                    <button type="button" class="removeTalento">Eliminar</button>
                </div>
                <input type="text" name="talento[]" placeholder="Nombre del talento">
                <textarea name="descripcionTalento[]" placeholder="Descripción (Opcional)"></textarea>
                
                <span class="error error-talento"></span>
            </div>
        `;

        container.appendChild(div);
    });

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("removeTalento")) {
            if (container.children.length > 1) {
                e.target.closest(".talentoItem").remove();
            }
        }
    });
}

function rebuildTalentos() {
    const container = document.getElementById("talentosContainer");

    if (!reenDataOld?.talentos || reenDataOld.talentos.length === 0) return;
    if (reenDataOld?.talentos?.length) {
        container.innerHTML = "";
    }

    reenDataOld.talentos.forEach(t => {
        const div = document.createElement("div");
        div.classList.add("talentoItem");

        div.innerHTML = `
            <div class="formGroup">
                <div>
                    <label>Talento</label> 
                    <button type="button" class="removeTalento">Eliminar</button>
                </div>
                <input type="text" name="talento[]" value="${t.talento || ""}" placeholder="Nombre del talento">
                <textarea name="descripcionTalento[]" placeholder="Descripción (Opcional)">${t.descripcion || ""}</textarea>
                <span class="error error-talento"></span>
            </div>
        `;

        container.appendChild(div);
    });
}
// ----------------------------------------------------

function paintErrors(dataErrors) {
    Object.keys(dataErrors).forEach(key => {
        if (key.startsWith("talento_")) {
            const index = key.split("_")[1];
            const items = document.querySelectorAll(".talentoItem");

            if (items[index]) {
                const errorSpan = items[index].querySelector(".error-talento");
                if (errorSpan) {
                    errorSpan.textContent = dataErrors[key];
                }
            }
        } else {
            const errorElement = document.querySelector(`#error-${key}`);
            if (errorElement && dataErrors[key]) {
                errorElement.textContent = dataErrors[key];
            }
        }
    });
}

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

function inputImage() {
    const img = document.getElementById("previewImage");
    const input = document.getElementById("fileInput");

    img.addEventListener("click", () => {
        input.click();
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