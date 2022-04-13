const express = require('express');
const chalk = require('chalk');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const initDatabase = require('./startUp/initDatabase');

const PORT = config.get('port') ?? 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  console.log('production');
}

const start = async () => {
  try {
    mongoose.connection.once('open', async () => {
      await initDatabase();
    });
    await mongoose.connect(config.get('mongodbUri'));
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
