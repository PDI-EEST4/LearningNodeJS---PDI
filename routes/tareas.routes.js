import express from 'express';
import prisma from '../lib/prisma.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const tareas = await prisma.tarea.findMany();

  return res.json(tareas);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tarea = await prisma.tarea.findUnique({
    where: {
      id: id
    }
  })

  return res.json(tarea);
});

router.post('/', async (req, res) => {
  const { titulo, descripcion, path } = req.body;
  
  await prisma.tarea.create({
    data: {
      titulo: titulo,
      descripcion: descripcion,
      path: path
    }
  })

  return res.json({
    message: `Tarea "${titulo}" creada con exito`,
  });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, path } = req.body;

  await prisma.tarea.update({
    where: {
      id: id
    },
    data: {
      titulo: titulo,
      descripcion: descripcion,
      path: path
    }
  })
  
  return res.json({
    message: `Tarea ${id} actualizada con exito`,
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await prisma.tarea.delete({
    where: {
      id: id
    }
  })
  
  return res.json({
    message: `Eliminar tarea ${id}`
  });
});

export default router;