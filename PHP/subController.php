<?php
require_once "subFaction.php";

class SubController {
    public function insertar() {
        session_start();

        $sub = new SubFaction(null, $_POST["nombre"]);
        $res = $sub->insertar();

        if ($res["success"]) {
            $_SESSION["flash"] = [
                "type" => "success",
                "message" => "Subfacción creada correctamente"
            ];
        } else {
            $_SESSION["flash"] = [
                "type" => "error",
                "message" => $res["message"]
            ];
        }

        header("Location: ../Paginas/adminDashboard.php");
        exit;
    }

    public function modificar() {
        session_start();

        $sub = new SubFaction($_POST["idsubfaccion"], $_POST["nombre"]);
        $res = $sub->modificar();

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

        header("Location: ../Paginas/adminDashboard.php");
        exit;
    }

    public function borrar($id) {
        session_start();

        $sub = new SubFaction();
        $res = $sub->borrar($id);

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

        header("Location: ../Paginas/adminDashboard.php");
        exit;
    }

    public function contarSubfacciones() {
        $sub = new SubFaction();
        return $sub->contarSubfacciones();
    }

    public function listarSubfacciones() {
        $sub = new SubFaction();
        return $sub->listarSubfacciones();
    }
}
?>