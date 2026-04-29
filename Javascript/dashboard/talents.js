const reenDataOld = window.reenDataOld;

// LOS ENCARGADOS DE LOS TALENTOS
export function talentosHandler() {
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
                <textarea name="descripcionTalento[]" placeholder="Descripción"></textarea>
                
                <span class="error error-talento"></span>
                <span class="error error-descripcion"></span>
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

export function rebuildTalentos() {
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
                <textarea name="descripcionTalento[]" placeholder="Descripción">${t.descripcion || ""}</textarea>
                <span class="error error-talento"></span>
                <span class="error error-descripcion"></span>
            </div>
        `;

        container.appendChild(div);
    });
}
// ----------------------------------------------------