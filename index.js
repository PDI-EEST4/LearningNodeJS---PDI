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