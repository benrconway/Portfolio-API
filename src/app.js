const express = require('express')
const projectZeroRouter = require('./routers/projectZero/router');
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Welcome to my Portfolio API');
})

app.use('/project-zero', projectZeroRouter);

app.listen(port, () => {
  console.log(`Server is running...`)
})