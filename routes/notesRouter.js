const express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')

router.get('/', noteController.index)

router.get('/create', noteController.create)

router.post('/create', noteController.store)

router.post('/delete', noteController.destroy)

router.get('/:id', noteController.show)

router.post('/:id', noteController.update)

module.exports = router