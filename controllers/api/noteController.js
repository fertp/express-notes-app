const { getNotes, getNoteById, storeNote, updateNote, destroyNote, createNote } = require('../../utils/note')

const index = (req, res) => {
  const notes = getNotes()
  res.status(400).json(notes)
}

const show = (req, res) => {
  try {
    const id = Number(req.params.id)
    if (id !== undefined) {

      const reg = getNoteById(id)
      if (reg) {
        return res.status(200).json(reg)
      }

      return respondWithNotFound(res)
    }

    throw 'El id está undefined'
    
  } catch (e) {
    respondWithInternalError(e, res)
  }
}

const store = (req, res) => {
  try {
    const note = createNote(req.body); console.log(note)
    const reg = storeNote(note)
    res.status(200).json(reg)

  } catch (e) {
    return respondWithInternalError(e, res)
  }
}

const update = (req, res) => {
  try {
    const note = {...req.body}
    if (note.id !== undefined) {
      note.id = Number(note.id)

      if (getNoteById(note.id)) {
        const reg = updateNote(note)
        return res.status(200).json(reg)
      }
      
      return respondWithNotFound(res)
    }

    throw 'El id está undefined'

  } catch (e) {
    return respondWithInternalError(e, res)
  }
}

const destroy = (req, res) => {
  try {
    if (req.body.id !== undefined) {
      const id = Number(req.body.id)
      
      if (getNoteById(id)) {
        const reg = destroyNote(id)
        res.status(200).json(reg)
      }

      return respondWithNotFound(res)
    }

    throw 'El id está undefined'

  } catch (e) {
    return respondWithInternalError(e, res)
  }
}

const respondWithNotFound = (res) => {
  return res.status(404).json({
    error: 404,
    message: 'No existe la nota.'
  })
}

const respondWithInternalError = (e, res) => {
  console.log(e)
  return res.status(500).send({
    message: 'Ha ocurrido un error.'
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}