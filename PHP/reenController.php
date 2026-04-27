<?php
require_once "reen.php";

class ReenController {
    public function insertar() {
        session_start();

        $idusuario = $_SESSION["auth"]["id"];

        $reen = new Reencarnado(
            null,
            $_POST["nombre"],
            null,
            $_POST["idfaccion"],
            $_POST["trasfondo"],
            $idusuario
        );

        $res = $reen->insertar($_FILES["diseno"] ?? null,
                                $_POST["talento"] ?? [], 
                                $_POST["descripcionTalento"] ?? []);

        if ($res["success"]) {
            $_SESSION["flash"] = [
                "type" => "success",
                "message" => "Reencarnado creado correctamente"
            ];
        } else {
            $_SESSION["flash"] = [
                "type" => "error",
                "message" => $res["message"]
            ];
        }

        header("Location: ../Paginas/dashboard.php");
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