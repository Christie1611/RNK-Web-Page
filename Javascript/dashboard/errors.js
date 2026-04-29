export function paintErrors(dataErrors) {
    Object.keys(dataErrors).forEach(key => {
        if (key.startsWith("talento_")) {
            const index = key.split("_")[1];
            const items = document.querySelectorAll(".talentoItem");

            if (items[index]) {
                const errorSpan = items[index].querySelector(".error-talento");
                if (errorSpan) {
                    errorSpan.textContent = dataErrors[key];
                }
            }
        } else if (key.startsWith("descripcion_")) {
            const index = key.split("_")[1];
            const items = document.querySelectorAll(".talentoItem");

            if (items[index]) {
                const errorSpan = items[index].querySelector(".error-descripcion");
                if (errorSpan) {
                    errorSpan.textContent = dataErrors[key];
                }
            }
        } else {
            const errorElement = document.querySelector(`#error-${key}`);
            if (errorElement && dataErrors[key]) {
                errorElement.textContent = dataErrors[key];
            }
        }
    });
}