const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Notes App')
})

app.use((req, res) => {
  res.status(404).send('Error 404 | La página no pudo ser encontrada.');
});

app.listen(port, () => {
  console.log(`Server listens on port ${port}`)
})