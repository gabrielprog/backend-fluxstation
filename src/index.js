const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 8080;

const routes = require('./routers');

const corsOptions = {
  AccessControlAllowOrigin: '*',  
  origin: '*',  
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' 
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
