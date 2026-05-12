<?php
    session_start();
    include_once "../PHP/userController.php";
    include_once "../PHP/reenController.php";

    $user = new UsuarioController();
    $reenController = new ReenController();

    $erroresUsers = [];
    $reenDataOld = [];
    $reenEditOld = [];
    $erroresReenCreate = [];
    $erroresReenEdit = [];
    $reenAction = "";
    $reenEditId = "";

    if (!isset($_SESSION["auth"])) {
        header("Location: ../index.php");
        exit;
    }

    if (isset($_SESSION["errores"])) {
        $erroresUsers = $_SESSION["errores"];
        unset($_SESSION["errores"]);
    }

    if (isset($_SESSION["oldReen"])) {
        $reenDataOld = $_SESSION["oldReen"];
        unset($_SESSION["oldReen"]);
    }

    if (isset($_SESSION["oldReenEdit"])) {
        $reenEditOld = $_SESSION["oldReenEdit"];
        unset($_SESSION["oldReenEdit"]);
    }

    if (isset($_SESSION["erroresReenCreate"])) {
        $erroresReenCreate = $_SESSION["erroresReenCreate"];
        unset($_SESSION["erroresReenCreate"]);
    }

    if (isset($_SESSION["erroresReenEdit"])) {
        $erroresReenEdit = $_SESSION["erroresReenEdit"];
        unset($_SESSION["erroresReenEdit"]);
    }

    if (isset($_SESSION["reenAction"])) {
        $reenAction = $_SESSION["reenAction"];
        unset($_SESSION["reenAction"]);
    }

    if (isset($_SESSION["reenEditId"])) {
        $reenEditId = $_SESSION["reenEditId"];
        unset($_SESSION["reenEditId"]);
    }

    $id = $_SESSION["auth"]["id"];
    $usuario = $_SESSION["auth"]["usuario"];

    $contReen = $user->listarCantReencarnados($id);
    $listaReen = $user->listarReencarnados($id);

    $exploreReen = $reenController->explorar();
?>

<!DOCTYPE html>
    <head>
        <title>RNK</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="../Imagenes/NeumannLogo.png">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosDashboard.css">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosMenu.css">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosForm.css">
    </head>
    <body id="dashboard" data-page="dashboard">
        <button class="menuToggle" id="menuToggle">☰</button>
        <div class="menuOverlay" id="menuOverlay"></div>

        <section class="layout">
            <div class="divMenu">
                <h2 id="user"><?= $usuario === "" ? "Usuario" : $usuario?></h2>
                <ul class="menu">
                    <li data-section="home">Inicio</li>
                    <li>
                        <a>Facciones</a>
                        <ul class="submenu">
                            <li><a href="Factions.php?section=forest" data-section="forest">Greats</a></li>
                            <li><a href="Factions.php?section=sinners" data-section="sinners">Sinners</a></li>
                            <li><a href="Factions.php?section=strays" data-section="strays">Strays</a></li>
                            <li><a href="Factions.php?section=others" data-section="others">Others</a></li>
                        </ul>
                    </li>
                    <li data-section="explore">Explorar</li>
                    <li data-section="profile" class="active">Perfil</li>
                    <li data-section="edit">Editar perfil</li>
                    <li data-section="create">Crear personaje</li>
                    <li data-section="logout">Cerrar sesión</li>
                    <li data-section="delete" class="danger">Eliminar cuenta</li>
                </ul>
            </div>

            <div id="content">
                <main class="mainContent" id="mainContent"></main>
            </div> 

            <?php if (isset($_SESSION["flash"])): ?>
                <div class="flashContainer">
                    <div class="flash <?= $_SESSION["flash"]["type"] === "success" ? "flashSuccess" : "flashError" ?>">
                        <span class="flashText">
                            <?= $_SESSION["flash"]["message"] ?>
                        </span>
                        <button class="flashClose">&times;</button>
                    </div>
                </div>
                <?php unset($_SESSION["flash"]); ?>
            <?php endif; ?>
        </section>

    <script type="module" src="../Javascript/main.js"></script>
    </body>
    <script>
        window.userReen = <?= json_encode($listaReen ?? []); ?>;
        window.exploreReen = <?= json_encode($exploreReen ?? []); ?>;
        window.userData = <?= json_encode($_SESSION["auth"] ?? null); ?>;
        window.userErrors = <?= json_encode($erroresUsers); ?>;
        window.userCantReen = <?= json_encode($contReen); ?>;
        window.reenDataOld = <?= json_encode($reenDataOld); ?>;
        window.reenEditOld = <?= json_encode($reenEditOld); ?>;
        window.erroresReenCreate = <?= json_encode($erroresReenCreate); ?>;
        window.erroresReenEdit = <?= json_encode($erroresReenEdit); ?>;
        window.reenAction = <?= json_encode($reenAction); ?>;
        window.reenEditId = <?= json_encode($reenEditId); ?>;
    </script>
</html>