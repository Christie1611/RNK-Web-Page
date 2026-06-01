export function loadAdminSubfacciones(content){

    content.innerHTML = `
        <h1 class="adminTitle">Subfacciones</h1>
        <div class="adminCreate">
            <form class="subFactionForm" action="../PHP/validarSubFaccion.php" method="POST">
                <input type="hidden" name="action" value="insertar">
                <input type="text" name="nombre" id="subName" class="subInput" placeholder="Nombre de la subfacción">
                <input type="submit" class="subCreateBtn" value="Crear Subfacción">
            </form>
        </div>

        <div class="adminList">
            ${adminSubfacciones.map(sub => `
                <div class="adminRow subRow" data-id="${sub.idsubfaccion}">
                    <span class="subName">${sub.nombre}</span>
                    <input type="text" class="subEditInput" value="${sub.nombre}" style="display:none">

                    <div class="subActions">
                        <button class="adminEdit" data-id="${sub.idsubfaccion}">Editar</button>
                        <button class="adminDelete" data-id="${sub.idsubfaccion}">Eliminar</button>
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    const editButtons = document.querySelectorAll(".adminEdit");
    editButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const row = btn.closest(".subRow");
            const span = row.querySelector(".subName");
            const input = row.querySelector(".subEditInput");
            const id = row.dataset.id;
            if (btn.textContent === "Editar") {
                span.style.display = "none";
                input.style.display = "block";
                btn.textContent = "Guardar";
                return;
            }

            const form = document.createElement("form");

            form.method = "POST";
            form.action = "../PHP/validarSubFaccion.php";
            form.innerHTML = `
                <input type="hidden" name="action" value="modificar">
                <input type="hidden" name="idsubfaccion" value="${id}">
                <input type="hidden" class="subEditInput" name="nombre" value="${input.value}">
            `;

            document.body.appendChild(form);
            form.submit();
        });

    });

    const deleteButtons = document.querySelectorAll(".adminDelete");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            if (!confirm("¿Eliminar esta subfacción?")) return;

            const form = document.createElement("form");

            form.method = "POST";
            form.action = "../PHP/validarSubFaccion.php";

            form.innerHTML = `
                <input type="hidden" name="action" value="eliminar">
                <input type="hidden" name="idsubfaccion" value="${id}">
            `;

            document.body.appendChild(form);
            form.submit();
        });
    });
}