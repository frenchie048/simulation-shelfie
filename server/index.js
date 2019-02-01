const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log('Connected to KACL database!')
});

app.get('/api/inventory', controller.getInventory);

app.post('/api/product', controller.createProduct);

// app.delete('/api/inventory/:id', controller.deleteProduct);

const PORT = 4000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));