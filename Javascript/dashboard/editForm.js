import { talentosHandler, rebuildTalentos } from "./talents.js";
import { previewImage, inputImage } from "./imagePreview.js";
import { paintErrors } from "./errors.js";

const userErrors = window.userErrors;
const userData = window.userData;

// Contenido para editar el perfil
export function loadEditForm(content) {
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