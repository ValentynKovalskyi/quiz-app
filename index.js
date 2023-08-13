const express = require('express');
require('dotenv').config();
const app = express();
const port = '7070';

app.get('/', ( req, res ) => {
 res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

