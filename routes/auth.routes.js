import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Router } from "express";
import prisma from "../lib/prisma.js";

const router = Router();

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // El 10 es el número de rondas de salt

  // Validar si el email ya está en uso
  const isEmailTaken = await prisma.user.findUnique({
    where: { email },
  });

  if (isEmailTaken) {
    return res.status(400).json({ error: 'Email ya utilizado' });
  }

  const newUser = await prisma.user.create({
    data: { email, password: hashedPassword, name },
  });

  return res.status(201).json({ message: 'Usuario creado', userId: newUser.id });
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Buscar al usuario por email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  // Verificar la contraseña
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  // Generar el token JWT
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return res.status(200).json({ message: 'Login exitoso', token });
})

export default router;
