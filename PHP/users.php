<?php
include_once "connection.php";

class Usuario {
    private $id;
    private $usuario;
    private $email;
    private $contrasena;
    private $imagen;
    private $descripcion;
    private $conexion;

    public function __construct($id = null, $usuario = null, $email = null, $contrasena = null, $imagen = null, $descripcion = null) {
        $this->id = $id;
        $this->usuario = $usuario;
        $this->email = $email;
        $this->imagen = $imagen;
        $this->descripcion = $descripcion;
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
        $stmt = $this->conexion->prepare("SELECT id FROM usuarios WHERE email = ?");
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
            "SELECT * FROM usuarios WHERE id = ?"
        );

        $stmt->bind_param("i", $last_id);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($fila = $res->fetch_assoc()) {
            return [
                "id" => $fila["id"],
                "usuario" => $fila["usuario"],
                "email" => $fila["email"],
                "contrasena" => $fila["contrasena"],
                "imagen" => $fila["imagen"],
                "descripcion" => $fila["descripcion"]
            ];
        }

        return false;
    }

    public function login() {
        $sql = "SELECT * FROM usuarios WHERE usuario = ?";
        $stmt = $this->conexion->prepare($sql);
        $stmt->bind_param("s", $this->usuario);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($res->num_rows === 0) {
            return false;
        }

        $fila = $res->fetch_assoc();

        if (password_verify($this->contrasena, $fila["contrasena"])) {
            return $fila;
        }

        return false;
    }

    public function listar() {
        $sql = "SELECT * FROM usuarios WHERE id = $this->id";
        return mysqli_query($this->conexion, $sql);
    }

    public function listarReencarnados() {
        $sql = "SELECT COUNT(*) AS Reencarnados
        FROM usuarios INNER JOIN reencarnados ON usuarios.id = reencarnados.idusuario 
        WHERE usuarios.id = ? AND usuarios.id = reencarnados.idusuario";

        $stmt = $this->conexion->prepare($sql);
        $stmt->bind_param("i", $this->id);
        $stmt->execute();
        $res = $stmt->get_result();

        return $res;
    }

    public function modificar($file = null) {
        $stmt = $this->conexion->prepare("SELECT imagen FROM usuarios WHERE id = ?");
        $stmt->bind_param("i", $this->id);
        $stmt->execute();
        $user = $stmt->get_result()->fetch_assoc();

        $oldImage = $user["imagen"];
        $newImage = $oldImage;

        if ($file && $file["error"] === UPLOAD_ERR_OK) {

            $folder = "../uploads/";
            $fileName = time() . "_" . basename($file["name"]);
            $path = $folder . $fileName;

            if ($oldImage && file_exists($folder . $oldImage)) {
                unlink($folder . $oldImage);
            }

            move_uploaded_file($file["tmp_name"], $path);
            $newImage = $fileName;
        }

        if (!empty($this->contrasena)) {
            $this->contrasena = password_hash($this->contrasena, PASSWORD_DEFAULT);
        } else {
            $stmt = $this->conexion->prepare("SELECT contrasena FROM usuarios WHERE id = ?");
            $stmt->bind_param("i", $this->id);
            $stmt->execute();
            $this->contrasena = $stmt->get_result()->fetch_assoc()["contrasena"];
        }

        $stmt = $this->conexion->prepare("
            UPDATE usuarios SET
                usuario = ?,
                email = ?,
                contrasena = ?,
                imagen = ?,
                descripcion = ?
            WHERE id = ?
        ");

        $stmt->bind_param(
            "sssssi",
            $this->usuario,
            $this->email,
            $this->contrasena,
            $newImage,
            $this->descripcion,
            $this->id
        );

        if ($stmt->execute()) {
            return [
                "success" => true,
                "message" => "Perfil actualizado correctamente",
                "imagen" => $newImage
            ];
        }

        return [
            "success" => false,
            "message" => "Error al actualizar el perfil"
        ];
    }

    public function borrar($id) {
        $stmt = $this->conexion->prepare("DELETE FROM usuarios WHERE id = ?");
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }
}