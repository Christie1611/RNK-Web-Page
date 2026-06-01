CREATE DATABASE IF NOT EXISTS proyectofinalchris;
USE proyectofinalchris;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    imagen VARCHAR(255),
    descripcion TEXT,
    rol ENUM('user','admin') NOT NULL DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS facciones (
    idfaccion INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE subfacciones (
    idsubfaccion INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS reencarnados (
    idreencarnado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    diseno VARCHAR(255),
    idfaccion INT NOT NULL,
    idsubfaccion INT,
    trasfondo TEXT,
    idusuario INT NOT NULL,

    FOREIGN KEY (idfaccion) REFERENCES facciones(idfaccion) ON DELETE CASCADE,
    FOREIGN KEY (idsubfaccion) REFERENCES subfacciones(idsubfaccion) ON DELETE CASCADE,
    FOREIGN KEY (idusuario) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS talentos (
    idtalento INT AUTO_INCREMENT PRIMARY KEY,
    idreencarnado INT NOT NULL,
    talento VARCHAR(100) NOT NULL,
    descripcion TEXT,

    FOREIGN KEY (idreencarnado) REFERENCES reencarnados(idreencarnado) ON DELETE CASCADE
);

INSERT INTO usuarios (usuario, email, contrasena, rol) VALUES (
  'Neumann',
  'technodemon@gmail.com',
  '$2y$10$8kmMzB8U6D52AFbnOSYeJu7BudKoiXcmgkLDqtUPqcNniRv8D5J4O', /* La contraseña es 1234, pero necesito subirla hasheada en la base de datos*/
  'admin'
);

INSERT INTO facciones (Nombre) VALUES
('Forest'),
('Sinners'),
('Strays'),
('Others');

INSERT INTO subfacciones (Nombre) VALUES
('Asociasión de Artes'),
('Asociasión de Astronomía'),
('Asociasión de Aviadores'),
('Asociasión de Brujería'),
('Asociasión de Escritores'),
('Asociasión de Espers'),
('Asociasión de Inventores'),
('Asociasión de Jack el Destripador'),
('Asociasión de Matemáticos'),
('Asociasión de Medicina'),
('Asociasión de Música'),
('Asociasión Lumiéres'),
('Los Sabios'),
('Proyecto Stargate');