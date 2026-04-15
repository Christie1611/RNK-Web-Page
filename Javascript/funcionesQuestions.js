const questions = document.querySelector(".questions");
const frequestions = document.querySelector(".frequentlyQuestions");
const close = document.querySelector(".close");
const body = document.getElementsByTagName("body")[0];

questions.addEventListener("click", () => {
    frequestions.classList.add("show");
    body.style.overflowY = "hidden";
});

close.addEventListener("click", () => {
    frequestions.classList.remove("show");
    body.style.overflowY = "visible";
})