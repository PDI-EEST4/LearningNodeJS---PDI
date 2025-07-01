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
