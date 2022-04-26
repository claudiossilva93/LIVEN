const express = require('express')
const router = express.Router({ mergeParams: true })
import AuthController from "../app/controllers/AuthController";

router.post('/', AuthController.authenticate)

module.exports = router