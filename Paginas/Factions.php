<?php
    session_start();

    $usuario = "";

    if (isset($_SESSION["auth"]["usuario"])) {
        $usuario = $_SESSION["auth"]["usuario"];
    }
?>

<!DOCTYPE html>
    <head>
        <title>RNK</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="../Imagenes/NeumannLogo.png">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosFactions.css">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosQuestions.css">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosMenu.css">
    </head>
    <body id="factions" data-page="factions">
        <section class="layout">
            <div class="divMenu">
                <!--<img src="../Imagenes/RNKLogo.png" alt="">-->
                <h2 id="user"><?= $usuario === "" ? "Usuario" : $usuario?></h2>
                <!--<p class="cite">"Death is not the end"</p>-->
                <ul class="menu">
                    <li><a href="../Index.php#index">Inicio</a></li>
                    <li><a href="../Index.php#story">Historia</a></li>
                    <li>
                        <a href="#" class="faction">Facciones</a>
                        <ul class="submenu">
                            <li><a href="?section=forest" data-section="forest">Greats</a></li>
                            <li><a href="?section=sinners" data-section="sinners">Sinners</a></li>
                            <li><a href="?section=strays" data-section="strays">Strays</a></li>
                            <li><a href="?section=others" data-section="others">Others</a></li>
                        </ul>
                    </li>
                    <li><a href="../Index.php#gallery">Galeria</a></li>
                    <li><a href="<?= isset($_SESSION["auth"]["usuario"]) ? "dashboard.php" : "login.php" ?>" 
                    onclick="localStorage.setItem('currentSection','profile')">
                    <?= $usuario === "" ? "Iniciar Sesión" : "Perfil" ?></a></li>
                </ul>
                <div class="copyright">&#169; Mikihisa Konishi / Mag Garden&#x2022;Comité de Producción de <br>"Reincarnation no Kaben"</div>
            </div>
            <div id="content">
                <div id="factionContent"></div>
            </div>
        </section>

        <div class="questions">
            <img src="../Imagenes/Root3.png" alt="">
        </div>

        <div class="frequentlyQuestions">
            <span class="close">&#10005;</span>
            <div class="box">
                <div class="inner">
                    <div class="contentQuestions"></div>
                </div>
            </div>
        </div>

        <script type="module" src="../Javascript/main.js"></script>
    </body>
</html>