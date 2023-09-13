const express = require('express');
require('dotenv').config();
const app = express();
const port = '7070';

app.use(express.static('./client/quiz-app/dist'));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', ( req, res ) => {
    res.sendFile('index');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

