const userReen = window.userReen;
const content = document.getElementById("mainContent");

export function reenProfileHandler() {
    const cards = document.querySelectorAll(".reenCard");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            const reen = userReen.find(r => r.idreencarnado == id);

            if (reen) {
                loadReenProfile(id);
            }
        });
    });
}

function loadReenProfile(reenId) {
    let currentIndex = userReen.findIndex(r => r.idreencarnado == reenId);
    if (currentIndex === -1) return;
    renderReenProfile(userReen[currentIndex]);
    attachSliderEvents();

    function attachSliderEvents() {
        const prevBtn = document.getElementById("prevReen");
        const nextBtn = document.getElementById("nextReen");

        nextBtn.addEventListener("click", () => {
            const newIndex = (currentIndex + 1) % userReen.length;
            animateReenChange(newIndex);
        });

        prevBtn.addEventListener("click", () => {
            const newIndex = (currentIndex - 1 + userReen.length) % userReen.length;
            animateReenChange(newIndex);
        });
    }

    function animateReenChange(newIndex) {
        const image = document.querySelector(".reenProfileImage");
        const contentBox = document.querySelector(".reenContent");
        const mainInfo = document.querySelector(".reenMainInfo");

        image.classList.add("imgTrans");
        contentBox.classList.add("textTrans");
        mainInfo.classList.add("textTrans");

        setTimeout(() => {
            currentIndex = newIndex;
            renderReenProfile(userReen[currentIndex]);
            attachSliderEvents();

            const newImage = document.querySelector(".reenProfileImage");
            const newContent = document.querySelector(".reenContent");
            const mainInfo = document.querySelector(".reenMainInfo");

            newImage.classList.add("imgIn");
            newContent.classList.add("textOut");
            mainInfo.classList.add("textOut");

            setTimeout(() => {
                newImage.classList.remove("imgIn");
                newContent.classList.remove("textOut")
                mainInfo.classList.remove("textOut");;
            }, 300);

        }, 300);
    }
}

function renderReenProfile(reen) {
    let talentosHTML = "";
    const reenImage = (reen.diseno && reen.diseno !== null)
        ? `../reen/${reen.diseno}`
        : "../uploads/defaultImage.png";

    if (reen.talentos && reen.talentos.length > 0) {
        reen.talentos.forEach(talento => {
            talentosHTML += `
                <div class="talentCard">
                    <h3>${talento.talento}</h3>
                    ${talento.descripcion ? `<p>${talento.descripcion}</p>` : ""}
                </div>
            `;
        });
    }

    content.innerHTML = `
        <div class="reenProfile">
            <div class="reenBanner"></div>
            <div class="reenTop">
                <div class="reenImageContainer">
                    <img class="reenProfileImage" src="${reenImage}">
                </div>

                <div class="reenMainInfo">
                    <h1 class="reenProfileName">
                        ${reen.nombre}
                    </h1>

                    <div class="factionBadge faction-${reen.idfaccion}">
                        ${getFactionName(reen.idfaccion)}
                    </div>
                </div>
            </div>

            <div class="reenContent">
                <div class="reenLoreCard">
                    <h2>Trasfondo</h2>
                    <p>
                        ${reen.trasfondo || "Sin trasfondo"}
                    </p>
                </div>

                <div class="reenTalentsSection">
                    <h2>Talentos</h2>
                    <div class="talentsList">
                        ${talentosHTML}
                    </div>
                </div>
            </div>
        <button class="sliderBtn sliderLeft prev" id="prevReen">&#10094;</button>
        <button class="sliderBtn sliderRight next" id="nextReen">&#10095;</button>
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