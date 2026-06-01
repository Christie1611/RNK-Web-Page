import { showDeleteReenModal } from "../dashboard/modal.js";

export function loadAdminReen(content){

    content.innerHTML = `
        <h1 class="adminTitle">Reencarnados</h1>
        <div class="adminList">
            ${adminReen.map(reen => `
                <div class="adminRow">
                    <div>
                        <span class="subName">${reen.nombre}</span>
                    </div>

                    <button class="adminDelete" data-id="${reen.idreencarnado}">Eliminar</button>
                </div>
            `).join("")}
        </div>
    `;

    const deleteButtons = document.querySelectorAll(".adminDelete");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            showDeleteReenModal(btn.dataset.id);
        });
    });
}