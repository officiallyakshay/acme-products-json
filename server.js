const express = require('express');
const path = require ('path');
const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000, () => console.log('listening on port 4000'));
