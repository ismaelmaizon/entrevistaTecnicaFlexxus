# entrevistaTecnicaFlexxus

Entrega correspondiente a la entrevista técnica.

Tecnologías utilizadas
*************************************************

Lenguajes :

* NodeJS + TypeScript
* SQL (para consultas a la base de datos)

***********************************************

Librerías y Frameworks:

* Express
* MySQL2
* Dotenv
* Swagger UI Express (si documentaste la API)

***********************************************

Base de Datos:

* MySQL

*************************************************
VARIABLES DE ENTORNO:

Se debe crear un archivo .env en la raíz del proyecto con los siguientes datos:

* PORT=3000
* DB_HOST=localhost
* DB_PORT=3306
* DB_USER=tu_usuario
* DB_PASSWORD=tu_contraseña
* DB_NAME=nombre_de_la_base
* API_SECRET_TOKEN=123456secreto

****************************************************

# ¡A tener en cuenta! 

## Autenticación en las consultas a la API:

Para realizar peticiones a las rutas protegidas de la API, es necesario incluir el token de autorización:
* En Postman:
Usar el encabezado HTTP de la siguiente manera: Authorization: Bearer 123456secreto


* En Swagger: 
para acceder a la documentacion: http://localhost:3000/api-docs/
Autenticacion:
Solo escribir directamente el token sin el prefijo Bearer, es decir: 123456secreto

En la ruta docs\img hay dos imagenes que muestran

* Como se realiza la autenticación en Postman
* Como se realiza la autenticación en Swagger

## Ejercicio 5

En la ruta src\5_consultaSQL

se encuentran los 3 archivos donde se creo la base de datos, las tablas, los inserts a las mismas y las consultas solicitadas

# Por ultimo

## proceso de instalacion

luego de descargar el repo

* npm install

* crear el archivo .env segun aclaraciones de mas arriba

* npm run dev





