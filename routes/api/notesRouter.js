const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Notes App')
})

router.get('/:id', (req, res) => {
  res.send(`mostrar nota con id ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('Crear nota')
})

router.put('/:id', (req, res) => {
  res.send('Actualizar nota')
})

router.delete('/:id', (req, res) => {
  res.send('Eliminar nota')
})

module.exports = router