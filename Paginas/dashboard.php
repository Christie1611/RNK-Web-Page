<?php
    session_start();
    include_once "../PHP/userController.php";

    $user = new UsuarioController();

    if (!isset($_SESSION["auth"])) {
        header("Location: login.php");
        exit;
    }

    $id = $_SESSION["auth"]["id"];
    $usuario = $_SESSION["auth"]["usuario"];

    $res = $user->listarReencarnados($id);
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
                    <li data-section="profile" class="active">Perfil</li>
                    <li data-section="edit">Editar perfil</li>
                    <li data-section="create">Crear personaje</li>
                    <li data-section="home">Inicio</li>
                    <li data-section="explore">Explorar</li>
                    <li data-section="logout">Cerrar sesión</li>
                    <li data-section="delete" class="danger">Eliminar cuenta</li>
                </ul>
            </div>

            <div id="content">
                <main class="mainContent" id="mainContent"></main>
            </div>  
        </section>

    <script type="module" src="../Javascript/main.js"></script>
    </body>
    <script>
        const userData = <?= json_encode($_SESSION["auth"]); ?>;
        const userErrors = <?= json_encode($_SESSION["errores"]); ?>;
        const userReen = <?= json_encode($res); ?>;
    </script>
</html>