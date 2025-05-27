-- Crear base de datos
CREATE DATABASE IF NOT EXISTS articulosdb;
USE articulosdb;

-- Crear tabla de artículos
CREATE TABLE IF NOT EXISTS articulos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  fechaModificacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  marca VARCHAR(100) NOT NULL,
  activo BOOLEAN NOT NULL
);

-- Insertar datos de ejemplo
INSERT INTO articulos (nombre, fechaModificacion, marca, activo) VALUES
('Monitor LED 24 pulgadas', '2025-05-25 10:00:00', 'Samsung', TRUE),
('Teclado mecánico RGB', '2025-05-24 15:30:00', 'Logitech', TRUE),
('Mouse inalámbrico', '2025-05-23 18:45:00', 'HP', TRUE),
('Impresora multifunción', '2025-05-22 12:00:00', 'Epson', FALSE),
('Notebook i7 16GB RAM', '2025-05-20 09:00:00', 'Lenovo', TRUE);


SELECT * FROM articulos;


