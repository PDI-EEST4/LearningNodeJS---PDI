# NodeJS

NodeJS es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor.

Nosotros vamos a estar utilizando NodeJS para crear APIs con la ayuda del framework Express

### Instalación

Para instalar NodeJS, siga los siguientes pasos:

1. Descarga la última versión de NodeJS de la página oficial: https://nodejs.org/en/download/.
2. Ejecuta el instalador y sigue las instrucciones para instalar NodeJS en tu sistema.
3. Verifica que NodeJS se ha instalado correctamente ejecutando el comando `node -v` y `npm -v`.

### Creación de un proyecto NodeJS 

1. Crea un directorio para tu proyecto y entra en él.
2. Accede a la terminal o CMD en el directorio creado, o bien abre el visual sobre esa carpeta y ejecuta el comando `npm init -y`.
3. En el archivo `package.json` recién creado, agrega esta lineaa: `"type": "module"`
3. Ejecuta el comando `npm install express` para instalar el framework Express.
4. Crea un archivo llamado `index.js` y agrega el siguiente código:


```javascript
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'Hola 7mo!'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mi aplicacion esta funcionando en http://localhost:${port}`);
})
```
5. Ejecuta el comando `node index` para iniciar el servidor.
6. Accede a `http://localhost:3000` en tu navegador para ver el resultado.

**Nota:** Pueden instalar nodemon (`npm install nodemon`) y ejecutar `nodemon index` para que la aplicación se reinicie automáticamente cuando se haga cambios en el código.

### Rutas

En términos de APIs, las rutas son las URLs que se utilizan para acceder a los recursos de nuestra API. Generalmente las rutas refieren a un elemento o entidad dentro de nuestro sistema como usuarios, productos, etc.

Ejemplos:
* `GET /users` - Obtener todos los usuarios
* `GET /users/:id` - Obtener un usuario por su ID
* `POST /tareas` - Crear una nueva tarea
* `GET /usuarios/:id_usuario/tareas` - Obtener todas las tareas de un usuario
* `GET /usuarios/:id_usuario/tareas/:id_tarea` - Obtener una tarea de un usuario por su ID

Para poder definirlas en nuestra API, Express nos ofrece una solución muy sencilla: su método Router.

En la materia vamos a crear diferentes archivos de rutas para diferentes entidades. En la carpeta `routes` vamos a crear un archivo llamado `tareas.routes.js` y vamos a agregar el siguiente código:

```javascript
// routes/tareas.routes.js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    message: 'Todas las tareas'
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  
  return res.json({
    message: `Tarea ${id}`
  });
});

router.post('/', (req, res) => {
  const { titulo, descripcion, path } = req.body;

  return res.json({
    message: `Tarea "${titulo}" creada con exito`,
    tarea: req.body
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, path } = req.body;
  
  return res.json({
    message: `Tarea ${id} actualizada con exito`,
    tarea: req.body
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  return res.json({
    message: `Eliminar tarea ${id}`
  });
});

export default router;
```

Ademas, vamos a crear un archivo llamado `index.js` en la carpeta `routes` y vamos a agregar el siguiente código:

```javascript
import express from 'express';
import tareasRouter from './tareas.routes.js';

const router = express.Router();

router.use('/tareas', tareasRouter);
/* router.use('/otraCosa', otroRouter) */

router.get('/', (req, res) => {
  return res.json({
    message: 'Inicio de mi API'
  });
});

export default router;
```

Este archivo es el que vamos a exportar para poder utilizarlo en nuestra API.

Por último, en nuestro archivo `index.js` vamos a agregar el siguiente código:

```javascript
// index.js
import express from 'express';
import routes from './routes/index.js';

const app = express();

// Middlewares
app.use(express.json());  // Para poder leer el req.body

// Rutas
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mi aplicacion esta funcionando en http://localhost:${port}`);
})
```

Ahora al realizar solicitudes a nuestro API desde Postman a las rutas de tareas, podemos ver el resultado de nuestras rutas.

Fijense que en algunos archivos se acceden a diferentes propiedades de la request (req), como req.params, req.body, etc. Estas propiedades corresponden a diferentes tipos de datos que podemos utilizar al momento de realizar en las solicitudes

* `req.params` - Para acceder a los parametros de la URL. Ejemplo: `GET /users/:id` donde :id es el parametro y al ser reemplazado por "1" (por ejemplo) se obtendría el usuario con id 1
* `req.body` - Para acceder al cuerpo de la solicitud (muy usado para los datos que enviamos por formulario)
* `req.query` - Para acceder a los query params de la URL. Se suele usar para obtener filtros o paginación. Ejemplo: `GET/users?limit=10` donde limit es el query param y al ser reemplazado por "10" se obtendría los 10 primeros usuarios