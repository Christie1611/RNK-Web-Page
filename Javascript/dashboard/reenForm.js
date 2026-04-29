import { talentosHandler, rebuildTalentos } from "./talents.js";
import { previewImage, inputImage } from "./imagePreview.js";
import { paintErrors } from "./errors.js";

const reenDataOld = window.reenDataOld;
const reenErrors = window.reenErrors;

// Contenido para crear a los Reencarnados
export function loadReenForm(content) {
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
                                <textarea name="descripcionTalento[]" placeholder="Descripción"></textarea>
                                
                                <span class="error" id="error-talento"></span>
                                <span class="error" id="error-descripcion"></span>

                                <span class="error error-talento"></span>
                                <span class="error error-descripcion"></span>
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