# Ejercicio Manejo Insidencias Mongo

## Descripcion

---

Ejercicio practico para aprendizaje de react con reacion de un login sencillo, con creacion de api con tabla de usuarios, rate-limit y jwt:

---

## Modo de uso:

---

### Si desea consultar directamente sin el uso de la API:

1. Clonar el repositorio en su dispositivo
2. Es necesario de tener Mongo instalado en su computadora en caso de no ser asi le recomiendo visitar el siguiente link: https://www.youtube.com/watch?v=2cWZ0lFbJoY
3. Tambien es recomentable tener la extension `MongoDB for Vs Code`, en caso de no tenerla instalela, o utilize alguna otra plataforma que le permita ejecutar el archivo query para la creacion de las colecciones de la base de datos:
4. Para utilizar la extension haga lo siguiente:

- 4.1. Abra la extension desde el panel izquierdo de visual studio code, en el simbolo de la hoja
- 4.2. En conexiones abra el panel de nueva conexion
- 4.3. Si tiene una conexion configurada desde Athlas copie el string de la conexion con los datos de usuario y contraseña del perfil creado, si va a utilizar la conexion de la base de datos actual use el siguiente link `mongodb+srv://admin:admin123456@cluster0.y7pgxmx.mongodb.net/`
- 4.3. Si no tiene una conexion configurada y desea hacerlo de manera local selecciona la opcion avanzada y luego presione conectar para hacerlo de manera local o configure los datos de la conexion.

5. **SOLO Si** va a utilizar una conexion diferente a la de el proyecto Ejecutar el archivo query.mongodb que se encuentra dentro del directorio backend/db/scripts.

### Si desea hacer uso de la API:

1. Si desea crear la base de datos local siga los pasos del apartado anterior hasta el paso 4.
2. Revise que las configuraciones del archivo .env coincidan con las de su ordenador, si no es el caso cambielas.
3. Abra un nuevo bloque de comandos desde el archivo del repositorio, si esta usando visual estudio puede hacerlo desde la pestaña terminal > new terminal.
4. Con el comando "cd backend" ingrese a la carpeta backend.
5. Ejecute el comando `npm install`.
6. Ejecute el comando `npm run dev`.
7. La consola le mostrara la direccion http donde esta corriendo el servidor, la cual de manera predeterminada es `http://127.10.10.10:5010`
8. Ejecute un nuevo terminal los siguientes pasos, sin cerrar el anterior
9. Con el comando "cd frontend" ingrese a la carpeta frontend.
10. Ejecute el comando `npm install`.
11. Ejecute el comando `npm run dev`.
12. La consola le mostrara la direccion http donde esta corriendo el frontend
13. Ingrese al link que proporciona el terminal


---

## Funcionamiento

---

El login cuanta con un sistema sencillo de acceso, este le requerira un usuario y contraseña las cuales enviaran una peticion al servidor backend montado anteriormente y devolvera el rol del usuario que se loguea o en su defecto un mensaje informando que el usuario no existe, los usuarios disponibles los encontrara en la siguiente lista:

```json
  {
      usuario: "admin",
      contraseña: "contraseña123",
      rol: "admin"
  },
  {
      usuario: "paco1234",
      contraseña: "paco1234789*",
      rol: "usuarioo"
  }
```

    
---

# Creador:

## Andrès David ELizalde Peralta

---
