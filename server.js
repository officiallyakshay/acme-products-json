const express = require('express');
const path = require ('path');
const app = express();

const db = require ('./db')('./products.json', (item, items) => {
  if (!item.name) {
    return 'name is required';
  }
  if (items.map( i => i.name ).includes(item.name)) {
    return 'name must be unique';
  }
});

app.use(express.json());

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

app.post('/api/products', async (req, res, next) => {
  try {
    res.send(await db.create(req.body));
  }
  catch (ex) {
    next (ex);
  }
});




app.listen(4000, () => console.log('listening on port 4000'));
