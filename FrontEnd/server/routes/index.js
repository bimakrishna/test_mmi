const express = require("express")
const employeeControlller = require("../controllers/employeeController")
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const positionCOntroller = require('../controllers/positionController')

router.get('/', employeeController.allEmployee)
router.post('/', employeeControlller.addEmployee)
router.put('/:id', employeeController.editEmployee)
router.delete('/:id', employeeController.deleteEmployee)

router.get('/position', positionCOntroller.allPosition)

module.exports = router