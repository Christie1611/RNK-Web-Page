<?php
    session_start();
    $old = [];
    $errores = [];
     $error = "";

    if (isset($_GET["error"])) {
        $error = $_GET["error"];
    }

    if (isset($_SESSION["old"])) {
        $old = $_SESSION["old"];
        unset($_SESSION["old"]);
    }

    if (isset($_SESSION["errores"])) {
        $errores = $_SESSION["errores"];
        unset($_SESSION["errores"]);
    }

?>

<!DOCTYPE html>
    <head>
        <title>RNK</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="../Imagenes/NeumannLogo.png">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosLoginRegister.css">
        <link rel="stylesheet" type="text/css" href="../Estilos/estilosForm.css">
    </head>
    <body id="register">
        <section class="content">
            <form class="form" action="../PHP/validarUsers.php" method="POST">
                <a href="../Index.html" class="close">&#10005;</a>

                <div class="divNeon"></div>
                    <div class="divForm">
                        <div class="divFormImg"></div>
                        
                        <div>
                            <div class="formGroup">
                                <h1 class="titForm">Registro</h1>
                                <span class="error">
                                    <?php if ($error === "registro") {
                                        echo "El correo ya está registrado";
                                        // header('Refresh: 1.5; URL=login.php');
                                    }?>
                                </span>
                            </div>
                            <input type="hidden" name="action" value="registrar"/>

                            <div class="formGroup">
                                <label>Usuario</label>
                                <input type="text" name="usuario" placeholder="Usuario" value="<?= $old["usuario"] ?? "" ?>" required>
                                <span class="error">
                                    <?php if (!empty($errores['usuario'])): ?>
                                        <?php echo $errores['usuario']; ?>
                                    <?php endif; ?>
                                </span>
                            </div>

                            <div class="formGroup">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="Email" value="<?= $old["email"] ?? "" ?>" required>
                                <span class="error">
                                    <?php if (!empty($errores['email'])): ?>
                                        <?php echo $errores['email']; ?>
                                    <?php endif; ?>
                                </span>
                            </div>

                            <div class="formGroup">
                                <label>Contraseña</label>
                                <input type="password" name="contrasena" placeholder="Contraseña" value="<?= $old["contrasena"] ?? "" ?>" required>
                                <span class="error">
                                    <?php if (!empty($errores['contrasena'])): ?>
                                        <?php echo $errores['contrasena']; ?>
                                    <?php endif; ?>
                                </span>
                            </div>

                            <div class="formGroup">
                                <input type="submit" value="Registrarse" />
                                <p>¿Ya te registraste? <a class="link" href="login.php">Inicia Sesión</a></p>
                            </div>

                            <div class="message">
                                <p>
                                    Explora y descubre los Reencarnados hechos por la comunidad y crea tu propio
                                    personaje dentro del mundo de Petals of Reincarnation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </body>
</html>