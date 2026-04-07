const menu = document.querySelector(".divMenu");
const video = document.querySelector(".video-container");

window.addEventListener("scroll", () => {
    const videoEnd = video.offsetHeight - (video.offsetHeight * 0.12); //129.6;

    if (window.scrollY < videoEnd) {
        menu.classList.add("no-blur");
        menu.classList.remove("blur");
    } else {
        menu.classList.add("blur");
        menu.classList.remove("no-blur");
    }
});

const imagesGallery = [
    "Imagenes/Gallery-1.png",
    "Imagenes/Gallery-2.png",
    "Imagenes/Gallery-3.png",
    "Imagenes/Gallery-4.png",
    "Imagenes/Gallery-5.png",
    "Imagenes/Gallery-6.png",
    "Imagenes/Gallery-7.png",
    "Imagenes/Gallery-8.png",
    "Imagenes/Gallery-9.png",
    "Imagenes/Gallery-10.png",
    "Imagenes/Gallery-11.png",
    "Imagenes/Gallery-12.png",
    "Imagenes/Gallery-13.png",
    "Imagenes/Gallery-14.png",
    "Imagenes/Gallery-15.png",
    "Imagenes/Gallery-16.png"
]

let index = 0;

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const thumbnail = document.querySelectorAll(".thumbnails img");

let current = img1;
let nextImg = img2;

function updateImage() {
    nextImg.src = imagesGallery[index];

    nextImg.classList.add("active");
    current.classList.remove("active");

    [current, nextImg] = [nextImg, current];

    thumbnail.forEach(img => img.classList.remove("active"));
    thumbnail[index].classList.add("active");
    
}

next.addEventListener("click", () => {
    index = (index + 1) % imagesGallery.length;
    updateImage();
});

prev.addEventListener("click", () => {
    index = (index - 1 + imagesGallery.length) % imagesGallery.length;
    updateImage();
});

thumbnail.forEach((img, cont) => {
    img.addEventListener("click", () => {
        index = cont;
        updateImage();
    })
});

updateImage();