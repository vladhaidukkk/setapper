require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const initDatabase = require('./startUp/initDatabase');

const PORT = process.env.PORT ?? 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  const ROOT_DIR = path.resolve(__dirname, '../client/build');
  const INDEX_FILE = path.resolve(ROOT_DIR, 'index.html');

  app.use('/', express.static(ROOT_DIR));
  app.get('*', (req, res) => {
    res.sendFile(INDEX_FILE);
  });
}

const start = async () => {
  try {
    mongoose.connection.once('open', async () => {
      await initDatabase();
    });
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(chalk.green('MongoDB is connected'));
    app.listen(PORT, () => {
      console.log(chalk.green(`Server is running on PORT ${PORT}`));
    });
  } catch (error) {
    console.log(chalk.red('Server was not started:', error.message));
    process.exit(1);
  }
};

start();
