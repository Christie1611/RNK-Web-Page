<?php
    session_start();
    require_once "usuarios.php";

    if ($_POST['accion'] == "registrar") {

        $usuario = new Usuario(
            null,
            $_POST['usuario'],
            $_POST['email'],
            password_hash($_POST['contrasena'], PASSWORD_DEFAULT)
        );

        $res = $usuario->registrar();

        if ($res) {
            $_SESSION['usuario'] = $res;
            header("Location: ../Index.html");
        } else {
            echo "El correo ya está registrado";
        }
    }

    if ($_POST['accion'] == "login") {

        $usuario = new Usuario(
            null,
            $_POST['usuario'],
            null,
            $_POST['contrasena']
        );

        $res = $usuario->login();

        if ($res) {
            $_SESSION['usuario'] = $res;
            header("Location: ../Index.html");
        } else {
            echo "Usuario o contraseña incorrectos";
        }
    }
?>