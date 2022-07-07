const notes = require('../data/notes.json')

const index = (req, res) => {
  res.send('Listar notas')
}

const show = (req, res) => {
  res.send(`mostrar nota con id ${req.params.id}`)
}

const store = (req, res) => {
  res.send('Crear nota')
}

const update = (req, res) => {
  res.send('Actualizar nota')
}

const destroy = (req, res) => {
  res.send('Eliminar nota')
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}