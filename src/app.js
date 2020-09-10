const express = require('express')
const projectZeroRouter = require('./routers/projectZero/router');
const app = express()
const port = process.env.PORT || 3001

app.use('/project-zero', projectZeroRouter);

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})