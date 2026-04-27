<?php
require_once "reen.php";

class ReenController {
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
            $_SESSION["flash"] = [
                "type" => "success",
                "message" => "Usuario registrado correctamente"
            ];

            $_SESSION["auth"] = [
                "id" => $res["id"],
                "usuario" => $res["usuario"],
                "email" => $res["email"],
                "contrasena" => $res["contrasena"],
                "imagen" => $res["imagen"],
                "descripcion" => $res["descripcion"]
            ];

            header("Location: ../Paginas/dashboard.php");
            exit;
        }

        $_SESSION["flash"] = [
            "type" => "error",
            "message" => "El correo ya está registrado"
        ];

        header("Location: ../Paginas/register.php");
        exit;
    }

    public function modificar() {
        session_start();

        $id = $_SESSION["auth"]["id"];

        $usuario = new Usuario(
            $id,
            $_POST["usuario"],
            $_POST["email"],
            $_POST["contrasena"] ?? null,
            null,
            $_POST["descripcion"]
        );

        $res = $usuario->modificar($_FILES["imagen"] ?? null);

        if ($res["success"]) {
            $_SESSION["auth"]["usuario"] = $_POST["usuario"];
            $_SESSION["auth"]["email"] = $_POST["email"];
            $_SESSION["auth"]["imagen"] = $res["imagen"];
            $_SESSION["auth"]["descripcion"] = $_POST["descripcion"];

            $_SESSION["flash"] = [
                "type" => "success",
                "message" => $res["message"]
            ];

            header("Location: ../Paginas/dashboard.php");
            exit;
        }

        $_SESSION["flash"] = [
            "type" => "error",
            "message" => $res["message"] ?? "Error al actualizar"
        ];

        header("Location: ../Paginas/dashboard.php");
        exit;
    }

    public function borrar($id) {
        $usuario = new Usuario();
        $usuario->borrar($id);
    }
}
?>