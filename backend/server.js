import pool from './db.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// LISTAR USUÁRIOS
app.get('/usuarios', async (req, res) => {
  try {

    const result = await pool.query('SELECT * FROM usuarios');

    res.json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro banco');
  }
});

// CADASTRAR USUÁRIO
app.post('/usuarios', async (req, res) => {
  try {

    const { nome, email } = req.body;

    const result = await pool.query(
      'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao cadastrar');
  }
});

// SERVIDOR
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});