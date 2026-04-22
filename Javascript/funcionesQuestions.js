import { terms, who } from "./questionsContent.js";

const questions = document.querySelector(".questions");
const frequestions = document.querySelector(".frequentlyQuestions");
const close = document.querySelector(".close");
const body = document.getElementsByTagName("body")[0];
const whoAreWe = document.querySelector(".whoAreWe");
const contentQuestions = document.querySelector(".contentQuestions");

function divEmergent() {
    frequestions.classList.add("show");
    body.style.overflowY = "hidden";
}

whoAreWe.addEventListener("click", () => {
    divEmergent()
    contentQuestions.innerHTML = who;

});

questions.addEventListener("click", () => {
    divEmergent()
    contentQuestions.innerHTML = terms;
});

close.addEventListener("click", () => {
    frequestions.classList.remove("show");
    body.style.overflowY = "visible";
});