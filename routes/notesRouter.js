const express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')

router.get('/', noteController.index)

router.get('/:id', noteController.show)

router.get('/create', noteController.create)

router.post('/store', noteController.store)

router.post('/update', noteController.update)

router.post('/delete', noteController.destroy)

module.exports = router