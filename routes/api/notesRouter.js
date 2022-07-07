const express = require('express')
const router = express.Router()
const noteController = require('../../controllers/api/noteController')

router.get('/', noteController.index)

router.get('/:id', noteController.show)

router.post('/', noteController.store)

router.put('/', noteController.update)

router.delete('/', noteController.destroy)

module.exports = router