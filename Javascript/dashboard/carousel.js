// Scroll para los Reencarnados
export function infiniteCarousel() {
    const carousel = document.getElementById("reenCarousel");
    const leftBtn = document.getElementById("carouselLeft");
    const rightBtn = document.getElementById("carouselRight");

    if (!carousel) return;

    const cards = carousel.querySelectorAll(".reenCard");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + (1/100);
    let index = 0;

    function updateButtons() {
        const hasOverflow = carousel.scrollWidth > carousel.clientWidth;
        if (hasOverflow) {
            leftBtn.style.display = "flex";
            rightBtn.style.display = "flex";
        }
    }

    updateButtons();
    window.addEventListener("resize", updateButtons);

    rightBtn.addEventListener("click", () => {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScroll - 5) {
            carousel.scrollLeft = 0;
        } else {
            carousel.scrollLeft += cardWidth;
        }
    });

    leftBtn.addEventListener("click", () => {
        if (carousel.scrollLeft <= 5) {
            carousel.scrollLeft = carousel.scrollWidth;
        } else {
            carousel.scrollLeft -= cardWidth;
        }
    });

    carousel.style.scrollBehavior = "smooth";
}