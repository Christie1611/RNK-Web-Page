<?php
include_once "connection.php";

class SubFaction {
    private $idsubfaccion;
    private $nombre;
    private $conexion;

    public function __construct($idsubfaccion = null, $nombre = null) {
        $this->idsubfaccion = $idsubfaccion;
        $this->nombre = $nombre;

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
        $stmt = $this->conexion->prepare("INSERT INTO subfacciones (nombre) VALUES (?)");
        $stmt->bind_param("s", $this->nombre);

        if ($stmt->execute()) {
            return [
                "success" => true,
                "message" => "Subfacción creada correctamente"
            ];
        }

        return [
            "success" => false,
            "message" => "Error al crear la Subfacción"
        ];
    }

    public function modificar() {
        $stmt = $this->conexion->prepare("UPDATE subfacciones SET nombre = ? WHERE idsubfaccion = ?");
        $stmt->bind_param("si", $this->nombre, $this->idsubfaccion);

        if ($stmt->execute()) {
            return [
                "success" => true,
                "message" => "Subfacción modificada correctamente"
            ];
        }

        return [
            "success" => false,
            "message" => "Error al modificar la Subfacción"
        ];
    }

    public function borrar($id) {
        $stmt = $this->conexion->prepare("DELETE FROM subfacciones WHERE idsubfaccion = ?");
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            return [
                "success" => true,
                "message" => "Subfacción eliminada correctamente"
            ];
        }

        return [
            "success" => false,
            "message" => "Error al eliminar la Subfacción"
        ];
    }

    public function listarSubfacciones() {
        $sql = "SELECT * FROM subfacciones ORDER BY nombre";
        $res = mysqli_query($this->conexion, $sql);
        $subfacciones = [];

        while ($fila = $res->fetch_assoc()) {
            $subfacciones[] = $fila;
        }

        return $subfacciones;
    }

    public function contarSubfacciones() {
        $sql = "SELECT COUNT(*) AS total FROM subfacciones";
        $res = mysqli_query($this->conexion, $sql);

        return $res->fetch_assoc()["total"];
    }
}
?>