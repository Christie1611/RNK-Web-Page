<?php
session_start();
    include_once "reenController.php";
    $id = isset($_GET["id"]) ? (int) $_GET["id"] : 0;

    if ($id <= 0) {
        die("ID inválido");
    }

    $reencarnado = new ReenController();

        $reencarnado->borrar($id);
        exit;
?>