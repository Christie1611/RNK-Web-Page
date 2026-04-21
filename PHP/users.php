<?php
include_once "connection.php";

class Usuario {
    private $id;
    private $usuario;
    private $email;
    private $contrasena;
    private $conexion;

    public function __construct($id = null, $usuario = null, $email = null, $contrasena = null) {
        $this->id = $id;
        $this->usuario = $usuario;
        $this->email = $email;
        $this->contrasena = $contrasena;

        $bd = new Conexion();
        $this->conexion = $bd->getConexion();
    }

    public function _get($property) {
        if (property_exists($this, $property)) {
            return $this->$property;
        }
    }

    public function _set($property, $value) {
        if (property_exists($this, $property)) {
            $this->$property = $value;
        }
    }

    public function registrar() {
        $stmt = $this->conexion->prepare("SELECT idusuario FROM usuarios WHERE email = ?");
        $stmt->bind_param("s", $this->email);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($res->num_rows > 0) {
            return false;
        }

        $stmt = $this->conexion->prepare(
            "INSERT INTO usuarios (usuario, email, contrasena) VALUES (?, ?, ?)"
        );

        $stmt->bind_param("sss", $this->usuario, $this->email, $this->contrasena);

        if (!$stmt->execute()) {
            return false;
        }

        $last_id = $this->conexion->insert_id;

        $stmt = $this->conexion->prepare(
            "SELECT idusuario, usuario FROM usuarios WHERE idusuario = ?"
        );

        $stmt->bind_param("i", $last_id);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($fila = $res->fetch_assoc()) {
            return [
                "id" => $fila["idusuario"],
                "usuario" => $fila["usuario"]
            ];
        }

        return false;
    }

    public function login() {
        $sql = "SELECT idusuario, usuario, contrasena FROM usuarios WHERE usuario = ?";
        $stmt = $this->conexion->prepare($sql);
        $stmt->bind_param("s", $this->usuario);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($res->num_rows === 0) {
            return false;
        }

        $fila = $res->fetch_assoc();

        if (password_verify($this->contrasena, $fila["contrasena"])) {
            return [
                "id" => $fila["idusuario"],
                "usuario" => $fila["usuario"]
            ];
        }

        return false;
    }

    public function listar() {
        $sql = "SELECT * FROM usuarios WHERE idusuario = $this->id";
        return mysqli_query($this->conexion, $sql);
    }

    public function modificar() {
        $sql = "UPDATE usuarios SET
            usuario = '$this->usuario',
            email = '$this->email',
            contrasena = '$this->contrasena'
            WHERE idusuario = $this->id";

        return mysqli_query($this->conexion, $sql);
    }

    public function borrar($id) {
        $sql = "DELETE FROM usuarios WHERE idusuario = $id";
        return mysqli_query($this->conexion, $sql);
    }
}