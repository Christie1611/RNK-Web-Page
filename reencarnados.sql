CREATE DATABASE IF NOT EXISTS proyectofinalchris;
USE proyectofinalchris;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    imagen VARCHAR(255),
    descripcion TEXT
);

CREATE TABLE IF NOT EXISTS facciones (
    idfaccion INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS reencarnados (
    idreencarnado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    diseno VARCHAR(255),
    idfaccion INT NOT NULL,
    trasfondo TEXT,
    idusuario INT NOT NULL,

    FOREIGN KEY (idfaccion) REFERENCES facciones(idfaccion),
    FOREIGN KEY (idusuario) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS talentos (
    idtalento INT AUTO_INCREMENT PRIMARY KEY,
    idreencarnado INT NOT NULL,
    talento VARCHAR(100) NOT NULL,
    descripcion TEXT,

    FOREIGN KEY (idreencarnado) REFERENCES reencarnados(idreencarnado)
        ON DELETE CASCADE
);

INSERT INTO facciones (Nombre) VALUES
('Forest'),
('Sinners'),
('Strays'),
('Others');