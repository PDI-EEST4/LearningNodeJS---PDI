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