const page = document.body.dataset.page;

switch (page) {
    case "index":
        import("./index/funcionesIndex.js");
        import("./questions/funcionesQuestions.js");
        break;

    case "factions":
        import("./factions/factions.js");
        import("./questions/funcionesQuestions.js");
        break;
        
    case "dashboard":
        import ("./dashboard/dashboard.js");
        break;
}