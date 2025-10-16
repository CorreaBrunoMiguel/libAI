import express from 'express';
import cors from 'cors';

import booksRouter from './routes/books.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/books', booksRouter);

app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.listen(4000, () => console.log('Backend running on port 4000'));
