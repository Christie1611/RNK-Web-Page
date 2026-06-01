<?php
    session_start();
    include_once "../PHP/userController.php";
    include_once "../PHP/reenController.php";
    include_once "../PHP/subController.php";

    $userController = new UsuarioController();
    $reenController = new ReenController();
    $subController = new SubController();

    if (!isset($_SESSION["auth"])) {
        header("Location: ../Index.php");
        exit;
    }

    if ($_SESSION["auth"]["rol"] !== "admin") {
        header("Location: dashboard.php");
        exit;
    }

    $totalUsuarios = $userController->contarUsuarios();
    $totalReen = $reenController->contarReencarnados();
    $listaUsuarios = $userController->listarUsuarios();
    $listaReen = $reenController->explorar();
    $listaSub = $subController->listarSubfacciones();
?>

<!DOCTYPE html>
    <head>
        <title>RNK</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="../Imagenes/NeumannLogo.png">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosAdmin.css">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosMenu.css">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosModalFlash.css">
    </head>
    <body id="admin" data-page="admin">
        <button class="menuToggle" id="menuToggle">☰</button>
        <div class="menuOverlay" id="menuOverlay"></div>

        <section class="layout">
            <div class="divMenu">
                <h2 id="user"><?= $_SESSION["auth"]["usuario"] ?></h2>
                <ul class="menu">
                    <li data-section="home">Inicio</li>
                    <li data-section="control" class="active">Centro de Control</li>
                    <li data-section="users">Usuarios</li>
                    <li data-section="reencarnados">Reencarnados</li>
                    <li data-section="subfacciones">Subfacciones</li>
                    <li data-section="logout">Cerrar sesión</li>
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
    window.adminStats = {
        usuarios: <?= $totalUsuarios ?>,
        reencarnados: <?= $totalReen ?>,
        subfacciones: <?= count($listaSub) ?>
    };

    window.adminUsers = <?= json_encode($listaUsuarios) ?>;
    window.adminReen = <?= json_encode($listaReen) ?>;
    window.adminSubfacciones = <?= json_encode($listaSub) ?>;
    window.currentAdminId = <?= $_SESSION["auth"]["id"] ?>;
    </script>
</html>