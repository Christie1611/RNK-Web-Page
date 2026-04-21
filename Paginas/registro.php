<!DOCTYPE html>
    <head>
        <title>RNK</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="../Imagenes/NeumannLogo.png">
    </head>
    <body id="register">
        <form action="../PHP/authController.php" method="POST">
            <input type="text" name="usuario" placeholder="Usuario" required>
            <input type="email" name="email" placeholder="Correo" required>
            <input type="password" name="contrasena" placeholder="Contraseña" required>

            <button type="submit" name="accion" value="registrar">
                Registrarse
            </button>
        </form>
    </body>
</html>