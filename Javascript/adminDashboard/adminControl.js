export function loadAdminControl(content){

    content.innerHTML = `
        <section class="adminHero">
            <h1>NEUMANN CONTROL CENTER</h1>
            <div class="statsGrid">
                <div class="statCard">
                    <h2>${adminStats.usuarios}</h2>
                    <span>Usuarios</span>
                </div>

                <div class="statCard">
                    <h2>${adminStats.reencarnados}</h2>
                    <span>Reencarnados</span>
                </div>

                <div class="statCard">
                    <h2>${adminStats.subfacciones}</h2>
                    <span>Subfacciones</span>
                </div>
            </div>
        </section>
    `;
}