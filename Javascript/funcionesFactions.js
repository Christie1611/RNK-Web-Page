const links = document.querySelectorAll(".menu li > a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        const submenu = link.nextElementSibling;

        if (submenu && submenu.classList.contains("submenu")) {
            e.preventDefault();

            submenu.classList.toggle("open");
        }
    })
})