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
        $idusuario = $_SESSION["auth"]["id"];

        $reen = new Reencarnado(
            $_POST["idreencarnado"],
            $_POST["nombre"],
            null,
            $_POST["idfaccion"],
            $_POST["trasfondo"],
            $idusuario
        );

        $res = $reen->modificar(
            $_FILES["diseno"] ?? null,
            $_POST["talento"] ?? [],
            $_POST["descripcionTalento"] ?? []
        );

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

        header("Location: ../Paginas/dashboard.php");
        exit;
    }

    public function explorar() {
        $reen = new Reencarnado();
        return $reen->explorar();
    }

    public function borrar($id) {
        $reencarnado = new Reencarnado();
        $reencarnado->borrar($id);
    }
}
?>