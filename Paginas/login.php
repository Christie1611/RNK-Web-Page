<!DOCTYPE html>
    <head>
        <title>RNK</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="../Imagenes/NeumannLogo.png">
    </head>
    <body id="login">
        <form action="../PHP/authController.php" method="POST">
            <input type="text" name="usuario" placeholder="Usuario" required>
            <input type="password" name="contrasena" placeholder="Contraseña" required>

            <button type="submit" name="accion" value="login">
                Iniciar sesión
            </button>
            <p>¿Todavía no has iniciado sesión? <a href="registro.php">Regístrate</a></p>
        </form>
    </body>
</html>