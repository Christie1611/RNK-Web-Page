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
            $_SESSION["flash"] = [
                "type" => "success",
                "message" => "Usuario registrado correctamente"
            ];

            $_SESSION["auth"] = $res;

            if ($res["rol"] === "admin") {
                header("Location: ../Paginas/adminDashboard.php");
            } else {
                header("Location: ../Paginas/dashboard.php");
            }

            exit;
        }

        $_SESSION["flash"] = [
            "type" => "errorRegister",
            "message" => "El email ya está registrado"
        ];

        $_SESSION["old"] = array_map(function($value) {
            return is_string($value) ? trim(strip_tags($value)) : $value;
        }, $_POST);

        header("Location: ../Paginas/register.php");
        exit;
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
            $_SESSION["flash"] = [
                "type" => "success",
                "message" => "Bienvenido/a " . $res["usuario"]
            ];

            $_SESSION["auth"] = $res;

            if ($res["rol"] === "admin") {
                header("Location: ../Paginas/adminDashboard.php");
            } else {
                header("Location: ../Paginas/dashboard.php");
            }

            exit;
        }

        $_SESSION["flash"] = [
            "type" => "errorLogin",
            "message" => "Usuario o contraseña incorrectos"
        ];

        $_SESSION["old"] = array_map(function($value) {
            return is_string($value) ? trim(strip_tags($value)) : $value;
        }, $_POST);

        header("Location: ../Paginas/login.php");
        exit;
    }

    public function contarUsuarios() {
        $usuario = new Usuario();
        return $usuario->contarUsuarios();
    }

    public function listarUsuarios() {
        $usuario = new Usuario();
        return $usuario->listarUsuarios();
    }

    public function listarCantReencarnados($id) {
        $usuario = new Usuario($id);

        $res = $usuario->listarCantReencarnados();

        if ($fila = $res->fetch_assoc()) {
            return $fila["Reencarnados"];
        }
    }

    public function listarReencarnados($id) {
        $usuario = new Usuario($id);

        return $usuario->listarReencarnados();
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
        $res = $usuario->borrar($id);

        if ($res["success"]) {
            $_SESSION["flash"] = [
                "type" => "success",
                "message" => $res["message"]
            ];

        } else {
            $_SESSION["flash"] = [
                "type" => "error",
                "message" => $res["message"]
            ];
        }
    }
}
?>