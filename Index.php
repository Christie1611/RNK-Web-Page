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
        <link rel="icon" type="image/png" href="Imagenes/NeumannLogo.png">
        <link rel="stylesheet" type="text/css" href="Estilos/estilosIndex.css">
        <link rel="stylesheet" type="text/css" href="Estilos/estilosQuestions.css">
    </head>
    <body id="index" data-page="index">
        <nav class="divMenu">
            <ul class="menu">
                <!--<li><a href="">&#9654;</a></li>-->
                <li class="whoAreWe">¿?</li>
                <li><a href="Index.php#story">Historia</a></li>
                <li><a href="Index.php#factions">Facciones</a></li>
                <li><a href="Index.php#gallery">Galeria</a></li>
                <!--<li><a>Crear</a></li>-->
                <li><a href="<?= isset($_SESSION["auth"]["usuario"]) ? "Paginas/dashboard.php" : "Paginas/login.php" ?>">
                <?= $usuario === "" ? "Iniciar Sesión" : "Perfil" ?></a></li>
            </ul>
        </nav>
        <div class="video-container">
            <video autoplay muted loop>
                <source src="Imagenes/Reincarnation no Kaben _ Official Trailer _ HD (2).mp4" type="video/mp4" />
            </video>
        </div>
        <div id="story">
            <div class="dividerTitle"><div>Historia</div></div>
        </div>
        <section id="content">
            <div class="sect">
                <div class="divStory">
                    <p class="cite">"¡Confía en ti mismo! No eres tan mediocre como crees. Tu Talento despertará 
                        eventualmente, solo que todavía está durmiendo"</p>
                        <p class="cite">&#8212;Petals of Reincarnation</p><br>

                    <p>La historia sigue la vida de Senji Touya, un chico obsesionado con conseguir lo que él 
                    llama "Talento". Se trata de un nivel que no se puede alcanzar con solo trabajo duro, 
                    ni siquiera entrenando toda tu vida, un privilegio que solo lo pueden obtener aquellos
                    que son considerados genios. No obstante, su vida daría un giro de 180 grados cuando una
                    compañera de clase que no veía desde hace mucho tiempo, Haito Le Buffett, una chica que
                    posee un gran Talento con la espada, quien le revela que la razón detrás de su habilidad
                    es gracias a la Reencarnación.</p><br>

                    <p>Los héroes y genios extraordinarios de todos los tiempos mueren eventualmente, son humanos, 
                    pero gracias a que ellos mueren, sus almas transmigran, y el Talento de esas grandes personas 
                    renace en la actualidad, siendo posible extraer el Talento de tu vida pasada por medio de unos
                    pequeños cuchillos conocidos como Ramas de la Reencarnación, y aquellos que consiguen renacer 
                    son conocidos como Reencarnados.</p><br>

                    <p>La única condición para convertirte en un Reencarnado es tener el valor de cortar tu cuello
                    para dejar atrás la vida que has estado llevando hasta ahora.</p>
                </div>
            </div>
        </section>

        <div id="factions">
            <div class="dividerTitle"><div>Facciones</div></div>
        </div>
        <section id="content">
            <div class="sect">
                <div class="cont">
                    <a href="Paginas/Factions.php?section=forest">
                        <div class="reen forest">
                            <div class="textreen">Greats</div>
                        </div>
                    </a>
                    <a href="Paginas/Factions.php?section=sinners">
                        <div class="reen sinners">
                            <div class="textreen">Sinners</div>
                        </div>
                    </a>
                </div><br class="sep">
                <div class="cont">
                    <a href="Paginas/Factions.php?section=strays">
                        <div class="reen strays">
                            <div class="textreen">Strays</div>
                        </div>
                    </a>
                    <a href="Paginas/Factions.php?section=others">
                        <div class="reen others">
                            <div class="textreen">Others</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <div id="gallery">
            <div class="dividerTitle"><div>Galeria</div></div>
        </div>
        <section id="content">
            <div class="sect">
                <div class="divCarousel">
                    <div class="carousel">
                        
                        <img id="img1" class="active" src="Imagenes/Gallery-1.png" alt="">
                        <img id="img2" src="Imagenes/Gallery-1.png">

                        <button class="prev">&#9664;</button>
                        <button class="next">&#9654;</button>
                    </div>
                </div>

                <div class="thumbnails">
                    <img src="Imagenes/Gallery-1.png" class="active" alt="">
                    <img src="Imagenes/Gallery-2.png" alt="">
                    <img src="Imagenes/Gallery-3.png" alt="">
                    <img src="Imagenes/Gallery-4.png" alt="">
                    <img src="Imagenes/Gallery-5.png" alt="">
                    <img src="Imagenes/Gallery-6.png" alt="">
                    <img src="Imagenes/Gallery-7.png" alt="">
                    <img src="Imagenes/Gallery-8.png" alt="">
                    <img src="Imagenes/Gallery-9.png" alt="">
                    <img src="Imagenes/Gallery-10.png" alt="">
                    <img src="Imagenes/Gallery-11.png" alt="">
                    <img src="Imagenes/Gallery-12.png" alt="">
                    <img src="Imagenes/Gallery-13.png" alt="">
                    <img src="Imagenes/Gallery-14.png" alt="">
                    <img src="Imagenes/Gallery-15.png" alt="">
                    <img src="Imagenes/Gallery-16.png" alt="">
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="imglogoIndex">
                <a href="Index.php#index"><img src="Imagenes/RNKLogo.png"></a>
            </div>
            <div>
                <span class="copyright">&#169; Mikihisa Konishi / Mag Garden&#x2022;Comité de Producción de "Reincarnation no Kaben"</span>
            </div>
            <!-- <div class="users">
                <span>Iniciar Sesión</span>
            </div>-->
        </footer>

        <div class="questions">
            <img src="Imagenes/Root3.png" alt="">
        </div>

        <div class="frequentlyQuestions">
            <span class="close">&#10005;</span>
            <div class="box">
                <div class="inner">
                    <div class="contentQuestions"></div>
                </div>
            </div>
        </div>
        
        <script type="module" src="Javascript/main.js"></script>
    </body>
</html>