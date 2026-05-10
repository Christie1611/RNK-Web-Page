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
        $this->idfaccion = $idfaccion;
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

    public function insertar($file = null, $talentos = [], $descripciones = []) {
        $newImage = null;

        if ($file && $file["error"] === UPLOAD_ERR_OK) {
            $folder = "../reen/";
            $fileName = time() . "_" . basename($file["name"]);
            move_uploaded_file($file["tmp_name"], $folder . $fileName);
            $newImage = $fileName;
        }

        $stmt = $this->conexion->prepare("
            INSERT INTO reencarnados (nombre, diseno, idfaccion, trasfondo, idusuario)
            VALUES (?, ?, ?, ?, ?)
        ");

        $stmt->bind_param(
            "ssisi",
            $this->nombre,
            $newImage,
            $this->idfaccion,
            $this->trasfondo,
            $this->idusuario
        );

        if ($stmt->execute()) {
            $idReen = $this->conexion->insert_id;

            if (!empty($talentos)) {
                $stmtTal = $this->conexion->prepare("
                    INSERT INTO talentos (idreencarnado, talento, descripcion)
                    VALUES (?, ?, ?)
                ");

                foreach ($talentos as $i => $tal) {
                    $tal = trim(strip_tags($tal));
                    $desc = trim(strip_tags($descripciones[$i] ?? ""));

                    if ($tal !== "") {
                        $stmtTal->bind_param("iss", $idReen, $tal, $desc);
                        $stmtTal->execute();
                    }
                }
            }

            return [
                "success" => true,
                "message" => "Reencarnado creado correctamente"
            ];
        }

        return [
            "success" => false,
            "message" => "Error al crear el Reencarnado"
        ];
    }

    public function listar() {
        $sql = "SELECT * FROM reencarnados WHERE idreencarnado = $this->idreencarnado";
        return mysqli_query($this->conexion, $sql);
    }

    public function modificar($file = null, $talentos = [], $descripciones = [], $talentoIds = []) {
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

        if (!empty($talentos)) {
            $stmtExistentes = $this->conexion->prepare("SELECT idtalento FROM talentos WHERE idreencarnado = ?");
            $stmtExistentes->bind_param("i", $this->idreencarnado);
            $stmtExistentes->execute();
            $resExistentes = $stmtExistentes->get_result();
            $idsExistentes = [];

            while ($row = $resExistentes->fetch_assoc()) {
                $idsExistentes[] = $row["idtalento"];
            }

            $idsRecibidos = [];

            foreach ($talentos as $i => $talento) {
                $nombreTalento = trim($talento);
                $descripcion = trim($descripciones[$i] ?? "");
                $idTalento = $talentoIds[$i] ?? "";

                if ($nombreTalento === "") continue;

                if (!empty($idTalento)) {
                    $idsRecibidos[] = $idTalento;
                    $stmtUpdateTal = $this->conexion->prepare("
                        UPDATE talentos
                        SET talento = ?, descripcion = ?
                        WHERE idtalento = ?
                    ");

                    $stmtUpdateTal->bind_param(
                        "ssi",
                        $nombreTalento,
                        $descripcion,
                        $idTalento
                    );
                    $stmtUpdateTal->execute();
                } else {
                    $stmtInsertTal = $this->conexion->prepare("
                        INSERT INTO talentos (
                            idreencarnado,
                            talento,
                            descripcion
                        )
                        VALUES (?, ?, ?)
                    ");

                    $stmtInsertTal->bind_param(
                        "iss",
                        $this->idreencarnado,
                        $nombreTalento,
                        $descripcion
                    );

                    $stmtInsertTal->execute();
                }
            }

            $idsAEliminar = array_diff($idsExistentes, $idsRecibidos);

            if (!empty($idsAEliminar)) {
                $placeholders = implode(",", array_fill(0, count($idsAEliminar), "?"));
                $types = str_repeat("i", count($idsAEliminar));

                $stmtDelete = $this->conexion->prepare("DELETE FROM talentos WHERE idtalento IN ($placeholders)");
                $stmtDelete->bind_param($types, ...$idsAEliminar);
                $stmtDelete->execute();
            }
        }

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

    public function explorar() {
        $sql = "SELECT reencarnados.*, usuarios.usuario
            FROM reencarnados INNER JOIN usuarios ON reencarnados.idusuario = usuarios.id
            ORDER BY reencarnados.idreencarnado DESC";

        $res = $this->conexion->query($sql);
        $reencarnados = [];
        while ($fila = $res->fetch_assoc()) {
            $stmtTal = $this->conexion->prepare("SELECT idtalento, talento, descripcion FROM talentos WHERE idreencarnado = ?");
            $stmtTal->bind_param("i", $fila["idreencarnado"]);

            $stmtTal->execute();
            $resTal = $stmtTal->get_result();
            $fila["talentos"] = [];

            while ($tal = $resTal->fetch_assoc()) {
                $fila["talentos"][] = $tal;
            }

            $reencarnados[] = $fila;
        }

        return $reencarnados;
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

        if ($stmt->execute()) {
            return [
                "success" => true,
                "message" => "Reencarnado eliminado correctamente"
            ];
        }

        return [
            "success" => false,
            "message" => "Error al borrar al Reencarnado"
        ];
    }
}