const page = document.body.dataset.page;

if (page === "index") {
    import("./funcionesIndex.js");
    import("./funcionesQuestions.js");
}

if (page === "forest") {
    import ("./forest.js");
}

if (page === "sinners") {
    import ("./sinners.js");
}

if (page === "others") {
    import ("./others.js");
}

if (page === "strays") {
    import ("./strays.js");
}

if (page === "forest" || page === "sinners" || page === "others" || page === "strays") {
    import ("./funcionesFactions.js");
    import("./funcionesQuestions.js");
}

