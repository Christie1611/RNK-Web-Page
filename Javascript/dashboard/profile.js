import { infiniteCarousel } from "./carousel.js";
import { reenProfileHandler } from "./reenProfile.js";

const userData = window.userData;
const userReen = window.userReen;
const userCantReen = window.userCantReen;

// Contenido para cargar el perfil
export function loadProfile(content) {
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