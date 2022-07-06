const express = require('express')
const app = express()
const port = 4000
const appRouter = require('./routes')

app.use('/', appRouter)

app.use((req, res) => {
  res.status(404).send('Error 404 | La página no pudo ser encontrada.');
});

app.listen(port, () => {
  console.log(`Server listens on port ${port}`)
})