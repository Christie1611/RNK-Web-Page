<?php
    session_start();
    $errores = [];

    if (isset($_POST["action"])) {
        $action = trim(strip_tags($_POST["action"]));

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
                $maxSize = 4 * 1024 * 1024; // SON 4 MEGABYTES, ACUÉRDATE CHRIS

                if (!in_array($file["type"], $allowedTypes)) {
                    $errores["diseno"] = "Formato no permitido (jpg, png, webp)";
                }

                if ($file["size"] > $maxSize) {
                    $errores["diseno"] = "La imagen es demasiado grande (máx. 4MB)";
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

        if (isset($_POST["trasfondo"])) {
            $trasfondo = trim(strip_tags($_POST["trasfondo"]));

            if ($trasfondo === "") {
                $errores["trasfondo"] = "El trasfondo no puede estar vacío";
            } 
        } else {
            $errores["trasfondo"] = "El trasfondo no está definido";
        }

        if (isset($_POST["talento"])) {
            if (isset($_POST["descripcionTalento"])) {
                $talentos = $_POST["talento"];
                $descripciones = $_POST["descripcionTalento"];

                foreach ($talentos as $i => $talento) {
                    $talento = trim(strip_tags($talento));
                    $descripcion = trim(strip_tags($descripciones[$i] ?? ""));

                    if ($talento === "") {
                        $errores["talento_$i"] = "El talento no puede estar vacío";
                    }
                    if ($descripcion === "") {
                        $errores["descripcion_$i"] = "La descripción del talento no puede estar vacía";
                    }
                }
            } else {
                $errores["descripcion"] = "La descripción del talento no está definida";
            }
        } else {
            $errores["talento"] = "El talento no está definido";
        }
    } else {
        $errores["action"] = "Action no está definido";
    }

    if ($action === "insertar") {
        $_SESSION["erroresReenCreate"] = $errores;
    }

    if ($action === "modificar") {
        $_SESSION["erroresReenEdit"] = $errores;
    }

    if (array_filter($errores)) {
        $_SESSION["reenAction"] = $action;

        if ($action === "modificar") {
            $_SESSION["reenEditId"] = $_POST["idreencarnado"];
        }

        $talentosOld = [];

        if (isset($_POST["talento"])) {
            foreach ($_POST["talento"] as $i => $t) {
                $talentosOld[] = [
                    "talento" => trim(strip_tags($t)),
                    "descripcion" => trim(strip_tags($_POST["descripcionTalento"][$i] ?? ""))
                ];
            }
        }

        $_SESSION["oldReen"] = [
            "nombre" => trim(strip_tags($_POST["nombre"])) ?? "",
            "idfaccion" => $_POST["idfaccion"] ?? "",
            "trasfondo" => trim(strip_tags($_POST["trasfondo"])) ?? "",
            "talentos" => $talentosOld
        ];

        header("Location: ../Paginas/dashboard.php");
        exit;
    } else {
        require_once "reenController.php";
        $reencarnado = new ReenController();

        if ($action === "insertar") {
            $reencarnado->insertar();
        } elseif ($action === "modificar") {
            $reencarnado->modificar();
        }
    }
?>