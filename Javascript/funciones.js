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