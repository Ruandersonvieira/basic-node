const express = require('express');
const MongoClient = require('mongodb');

const app = express();

const url = 'mongodb://localhost:27017/producthunter';

MongoClient.connect(url, { useNewUrlParser : true });

require('./src/models/Product');

app.get('/', (req, res) => {
  return res.json({ message: "working" });
});

app.listen(3333, () => {
  console.log(`Server started on port`);
});