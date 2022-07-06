const express = require('express')
const router = express.Router()
const notesRouter = require('./notesRouter')

router.get('/', (req, res) => {
  res.send('API')
})

router.use('/notes', notesRouter)

module.exports = router