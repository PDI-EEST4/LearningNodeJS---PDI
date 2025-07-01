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