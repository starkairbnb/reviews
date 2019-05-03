// require('newrelic');
const express = require('express');
const router = require('./router.js');

const app = express();
app.use(express.static(`${__dirname}/../public`));

app.use('/api', router);

const port = 3004;

app.listen(port, () => console.log(`Server up on ${port}`));