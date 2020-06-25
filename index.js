const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const apiRouter = require('./routes/api');

const app = express();

require('./db');


// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// utilizar postman o ingresar a api-docs//

app.listen(3000, () => {
    console.log('Server up and running');
});