<?php
include_once "connection.php";

class Reencarnado {
    private $idreencarnado;
    private $nombre;
    private $diseno;
    private $idfaccion;
    private $trasfondo;
    private $idusuario;
    private $conexion;

    public function __construct($idreencarnado = null, $nombre = null, $diseno = null, $idfaccion = null, $trasfondo = null, $idusuario = null) {
        $this->idreencarnado = $idreencarnado;
        $this->nombre = $nombre;
        $this->diseno = $diseno;
        this->idfaccion = $idfaccion;
        $this->trasfondo = $trasfondo;
        $this->idusuario = $idusuario;

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

    public function insertar() {
        $stmt->bind_param("i", $last_id);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($fila = $res->fetch_assoc()) {
            return [
                "idreencarnado" => $fila["idreencarnado"],
                "nombre" => $fila["nombre"],
                "diseno" => $fila["diseno"],
                "idfaccion" => $fila["idfaccion"],
                "trasfondo" => $fila["trasfondo"],
                "idusuario" => $fila["idusuario"]
            ];
        }

        return false;
    }

    public function listar() {
        $sql = "SELECT * FROM reencarnados WHERE idreencarnado = $this->idreencarnado";
        return mysqli_query($this->conexion, $sql);
    }

    public function modificar($file = null) {
        $stmt = $this->conexion->prepare("SELECT diseno FROM reencarnados WHERE idreencarnado = ?");
        $stmt->bind_param("i", $this->idreencarnado);
        $stmt->execute();
        $res = $stmt->get_result();
        $user = $res->fetch_assoc();

        $oldImage = $user["diseno"];
        $newImage = $oldImage;

        if ($file && $file["error"] === UPLOAD_ERR_OK) {
            $folder = "../reen/";
            $fileName = time() . "_" . basename($file["name"]);
            $path = $folder . $fileName;

            if ($oldImage && file_exists($folder . $oldImage)) {
                unlink($folder . $oldImage);
            }

            move_uploaded_file($file["tmp_name"], $path);

            $newImage = $fileName;
        }

        $this->diseno = $newImage;

        $stmt = $this->conexion->prepare("
            UPDATE reencarnados SET
                nombre = ?,
                diseno = ?,
                idfaccion = ?,
                trasfondo = ?,
                idusuario = ?
            WHERE idreencarnado = ?
        ");

        $stmt->bind_param(
            "ssisii",
            $this->nombre,
            $this->diseno,
            $this->idfaccion,
            $this->trasfondo,
            $this->idusuario,
            $this->idreencarnado
        );

        if ($stmt->execute()) {
            return [
                "success" => true,
                "message" => "Información actualizada correctamente",
                "diseno" => $newImage
            ];
        }

        return [
            "success" => false,
            "message" => "Error al actualizar la información"
        ];
    }

    public function borrar($id) {
        $stmt = $this->conexion->prepare("SELECT diseno FROM reencarnados WHERE idreencarnado = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($res->num_rows === 0) {
            return false;
        }

        $user = $res->fetch_assoc();
        $diseno = $user["diseno"];

        if (!empty($diseno)) {
            $path = __DIR__ . "/../reen/" . $diseno;

            if (file_exists($path)) {
                unlink($path);
            }
        }

        $stmt = $this->conexion->prepare("DELETE FROM reencarnados WHERE idreencarnado = ?");
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }
}