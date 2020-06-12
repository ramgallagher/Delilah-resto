const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRouter = require('./routes/api');

const app = express();

require('./db');


// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);



app.listen(3000, () => {
    console.log('Server up and running');
});