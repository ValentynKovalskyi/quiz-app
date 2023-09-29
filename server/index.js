const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || '8080';

app.use(express.static('../client/quiz-app/dist'));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', ( req, res ) => {
    res.sendFile('index', {root: '../client/quiz-app/dist'});
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

const emailService = require('./src/services/email.service');

emailService.sendMail("kovalsky.valentine@gmail.com", "S", "S");