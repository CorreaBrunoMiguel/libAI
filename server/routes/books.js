import express from 'express';
import { PrismaClient } from '@prisma/client';

import { upload } from '../middleware/uploads.js';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (_, res) => {
  const books = await prisma.book.findMany();
  res.json(books);
});

router.post('/uploads', upload.single('file'), async (req, res) => {
  try {
    const { title, author, category } = req.body;
    const filePath = `/uploads/${req.file.filename}`;

    const book = await prisma.book.create({
      data: {
        title,
        author,
        category,
        filePath,
      },
    });

    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao fazer upload do livro.' });
  }
});

export default router;
