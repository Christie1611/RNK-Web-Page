<?php
    session_start();
    $errores = [];

    if (isset($_POST["action"])) {
        $action = trim(strip_tags($_POST["action"]));

        if ($action === "login") {
            if (isset($_POST["usuario"])) {
                $usuario = trim(strip_tags($_POST["usuario"]));

                if ($usuario === "") {
                    $errores["usuario"] = "El usuario no puede estar vacío";
                }
            } else {
                $errores["usuario"] = "El usuario no está definido";
            }

            if (isset($_POST["contrasena"])) {
                $contrasena = trim(strip_tags($_POST["contrasena"]));

                if ($contrasena === "") {
                    $errores["contrasena"] = "La contraseña no puede estar vacía";
                }
            } else {
                $errores["contrasena"] = "La contraseña no está definida";
            }
        } elseif ($action === "registrar") {
            if (isset($_POST["usuario"])) {
                $usuario = trim(strip_tags($_POST["usuario"]));

                if ($usuario === "") {
                    $errores["usuario"] = "El usuario no puede estar vacío";
                }
            } else {
                $errores["usuario"] = "El usuario no está definido";
            }

            if (isset($_POST["email"])) {
                $email = trim(strip_tags($_POST["email"]));

                if ($email === "") {
                    $errores["email"] = "El email no puede estar vacío";
                } else {
                    $patron = "/^[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)?\.[a-z]{2,3}$/";

                    if (!preg_match($patron, $email)) {
                        $errores["email"] = "El email no tiene el formato correcto.";
                    }
                }
            } else {
                $errores["email"] = "El email no está definido";
            }

            if (isset($_POST["contrasena"])) {
                $contrasena = trim(strip_tags($_POST["contrasena"]));

                if ($contrasena === "") {
                    $errores["contrasena"] = "La contraseña no puede estar vacía";
                }
            } else {
                $errores["contrasena"] = "La contraseña no está definida";
            }
        }
    } else {
        $errores["action"] = "Action no está definido";
    }
    
    if ($action === "modificar") {
        if (isset($_POST["usuario"])) {
            $usuario = trim(strip_tags($_POST["usuario"]));

            if ($usuario === "") {
                $errores["usuario"] = "El usuario no puede estar vacío";
            }
        } else {
            $errores["usuario"] = "El usuario no está definido";
        }

        if (isset($_POST["email"])) {
            $email = trim(strip_tags($_POST["email"]));

            if ($email === "") {
                $errores["email"] = "El email no puede estar vacío";
            } else {
                $patron = "/^[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)?\.[a-z]{2,3}$/";

                if (!preg_match($patron, $email)) {
                    $errores["email"] = "El email no tiene el formato correcto.";
                }
            }
        } else {
            $errores["email"] = "El email no está definido";
        }

        if (!isset($_POST["contrasena"])) { // AQUÍ LA CONTRASEÑA ES OPCIONAL, RECUERDA
            $errores["contrasena"] = "La contraseña no está definida";
        }

        if (!isset($_POST["descripcion"])) { // RECUERDA QUE ESTO ES OPCIONAL, NO NECESITO COMPROBAR SI ESTÁ VACÍO
            $errores["descripcion"] = "La descripcion no está definida";
        }
        
        if (isset($_FILES["imagen"])) {

            if ($_FILES["imagen"]["error"] !== UPLOAD_ERR_NO_FILE) {
                $file = $_FILES["imagen"];
                $allowedTypes = ["image/jpeg", "image/png", "image/webp"];
                $maxSize = 4 * 1024 * 1024; // SON 4 MEGABYTES, ACUÉRDATE CHRIS

                if (!in_array($file["type"], $allowedTypes)) {
                    $errores["imagen"] = "Formato no permitido (jpg, png, webp)";
                }

                if ($file["size"] > $maxSize) {
                    $errores["imagen"] = "La imagen es demasiado grande (máx. 4MB)";
                }
            }
            
        } else {
            $errores["imagen"] = "La imagen no está definida";
        }
    }

    $_SESSION["errores"] = $errores;

    if (array_filter($_SESSION["errores"])) {

       // $_SESSION["old"] = trim(strip_tags($_POST));
       $_SESSION["old"] = array_map(function($value) {
            return is_string($value) ? trim(strip_tags($value)) : $value;
        }, $_POST);

        if ($action === "login") {
            header("Location: ../Paginas/login.php");
        } elseif ($action === "registrar") {
            header("Location: ../Paginas/register.php");
        } elseif ($action === "modificar") {
            $id = $_POST["id"];
            header("Location: ../Paginas/dashboard.php");
        }
        exit;

    } else {

        require_once "userController.php";
        $usuario = new UsuarioController();

        if ($action === "login") {
            $usuario->login();
        } elseif ($action === "registrar") {
            $usuario->registrar();
        } elseif ($action === "modificar") {
            $usuario->modificar();
        }
    }
?>