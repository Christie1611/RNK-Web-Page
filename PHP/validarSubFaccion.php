<?php
    session_start();
    $errores = [];

    if (isset($_POST["action"])) {
        $action = trim(strip_tags($_POST["action"]));

        if ($action !== "eliminar") {
            if (isset($_POST["nombre"])) {
                $nombre = trim(strip_tags($_POST["nombre"]));

                if ($nombre === "") {
                    $errores["nombre"] =
                    "El nombre no puede estar vacío";
                }
            } else {
                $errores["nombre"] =
                "El nombre no está definido";
            }
        }
    } else {
        $errores["action"] = "Action no está definido";
    }

    if ($action === "insertar") {
        $_SESSION["erroresSubCreate"] = $errores;
    }

    if ($action === "modificar") {
        $_SESSION["erroresSubEdit"] = $errores;
    }

    if (array_filter($errores)) {
        $_SESSION["subAction"] = $action;

        if ($action === "modificar") {
            $_SESSION["subEditId"] = $_POST["idsubfaccion"];
        }

        if ($action === "insertar") {
            $_SESSION["oldSub"] = [
                "nombre" => trim(strip_tags($_POST["nombre"])) ?? ""
            ];
        }

        if ($action === "modificar") {
            $_SESSION["oldSubEdit"] = [
                "nombre" => trim(strip_tags($_POST["nombre"])) ?? ""
            ];
        }

        header("Location: ../Paginas/adminDashboard.php");
        exit;
    } else {
        require_once "subController.php";
        $sub = new SubController();

        if ($action === "insertar") {
            $sub->insertar();
        } elseif ($action === "modificar") {
            $sub->modificar();
        } elseif ($action === "eliminar") {
            $sub->borrar($_POST["idsubfaccion"]);
        }
    }
?>