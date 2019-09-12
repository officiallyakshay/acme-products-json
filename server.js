const express = require('express');
const path = require ('path');
const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', async (req, res, next) => {
  try {
    res.send(await db.findAll());
  }
  catch(ex) {
    next(ex);
  }
});




app.listen(4000, () => console.log('listening on port 4000'));
