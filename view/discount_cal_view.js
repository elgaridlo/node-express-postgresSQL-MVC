const express = require("express")
const router = express.Router()
const discController = require("../controller/discount_contoller")
const convertTime = require("../controller/convertTime_controller")


router.get('/discount', discController.index)
router.get('/discount/:id', discController.getId)
router.put('/discount', discController.create)
router.get('/convert/:id', convertTime.convert)

module.exports = router