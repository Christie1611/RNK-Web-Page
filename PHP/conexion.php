<?php
class Conexion {
    private $conexion;

    public function __construct() {
        $this->conexion = mysqli_connect("localhost", "root", "", "proyectofinalchris");
    }

    public function getConexion() {
        return $this->conexion;
    }
}
?>