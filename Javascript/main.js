const page = document.body.dataset.page;

switch (page) {
    case "index":
        import("./funcionesIndex.js");
        import("./funcionesQuestions.js");
        break;

    case "factions":
        import("./factions/factions.js");
        import("./funcionesQuestions.js");
        break;

/*
    case "forest":
        import ("./factions/forest.js");
        import ("./factions/funcionesFactions.js");
        import("./funcionesQuestions.js");
        break;

    case "sinners":
        import ("./factions/sinners.js");
        import ("./factions/funcionesFactions.js");
        import("./funcionesQuestions.js");
        break;

    case "others":
        import ("./factions/others.js");
        import ("./factions/funcionesFactions.js");
        import("./funcionesQuestions.js");
        break;

    case "strays":
        import ("./factions/strays.js");
        import ("./factions/funcionesFactions.js");
        import("./funcionesQuestions.js");
        break; */

    case "dashboard":
        import ("./dashboard/dashboard.js");
        break;
}