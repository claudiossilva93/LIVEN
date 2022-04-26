const express = require('express')
const router = express.Router({ mergeParams: true })
import UserController from "../app/controllers/UserController";

router.get('/:id', UserController.getById)
router.delete('/:id', UserController.deleteById)
router.put('/:id', UserController.update)

module.exports = router