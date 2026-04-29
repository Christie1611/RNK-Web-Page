<?php
    session_start();
    include_once "../PHP/userController.php";

    $user = new UsuarioController();

    $erroresUsers = [];
    $reenDataOld = [];
    $erroresRen = [];

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

    if (isset($_SESSION["erroresReen"])) {
        $erroresRen = $_SESSION["erroresReen"];
        unset($_SESSION["erroresReen"]);
    }

    $id = $_SESSION["auth"]["id"];
    $usuario = $_SESSION["auth"]["usuario"];

    $contReen = $user->listarCantReencarnados($id);
    $listaReen = $user->listarReencarnados($id);
    
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
        <section class="layout">
            <div class="divMenu">
                <h2 id="user"><?= $usuario === "" ? "Usuario" : $usuario?></h2>
                <ul class="menu">
                    <li data-section="home">Inicio</li>
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
        window.userData = <?= json_encode($_SESSION["auth"]); ?>;
        window.userErrors = <?= json_encode($erroresUsers); ?>;
        window.userCantReen = <?= json_encode($contReen); ?>;
        window.userReen = <?= json_encode($listaReen); ?>;
        window.reenDataOld = <?= json_encode($reenDataOld); ?>;
        window.reenErrors = <?= json_encode($erroresRen); ?>;
    </script>
</html>