const express = require('express')
const app = express()
const port = 8080

const routes = require('./routers');

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
