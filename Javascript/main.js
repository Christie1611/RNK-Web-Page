const page = document.body.dataset.page;

switch (page) {
    case "index":
        import("./funcionesIndex.js");
        import("./funcionesQuestions.js");
        break;

    case "forest":
        import ("./forest.js");
        import ("./funcionesFactions.js");
        import("./funcionesQuestions.js");
        break;

    case "sinners":
        import ("./sinners.js");
        import ("./funcionesFactions.js");
        import("./funcionesQuestions.js");
        break;

    case "others":
        import ("./others.js");
        import ("./funcionesFactions.js");
        import("./funcionesQuestions.js");
        break;

    case "strays":
        import ("./strays.js");
        import ("./funcionesFactions.js");
        import("./funcionesQuestions.js");
        break;

    case "dashboard":
        import ("./dashboard.js");
        break;
}