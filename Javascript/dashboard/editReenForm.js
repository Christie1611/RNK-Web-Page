import { talentosHandler, rebuildTalentos } from "./talents.js";
import { previewImage, inputImage } from "./imagePreview.js";
import { paintErrors } from "./errors.js";
import { goBack } from "./reenProfile.js";
import { loadSection, setActiveMenu } from "./dashboard.js";

const reenDataOld = window.reenDataOld;
const reenErrors = window.erroresReenEdit;
const content = document.getElementById("mainContent");
localStorage.setItem("reenReturn", localStorage.getItem("currentSection") || "profile");

export function loadEditReenForm(reen) {
    const reenImage = (reen.diseno && reen.diseno !== null)
        ? `../reen/${reen.diseno}`
        : "../uploads/defaultImage.png";

    let talentosHTML = "";
    if (reen.talentos?.length > 0) {
        reen.talentos.forEach((talento, index) => {

            talentosHTML += `
                <div class="talentoItem">
                    <div class="formGroup">
                        <div>
                            <label>Talento</label> 
                            <button type="button" class="removeTalento">Eliminar</button>
                        </div>
                        <input type="text" name="talento[]" value="${reenDataOld?.talentos?.[index]?.talento || talento.talento}">
                        <textarea name="descripcionTalento[]">${reenDataOld?.talentos?.[index]?.descripcion || talento.descripcion || ""}</textarea>

                        <span class="error error-talento" id="error-talento"></span>
                        <span class="error error-descripcion" id="error-descripcion"></span>
                    </div>
                </div>
            `;
        });
    }

    content.innerHTML = `
        <form action="../PHP/validarReen.php" method="POST" enctype="multipart/form-data" class="form">
            <input type="hidden" name="action" value="modificar">

            <input type="hidden" name="idreencarnado" value="${reen.idreencarnado}">
            <div class="profileCard">
                <div class="profileLeft">
                <h2 class="titForm">Reencarnado</h2>
                    <div class="previewContainer">
                        <img class="profileImage" id="previewImage" src="${reenImage}">
                        <input type="file" name="diseno" id="fileInput" accept="image/*" hidden>
                    </div>

                    <div class="formGroup">
                        <span class="error errimage" id="error-diseno"></span>
                        <input type="submit" value="Guardar cambios">
                        <button type="button" class="goBackReen">← Volver</button>
                    </div>
                </div>

                <div class="profileRight">
                    <div class="formGroup">
                        <label>Nombre</label>
                        <input type="text" name="nombre" value="${reenDataOld?.nombre || reen.nombre}">
                        <span class="error" id="error-nombre"></span>
                    </div>

                    <div class="formGroup">
                        <label>Facción</label>
                        <select name="idfaccion">
                            <option value=""></option>
                            <option value="1" ${reen.idfaccion == 1 ? "selected" : ""}>Forest</option>
                            <option value="2" ${reen.idfaccion == 2 ? "selected" : ""}>Sinners</option>
                            <option value="3" ${reen.idfaccion == 3 ? "selected" : ""}>Strays</option>
                            <option value="4" ${reen.idfaccion == 4 ? "selected" : ""}>Others</option>
                        </select>
                        <span class="error" id="error-idfaccion"></span>
                    </div>

                    <div class="formGroup">
                        <label>Trasfondo</label>
                        <textarea name="trasfondo">${reenDataOld?.trasfondo || reen.trasfondo}</textarea>
                        <span class="error" id="error-trasfondo"></span>
                    </div>

                    <div id="talentosContainer">${talentosHTML}</div>

                    <button type="button" id="addTalento">+ Añadir talento</button>
                </div>
            </div>
        </form>
    `;

    const backBtn = document.querySelector(".goBackReen");
    backBtn.addEventListener("click", () => {
        const returnTo = localStorage.getItem("reenReturn") || "profile";

        localStorage.setItem("currentSection", returnTo);
        setActiveMenu?.(returnTo);
        loadSection(returnTo);
    });

    inputImage();
    previewImage();
    talentosHandler();
    paintErrors(reenErrors);
}