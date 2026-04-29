

// BOTÓN DE CERRAR SESIÓN / BORRAR
export function showLogoutModal() {
    showModal(
        "logout",
        "¿Seguro/a que quieres cerrar sesión?",
        () => {
            localStorage.removeItem("currentSection");
            window.location.href = "logout.php";
        }
    );
}

export function showDeleteModal() {
    showModal(
        "delete",
        "¿Seguro/a que quieres borrar tu cuenta?",
        () => {
            window.location.href = `../PHP/eliminar.php?id=${userData.id}`;
        }
    );
}

export function showModal(type, message, onConfirm) {
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

        if (onConfirm) {onConfirm();}
    });
}
