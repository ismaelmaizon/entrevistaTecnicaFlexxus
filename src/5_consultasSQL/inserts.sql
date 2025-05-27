-- Scripts para insertar Localidades, Departamentos, Puestos y Empleados

INSERT INTO LOCALIDADES (LOCALIDAD, ACTIVO) VALUES 
('Carlos Paz', 1),
('Río Ceballos', 1),
('Córdoba', 1),
('Alta Gracia', 1);

INSERT INTO DEPARTAMENTOS (DENOMINACION, LOCALIDAD_ID) VALUES
('Ventas', 3),
('Ventas', 2),
('Administración', 3),
('Recursos Humanos', 2),
('Recursos Humanos', 1),
('IT', 2),
('Recursos Humanos', 4),
('Administración', 4),
('Ventas', 1),
('IT', 3);

INSERT INTO PUESTOS (PUESTO, ACTIVO) VALUES 
('Gerente', 1),
('Analista', 1),
('Programador', 1),
('soporte', 1),
('Vendedor', 1);

INSERT INTO EMPLEADOS (APELLIDO, NOMBRES, EDAD, FECHAALTA, SUELDO, COMISION, DEPARTAMENTO_ID, PUESTO_ID) VALUES
('Ruiz', 'Andrés', 49, '2024-08-15', 13743, 727, 9, 5),
('Ruiz', 'Laura', 45, '2023-01-29', 13823, 65, 4, 4),
('López', 'Laura', 44, '2024-09-18', 18792, 1112, 2, 4),
('Ruiz', 'Andrés', 60, '2025-01-12', 10795, 2082, 10, 2),
('Ruiz', 'Camila', 53, '2023-01-24', 10113, 1197, 8, 5),
('Martínez', 'Lucas', 23, '2022-05-20', 17085, 1107, 10, 3),
('Fernández', 'Sofía', 37, '2022-01-24', 16798, 748, 8, 3),
('Fernández', 'Martín', 21, '2023-03-09', 10954, 228, 3, 4),
('Ruiz', 'Laura', 32, '2021-05-30', 12344, 1180, 10, 5),
('Ruiz', 'Camila', 43, '2023-07-06', 11017, 2504, 3, 1),
('Díaz', 'Camila', 26, '2021-02-18', 11567, 2683, 9, 5),
('López', 'Orlando', 28, '2024-04-07', 14836, 2579, 4, 4),
('Díaz', 'Lucas', 36, '2022-09-14', 18410, 883, 2, 1),
('Ramírez', 'Juan', 58, '2022-05-17', 19676, 1735, 7, 1),
('Torres', 'Camila', 31, '2021-07-28', 17159, 2591, 5, 1),
('Pérez', 'Ana', 38, '2022-01-22', 18935, 2127, 7, 3),
('Ruiz', 'Pedro', 35, '2022-10-23', 12286, 1471, 3, 1),
('Gómez', 'Laura', 21, '2022-01-05', 14822, 2202, 8, 4),
('Ruiz', 'Martín', 60, '2020-09-09', 11483, 1580, 5, 1),
('Sánchez', 'Sofía', 56, '2024-09-28', 11564, 1356, 8, 1),
('Ramírez', 'Martín', 59, '2020-11-16', 11501, 1806, 1, 2),
('Sánchez', 'Laura', 23, '2022-02-13', 18165, 166, 5, 5),
('Pérez', 'Lucas', 49, '2021-10-22', 13215, 110, 5, 3),
('Fernández', 'Ocatavio', 36, '2024-12-09', 14811, 1168, 10, 2),
('Torres', 'Andrés', 26, '2022-08-10', 16668, 1342, 10, 1),
('Pérez', 'Laura', 39, '2024-10-16', 14922, 779, 4, 5),
('López', 'Ana', 30, '2024-11-24', 11985, 108, 3, 3),
('Pérez', 'Andrés', 44, '2024-12-06', 13189, 2896, 1, 3),
('Fernández', 'Sofía', 58, '2024-08-27', 17913, 111, 5, 3),
('López', 'Camila', 42, '2020-08-31', 10909, 2708, 3, 4),
('Gómez', 'Laura', 57, '2023-12-12', 15432, 2738, 2, 1),
('Sánchez', 'Mateo', 55, '2022-03-03', 10452, 1166, 7, 2),
('Ruiz', 'Pedro', 58, '2023-01-02', 16786, 40, 6, 1),
('Torres', 'Martín', 34, '2024-03-05', 11232, 2728, 10, 2),
('Ruiz', 'Sofía', 33, '2022-09-14', 18293, 58, 6, 3),
('Ruiz', 'Ana', 35, '2024-08-05', 11572, 1249, 2, 5),
('Torres', 'Sofía', 32, '2021-06-20', 13220, 1638, 5, 4),
('Martínez', 'Ana', 45, '2022-02-17', 11796, 1539, 3, 1),
('Gómez', 'Sofía', 27, '2024-06-16', 17928, 1422, 10, 3),
('Ruiz', 'Camila', 27, '2024-04-21', 15097, 2464, 8, 5),
('Fernández', 'Ana', 28, '2024-06-21', 19333, 2314, 3, 4),
('Torres', 'Laura', 59, '2023-08-20', 11042, 1394, 4, 1),
('Ramírez', 'Lucas', 56, '2023-12-02', 14748, 198, 8, 2),
('Gómez', 'Martín', 33, '2024-12-20', 18800, 1615, 1, 1),
('Pérez', 'Camila', 27, '2022-11-10', 18797, 2142, 9, 4),
('Sánchez', 'Lucas', 29, '2021-04-17', 19301, 1260, 7, 3),
('Fernández', 'Arnaldo', 38, '2024-07-30', 10920, 709, 10, 3),
('Torres', 'Camila', 49, '2024-09-11', 18867, 955, 9, 2),
('López', 'Martín', 46, '2023-08-28', 17172, 1619, 8, 4),
('Ruiz', 'Ana', 47, '2024-02-07', 15682, 2412, 7, 3);







