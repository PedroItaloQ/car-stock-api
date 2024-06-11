import mongoose from 'mongoose';
import 'dotenv/config.js';

async function conectaNaDatabase() {
  if (!process.env.DB_CONNECTION_STRING) {
    throw new Error('A variável de ambiente DB_CONNECTION_STRING não está definida.');
  }

  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    throw error;
  }

  return mongoose.connection;
}

export default conectaNaDatabase;
