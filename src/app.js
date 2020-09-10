const express = require('express')
const projectZeroRouter = require('./routers/projectZero/router');
const app = express()
const port = 3001

app.use('/project-zero', projectZeroRouter);

app.get('/', (req,res) => { res.send('Hello')})

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})