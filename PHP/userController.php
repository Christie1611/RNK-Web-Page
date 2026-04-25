<?php
    require_once "users.php";

class UsuarioController {
    public function registrar() {
        session_start();

        $usuario = new Usuario(
            null,
            $_POST['usuario'],
            $_POST['email'],
            $_POST['contrasena']
        );

        $res = $usuario->registrar();

        if ($res) {
            $_SESSION["auth"] = [
                "id" => $res["id"],
                "usuario" => $res["usuario"],
                "email" => $res["email"],
                "contrasena" => $res["contrasena"],
                "imagen" => $res["imagen"],
                "descripcion" => $res["descripcion"]
            ];
            header("Location: ../Paginas/dashboard.php");
        } else {
            header("Location: ../Paginas/register.php?error=registro"); // echo "El correo ya está registrado";
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
            $_SESSION["auth"] = [
                "id" => $res["id"],
                "usuario" => $res["usuario"],
                "email" => $res["email"],
                "contrasena" => $res["contrasena"],
                "imagen" => $res["imagen"],
                "descripcion" => $res["descripcion"]
            ];
            header("Location: ../Paginas/dashboard.php");
        } else {
            header("Location: ../Paginas/login.php?error=login"); // echo "Usuario o contraseña incorrectos";
        }
    }

    public function listarReencarnados($id) {
        $usuario = new Usuario($id);

        $res = $usuario->listarReencarnados();

        if ($fila = $res->fetch_assoc()) {
            return $fila["Reencarnados"];
        }
    }

    public function modificar() {
        session_start();
        $id = $_SESSION["auth"]["id"];

        $usuario = new Usuario(
            $id,
            $_POST["usuario"],
            $_POST["email"],
            $_POST["contrasena"],
            null,
            $_POST["descripcion"]
        );

        $res = $usuario->modificar($_FILES["imagen"]);

        if ($res) {
            $_SESSION["auth"]["usuario"] = $_POST["usuario"];
            $_SESSION["auth"]["email"] = $_POST["email"];
            $_SESSION["auth"]["imagen"] = $usuario->_get("imagen");
            $_SESSION["auth"]["descripcion"] = $_POST["descripcion"];

            header("Location: ../Paginas/dashboard.php");
        } else {
            header("Location: ../Paginas/dashboard.php?error=update");
        }
    }
}
?>