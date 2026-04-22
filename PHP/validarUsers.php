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
        } else if ($action === "registrar" || $action === "modificar") {
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

    $_SESSION["errores"] = $errores;

    if (array_filter($_SESSION["errores"])) {

        $_SESSION["old"] = $_POST;

        if ($action === "login") {
            header("Location: ../Paginas/login.php");
        } elseif ($action === "registrar") {
            header("Location: ../Paginas/register.php");
        } elseif ($action === "modificar") {
            $id = $_POST["id"];
            header("Location: ./acciones/modificar.php?id=$id");
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