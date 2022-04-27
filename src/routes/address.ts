const express = require('express')
const router = express.Router({ mergeParams: true })
import AddressController from "../app/controllers/AddressController";

router.post('/', AddressController.store)
router.get('/:id', AddressController.getById)
router.get('/', AddressController.get)
router.delete('/:id', AddressController.deleteById)
router.put('/:id', AddressController.updateAddress)

module.exports = router