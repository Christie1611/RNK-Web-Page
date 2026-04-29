// MENSAJE PARA LOS FORMUARIOS
// Nota personal, NUNCA usar DOMContentLoaded PORQUE POR ALGÚN MOTIVO NO ME FUNCIONA.
export function flashMessages() {
    document.querySelectorAll(".flash").forEach(flash => {
        setTimeout(() => removeFlash(flash), 4000);
    });

    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".flashClose");
        if (!btn) return;

        const flash = btn.closest(".flash");
        if (!flash) return;

        removeFlash(flash);
    });
}

function removeFlash(flash) {
    flash.classList.add("hide");

    setTimeout(() => {
        flash.remove();
    }, 400);
}