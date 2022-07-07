const express = require('express')
const app = express()
const port = 4000
const appRouter = require('./routes')
const apiRouter = require('./routes/api')

app.use(express.urlencoded({ extended: true }))

app.use('/', appRouter)
app.use('/api', apiRouter)

app.use((req, res) => {
  res.status(404).send('Error 404 | La página no pudo ser encontrada.');
});

app.listen(port, () => {
  console.log(`Server listens on port ${port}`)
})