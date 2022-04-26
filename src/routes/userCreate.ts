const express = require('express')
const router = express.Router({ mergeParams: true })
import UserController from "../app/controllers/UserController";

router.post('/', UserController.store)

module.exports = router