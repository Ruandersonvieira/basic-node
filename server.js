const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: "working" });
});

app.listen(3333, () => {
  console.log(`Server started on port`);
});