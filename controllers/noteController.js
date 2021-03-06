const { getNotes, getNoteById, storeNote, updateNote, destroyNote, createNote } = require('../utils/note')

const index = (req, res) => {
  res.render('home', { notes: getNotes() })
}

const create = (req, res) => {
  res.render('note')
}

const show = (req, res, next) => {
  if (req.params.id !== undefined) {
    const note = getNoteById(req.params.id)
    if (note) return res.render('note', { note })
  }
  next()
}

const store = (req, res) => {
  const note = createNote(req.body)
  const reg = storeNote(note)
  res.redirect(`/notes/${reg.id}`)
}

const update = (req, res, next) => {
  const note = {...req.body}
  if (note.id !== undefined) {
    note.id = Number(note.id)
    
    if (getNoteById(note.id)) {
      const reg = updateNote(note)
      return res.render('note', { note: reg })
    }
  }
  next()
}

const destroy = (req, res) => {
  if (req.body.id !== undefined) {
    const id = Number(req.body.id)

    if (getNoteById(id)) {
      const reg = destroyNote(Number(id))
      res.redirect('/notes')
    }
  }
}

module.exports = {
  index,
  create,
  show,
  store,
  update,
  destroy
}