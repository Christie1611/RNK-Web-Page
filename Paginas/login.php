<!DOCTYPE html>
    <head>
        <title>RNK</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="../Imagenes/NeumannLogo.png">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosLoginRegister.css">
    </head>
    <body id="login">
        <section class="content">
            <form class="form" action="../PHP/validarUsers.php" method="POST">
                <a href="../Index.html" class="close">&#10005;</a>

                <div class="divNeon"></div>
                <div class="divForm">
                    <div class="divFormImg"></div>
                    
                    <div>
                        <h1>Inicio de Sesión</h1><br>
                        <input type="hidden" name="action" value="login">

                        <label>Usuario</label><br>
                        <input type="text" name="usuario" placeholder="Usuario" required>

                        <label>Contraseña</label><br>
                        <input type="password" name="contrasena" placeholder="Contraseña" required>

                        <input type="submit" value="Iniciar Sesión" />
                        <p>¿Todavía no has iniciado sesión? <a class="link" href="register.php">Regístrate</a></p>

                        <br>
                        <div>
                            <p>
                                Explora y descubre los Reencarnados hechos por la comunidad, desarrolla tu propio
                                personaje dentro del mundo de Petals of Reincarnation; créale un trasfondo,
                                un diseño, un Talento y cuéntanos el personaje histórico en el que se basa. 
                                Puedes hacer todo esto aquí.
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </body>
</html>