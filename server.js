const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000; // Ou qualquer outra porta de sua preferência

const dbConfig = {
  host: '34.95.206.154',
  user: 'root',
  password: 'prjto@T20',
  database: 't20',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida!');
  }
});

app.use(express.json());
app.use(cors());

// Rota para lidar com a inserção no banco de dados
app.post('/inserir-dados', (req, res) => {
  const { nome, descricao } = req.body;

  // Realize a inserção no banco de dados usando a conexão criada
  const query = 'INSERT INTO TIPO_EFEITO (NOME, DESCRICAO) VALUES (?, ?)';
  connection.query(query, [nome, descricao], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).json({ error: 'Erro ao inserir dados no banco de dados.' });
    } else {
      console.log('Dados inseridos com sucesso!');
      res.status(200).json({ message: 'Dados inseridos com sucesso!' });
    }
  });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}.`);
});
