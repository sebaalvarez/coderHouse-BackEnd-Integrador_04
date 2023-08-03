# Practica Integradora 4 - Curso Backend NodeJS Modulo 3

¿Cómo abordar la tercera práctica integradora?

Primero toca dar un vistazo a lo que se tiene.

- Sistema de usuarios con roles "student" y "teacher".
- Sistema de cursos
- Modelo de registro y login (realizado con passport + jwt)
- Todo el servidor se encuentra con una arquitectura más sólida en comparación con el modelo previo.
- Manejo de passport para poder mantener un middleware "current" que nos permita obtener la información del usuario guardado en la cookie.
- Servicio de mailing para enviar correo cada vez que el usuario se registra a algún curso

La implementación de la última práctica integradora es bastante simple, debido a que sólo es necesario marcar los últimos detalles y dudas.

- Documentación: Crear el swagger de documención para las Apis de Users (Estudiantes) y Cursos. (Al menos 1 de estas apis).
  [ X ] Logger: Agregar logging a todas las apis de estudiantes y cursos, donde se muestre el metodo llamado y la URL invocada. Además colocar un log del status recibido.
- Testing:
  [ X ] Crear el super test para el api de usuarios o de cursos.
  [ X ] Crear test unitarios para los Daos de estudiantes o cursos.

## Preparacion del ambiente

Se crea un archivo config.js en la carpeta config, éste alojará todas las variables de entorno. Además, se colocará dotenv para poder cargar el archivo .env

[ X ] Modificar el archivo de configuración para cargar mis propias variables de entorno según corresponda.
[ X ] Debe existir como mínimo la URL para conectarme a mi BD de MongoDB (local o en la nube)
[ X ] Crear archivos de ambiente para desarrollo y producción donde, desarrollo le debe apuntar a la BD en local y prod a la BD de mongo atlas.

## Crear el conector para la BD en modo Singleton para garantizar una sola conexión a la misma.

Crear una nueva clase mongodb-singleton.js para:

[ X ] Lograr crear una sola instancia de mongo.
[ X ] La clase debe usar nuestro archivo de config para conectarse.

## Modificar los routers para usar ahora el patron controlller:

[ X ] Modificar los routers de usuaros y cursos para poder seguir manejando su funcionaliodad tal cual como estaba pero usando el patrón Controller.
[ X ] Crear los metodos correspondientes a cada uno de los controllers para que puedan ser llamados por el router. Usar clean code!

- OJO: Esto no aplica para los routers de vistas, no es necesario.

## Crear la clase de manejo de logs con Winston

[ X ] crear una clase logger js para poder realizar logueos de tus apis por medio de middleware, usar los niveles estandar.

## Crear el patrón repository para los cursos:

[ X ] Basandose en el actual patrón ya implementado para Estudiantes, realizar el proceso para crear el repository de Courses. (Cursos del estudiante)

## Uso de Email (opcional si alcanza el tiempo):

Se crea el servicio de mailing en la carpeta services y se agregan las variables MAILING_USER, MAILING_SERVICE, MAILING_PASSWORD respectivamente.

[ ] Utilizar el servicio de mailing para cuando un usuario se registre en la app.

- NUEVOS IMPORTS:

[ X ] winston
[ X ] swagger-jsdoc
[ X ] swagger-ui-express
[ X ] chai: en modo development
[ X ] mocha: en modo development
