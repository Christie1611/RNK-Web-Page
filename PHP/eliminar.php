<?php
    session_start();
    include_once "userController.php";

    $id = isset($_GET["id"]) ? (int) $_GET["id"] : 0;

    if ($id <= 0) {
        die("ID inválido");
    }

    if ($_SESSION["auth"]["rol"] === "admin" && $_SESSION["auth"]["id"] == $id) {
        $_SESSION["flash"] = [
            "error" => true,
            "message" => "No puedes eliminar tu propia cuenta"
        ];

        /* Para que aparezca este mensaje, hay que poner manualmente la dirección: 
        http://localhost/ProyectoFinalChris/PHP/eliminar.php?id=1 */
        header("Location: ../Paginas/adminDashboard.php");
        exit;
    }

    $usuario = new UsuarioController();

    $isOwner = $_SESSION["auth"]["id"] == $id;
    $isAdmin = isset($_SESSION["auth"]["rol"]) && $_SESSION["auth"]["rol"] === "admin";

    if ($isOwner || $isAdmin) {
        $usuario->borrar($id);

        if ($isOwner) {
            session_unset();
            session_destroy();

            header("Location: ../Index.php");
            exit;
        } else {
            header("Location: ../Paginas/adminDashboard.php");
            exit;
        }
    } else {
        die("No tienes permisos para realizar esta acción");
    }
?>