<?php
session_start();
    include_once "userController.php";
    $id = isset($_GET["id"]) ? (int) $_GET["id"] : 0;

    if ($id <= 0) {
        die("ID inválido");
    }

    $usuario = new UsuarioController();

    if ( $_SESSION["auth"]["id"] == $id) {
        $usuario->borrar($id);

        session_unset();
        session_destroy();
        header("Location: ../Index.php");
        exit;
    } /*
    Esto para un futuro modo admin si me da tiempo

    else {
        $usuario->borrar($id);
        header("Location: ../vistas/listarUsuarios.php");
    }*/
?>