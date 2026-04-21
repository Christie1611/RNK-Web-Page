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
        } else if ($action === "registro" || $action === "modificar") {
            if (isset($_POST["usuario"])) {
                $usuario = trim(strip_tags($_POST["usuario"]));

                if ($usuario === "") {
                    $errores["usuario"] = "El usuario no puede estar vacío";
                }
            } else {
                $errores["usuario"] = "El usuario no está definido";
            }

            if (isset($_POST["correo"])) {
                $correo = trim(strip_tags($_POST["correo"]));

                if ($correo === "") {
                    $errores["correo"] = "El correo no puede estar vacío";
                } else {
                    $patron = "/^[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)?\.[a-z]{2,3}$/";

                    if (!preg_match($patron, $correo)) {
                        $errores["correo"] = "El correo no tiene el formato correcto. <br>Correcto: bb@ibai.net / bb.gg@ibai.net / bb-gg@ibai.net / bb.gg@rr.ibai.es";
                    }
                }
            } else {
                $errores["correo"] = "El correo no está definido";
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

    $_SESSION["errores"] = $errores;

    if (array_filter($_SESSION["errores"]) && $action !== "modificar") {
        header("Location: ../index.php");
        exit;
        } elseif (array_filter($_SESSION["errores"]) && $action === "modificar") {
            $id = $_POST["id"];
            header("Location: ./acciones/modificar.php?id=$id");
            exit;
    } else {
        include_once "userController.php";

        $controlador = new UsuarioController();

        if ($action === "registrar") {
            $controlador->registrar();
        } elseif ($action === "login") {
            $controlador->login();
        } elseif ($action === "modificar") {
            $controlador->modificar();
        }
    }
?>