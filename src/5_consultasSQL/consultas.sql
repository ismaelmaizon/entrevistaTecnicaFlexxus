-- •Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A) 
SELECT ID, NOMBRES FROM EMPLEADOS ORDER BY NOMBRES DESC;

-- •Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.
SELECT 
    CONCAT(E.NOMBRES, ' ', E.APELLIDO) AS NOMBRE_COMPLETO,
    P.PUESTO,
    L.LOCALIDAD
FROM EMPLEADOS E
JOIN PUESTOS P ON E.PUESTO_ID = P.ID
JOIN DEPARTAMENTOS D ON E.DEPARTAMENTO_ID = D.ID
JOIN LOCALIDADES L ON D.LOCALIDAD_ID = L.ID
WHERE P.PUESTO = 'Soporte';

-- •Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.

SELECT ID, NOMBRES FROM EMPLEADOS WHERE NOMBRES LIKE '%o';

-- •Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.

SELECT 
    CONCAT(E.NOMBRES, ' ', E.APELLIDO) AS NOMBRE_COMPLETO,
    P.PUESTO,
    E.SUELDO
FROM EMPLEADOS E
JOIN PUESTOS P ON E.PUESTO_ID = P.ID
JOIN DEPARTAMENTOS D ON E.DEPARTAMENTO_ID = D.ID
JOIN LOCALIDADES L ON D.LOCALIDAD_ID = L.ID
WHERE L.LOCALIDAD = 'Carlos Paz';


-- •Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.

SELECT 
    CONCAT(E.NOMBRES, ' ', E.APELLIDO) AS NOMBRE_COMPLETO,
    E.SUELDO,
    L.LOCALIDAD
FROM EMPLEADOS E
JOIN DEPARTAMENTOS D ON E.DEPARTAMENTO_ID = D.ID
JOIN LOCALIDADES L ON D.LOCALIDAD_ID = L.ID
WHERE E.SUELDO BETWEEN 10000 AND 13000;


-- •Visualizar los departamentos con más de 5 empleados
SELECT 
    D.DENOMINACION AS DEPARTAMENTO,
    COUNT(E.ID) AS CANTIDAD_EMPLEADOS
FROM EMPLEADOS E
JOIN DEPARTAMENTOS D ON E.DEPARTAMENTO_ID = D.ID
GROUP BY D.ID, D.DENOMINACION
HAVING COUNT(E.ID) > 5;

-- •Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.
SELECT 
    CONCAT(E.NOMBRES, ' ', E.APELLIDO) AS NOMBRE_COMPLETO
FROM EMPLEADOS E
JOIN DEPARTAMENTOS D ON E.DEPARTAMENTO_ID = D.ID
JOIN LOCALIDADES L ON D.LOCALIDAD_ID = L.ID
JOIN PUESTOS P ON E.PUESTO_ID = P.ID
WHERE L.LOCALIDAD = 'Córdoba'
  AND P.PUESTO IN ('Analista', 'Programador');

-- •Calcula el sueldo medio de todos los empleados.

SELECT SUM(SUELDO) / COUNT(*) AS SUELDO_PROMEDIO FROM EMPLEADOS;

-- •¿Cuál es el máximo sueldo de los empleados del departamento 10?

SELECT MAX(SUELDO) AS SUELDO_MAXIMO FROM EMPLEADOS WHERE DEPARTAMENTO_ID = 10;

-- •Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.

SELECT MIN(E.SUELDO) AS SUELDO_MINIMO
FROM EMPLEADOS E
JOIN PUESTOS P ON E.PUESTO_ID = P.ID
WHERE P.PUESTO = 'Soporte';

-- •Para cada puesto obtener la suma de sueldos.

SELECT P.PUESTO, SUM(E.SUELDO) AS TOTAL_SUELDOS
FROM EMPLEADOS E
JOIN PUESTOS P ON E.PUESTO_ID = P.ID
GROUP BY P.PUESTO;











