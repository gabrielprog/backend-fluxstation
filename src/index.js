const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 8080;

const routes = require('./routers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
