<?php
    require_once "users.php";

class UsuarioController {
    public function registrar() {
        session_start();

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
            header("Location: ../Paginas/register.php?error=registro");// echo "El correo ya está registrado";
        }
    }

    public function login() {
        session_start();
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
            header("Location: ../Paginas/register.php?error=login"); // echo "Usuario o contraseña incorrectos";
        }
    }
}
?>