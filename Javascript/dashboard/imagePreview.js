// PREVIEW DE IMAGEN
export function previewImage() {
    const input = document.getElementById("fileInput");
    const preview = document.getElementById("previewImage");

    input.addEventListener("change", () => {
        const file = input.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("El archivo no es una imagen");
            input.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
        }

        reader.readAsDataURL(file);
    });
}

export function inputImage() {
    const img = document.getElementById("previewImage");
    const input = document.getElementById("fileInput");

    img.addEventListener("click", () => {
        input.click();
    });
}