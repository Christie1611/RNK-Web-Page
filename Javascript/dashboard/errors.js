export function paintErrors(dataErrors) {
    Object.keys(dataErrors).forEach(key => {
        let errorElement = null;

        if (key.startsWith("talento_")) {
            const index = key.split("_")[1];
            const items = document.querySelectorAll(".talentoItem");

            if (items[index]) {
                errorElement = items[index].querySelector(".error-talento");
            }
        } else if (key.startsWith("descripcion_")) {
            const index = key.split("_")[1];
            const items = document.querySelectorAll(".talentoItem");

            if (items[index]) {
                errorElement = items[index].querySelector(".error-descripcion");
            }
        } else {
            errorElement = document.querySelector(`#error-${key}`);
        }

        if (errorElement && dataErrors[key]) {
            errorElement.textContent = dataErrors[key];
            errorElement.style.opacity = "1";
            setTimeout(() => {
                errorElement.style.opacity = "0";
                setTimeout(() => {
                    errorElement.textContent = "";
                }, 300);
            }, 2000);
        }
    });
}