import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const app = express();

conectaNaDatabase().then(() => {
  console.log('Conexão com o banco feita com sucesso');
}).catch((erro) => {
  console.error('Erro ao conectar ao banco', erro);
});

routes(app);

app.delete('/cars/:id', (req, res) => {
  const index = buscaCar(req.params.id);
  if (index !== -1) {
    cars.splice(index, 1);
    res.status(200).send('Carro removido com sucesso');
  } else {
    res.status(404).send('Carro não encontrado');
  }
});

export default app;
