import { showDeleteUserModal } from "../dashboard/modal.js";

const currentAdminId = window.currentAdminId;

export function loadAdminUsers(content){
    content.innerHTML = `
        <h1 class="adminTitle">Usuarios</h1>
        <div class="adminList">
            ${adminUsers.map(user => `
                <div class="adminRow">
                    <div>
                        <span class="subName">${user.usuario}</span>
                        <p>${user.email}</p>
                    </div>

                    ${user.id != currentAdminId ? `<button class="adminDelete" data-id="${user.id}">Eliminar</button>`
                    : `<span class="adminOwner">Administrador</span>`}
                </div>
            `).join("")}
        </div>
    `;

    const deleteButtons = document.querySelectorAll(".adminDelete");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            showDeleteUserModal(btn.dataset.id);
        });
    });
}