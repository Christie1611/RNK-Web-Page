<?php
    session_start();
    $errores = [];

    if (isset($_POST["action"])) {
        if (isset($_POST["nombre"])) {
            $nombre = trim(strip_tags($_POST["nombre"]));

            if ($nombre === "") {
                $errores["nombre"] = "El nombre no puede estar vacío";
            }
        } else {
            $errores["nombre"] = "El nombre no está definido";
        }

        if (isset($_FILES["diseno"])) {
            if ($_FILES["diseno"]["error"] !== UPLOAD_ERR_NO_FILE) {
                $file = $_FILES["diseno"];
                $allowedTypes = ["image/jpeg", "image/png", "image/webp"];
                $maxSize = 8 * 1024 * 1024; // SON 8 MEGABYTES, ACUÉRDATE CHRIS

                if (!in_array($file["type"], $allowedTypes)) {
                    $errores["diseno"] = "Formato no permitido (jpg, png, webp)";
                }

                if ($file["size"] > $maxSize) {
                    $errores["diseno"] = "La imagen es demasiado grande (máx. 8MB)";
                }
            }
        } else {
            $errores["imagen"] = "La imagen no está definida";
        }

        if (isset($_POST["idfaccion"])) {
            $idfaccion = trim(strip_tags($_POST["idfaccion"]));

            if ($idfaccion === "") {
                $errores["idfaccion"] = "La facción no puede estar vacía";
            }
        } else {
            $errores["idfaccion"] = "La facción no está definida";
        }

        if (isset($_POST["transfondo"])) {
            $transfondo = trim(strip_tags($_POST["transfondo"]));

            if ($transfondo === "") {
                $errores["transfondo"] = "El transfondo no puede estar vacío";
            } 
        } else {
            $errores["transfondo"] = "El transfondo no está definido";
        }

        /* if (isset($_POST["idusuario"])) {
            $idusuario = trim(strip_tags($_POST["idusuario"]));

            if ($idusuario === "") {
                $errores["idusuario"] = "El usuario no puede estar vacío";
            }
        } else {
            $errores["idusuario"] = "El usuario no está definido";
        } */
    } else {
        $errores["action"] = "Action no está definido";
    }

    $_SESSION["errores"] = $errores;

    if (array_filter($_SESSION["errores"])) {
        $_SESSION["old"] = trim(strip_tags($_POST));
        header("Location: ../Paginas/dashboard.php");
        exit;

    } else {
        require_once "userController.php";
        $reencarnado = new ReenController();

        if ($action === "insertar") {
            $reencarnado->insertar();
        } elseif ($action === "modificar") {
            $reencarnado->modificar();
        }
    }
?>