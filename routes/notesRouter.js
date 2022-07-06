const express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')

router.get('/', noteController.index)

router.get('/:id', noteController.show)

router.post('/', noteController.store)

router.put('/:id', noteController.update)

router.delete('/:id', noteController.destroy)

module.exports = router