<!DOCTYPE html>
    <head>
        <title>RNK</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="../Imagenes/NeumannLogo.png">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosLoginRegister.css">
    </head>
    <body id="register">
        <section class="content">
            <form class="form" action="../PHP/validarUsers.php" method="POST">
                <a href="../Index.html" class="close">&#10005;</a>

                <div class="divNeon"></div>
                    <div class="divForm">
                        <div class="divFormImg"></div>
                        
                        <div>
                            <h1 class="titForm">Registro</h1><br>
                            <input type="hidden" name="action" value="registrar"/>

                            <label>Usuario</label><br>
                            <input type="text" name="usuario" placeholder="Usuario" required>

                            <label>Email</label><br>
                            <input type="email" name="email" placeholder="Email" required>

                            <label>Contraseña</label><br>
                            <input type="password" name="contrasena" placeholder="Contraseña" required>

                            <input type="submit" value="Registrarse" />
                            <p>¿Ya te registraste? <a class="link" href="login.php">Inicia Sesión</a></p>

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
                </div>
            </form>
        </section>
    </body>
</html>