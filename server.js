const express = require('express');
const requireDir = require('require-dir');
require('./src/config/db/Mongo');

requireDir('./src/models');

const app = express();

app.use(express.json());

app.use('/api', require('./src/routes'));

app.listen(3338, () => {
  console.log(`Server started`);
});