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

        if (isset($_POST["trasfondo"])) {
            $trasfondo = trim(strip_tags($_POST["trasfondo"]));

            if ($trasfondo === "") {
                $errores["trasfondo"] = "El trasfondo no puede estar vacío";
            } 
        } else {
            $errores["trasfondo"] = "El trasfondo no está definido";
        }

        if (isset($_POST["talento"])) {
            $talentos = $_POST["talento"];
            $descripciones = $_POST["descripcionTalento"]; //LA DESCRIPCIÓN ES OPCIONAL, NO NECESITA VALIDACIÓN

            foreach ($talentos as $i => $talento) {
                $talento = trim(strip_tags($talento));
                $descripcion = trim(strip_tags($descripciones[$i] ?? ""));

                if ($talento === "") {
                    $errores["talento_$i"] = "El talento no puede estar vacío";
                }
            }
        }
    } else {
        $errores["action"] = "Action no está definido";
    }

    $_SESSION["erroresReen"] = $errores;

    if (array_filter($_SESSION["erroresReen"])) {
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
            "nombre" => $_POST["nombre"] ?? "",
            "idfaccion" => $_POST["idfaccion"] ?? "",
            "trasfondo" => $_POST["trasfondo"] ?? "",
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