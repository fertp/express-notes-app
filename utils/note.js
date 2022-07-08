const { readFile, writeFile } = require('../services/filesystem')
const path = require('path')

const fileName = path.join(__dirname, '../data/notes.json')
let notes = readFile(fileName)

const getNotes = () => {
  return notes
}

const setNotes = () => {
  notes = readFile(fileName)
}

const getNoteById = (id) => {
  return notes.find(n => n.id === Number(id))
}

const storeNote = (note) => {
  const newNote = { id: createNoteId(), ...note }
  const updatedNotes = [...notes, newNote]
  if (writeFile(fileName, updatedNotes)) {
    setNotes()
    return newNote
  }
}

const updateNote = (note) => {
  const oldNote = getNoteById(note.id)
  const newNote = {...oldNote, ...note}
  const updatedNotes = notes.map(n => n.id === note.id ? newNote : n )
  if (writeFile(fileName, updatedNotes)) {
    setNotes()
    return newNote
  }
}

const destroyNote = (id) => {
  const index = notes.findIndex(n => n.id === id)
  const updatedNotes = [...notes]
  const deletedNote = updatedNotes.splice(index, 1)
  if (writeFile(fileName, updatedNotes)) {
    setNotes()
    return deletedNote
  }
}

const createNote = (data) => {
  return {
    id: createNoteId(),
    color: '#fff',
    isActive: true,
    userId: 1,
    ...data
  }
}

const createNoteId = () => {
  const ids = notes.map(n => n.id)
  const max = Math.max(...ids)
  return max + 1
}


module.exports = {
  getNotes,
  getNoteById,
  storeNote,
  updateNote,
  destroyNote, 
  createNote
}