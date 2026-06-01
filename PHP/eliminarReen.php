<?php
    session_start();
    include_once "reenController.php";

    $id = isset($_GET["id"]) ? (int) $_GET["id"] : 0;

    if ($id <= 0) {
        die("ID inválido");
    }

    $reencarnado = new ReenController();

    $reencarnado->borrar($id);
    if (isset($_SESSION["auth"]["rol"]) && $_SESSION["auth"]["rol"] === "admin") {
        header("Location: ../Paginas/adminDashboard.php");
        exit;
    }

    header("Location: ../Paginas/dashboard.php");
    exit;

?>