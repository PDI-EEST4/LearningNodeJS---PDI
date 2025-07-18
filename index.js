import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();

// Middlewares
app.use(express.json());  // Para poder leer el req.body
app.use(cors());

// Rutas
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mi aplicacion esta funcionando en http://localhost:${port}`);
})