const express = require("express")
const router = express.Router()

const controller = require("../controllers/tituloController")

// create -> post -> save()
router.post("/create", controller.create)

// read -> get -> find()
router.get("/", controller.getAll)
router.get("/marvel", controller.mostraMarvel)

// update -> patch -> save()

// delete -> delete -> remove()



module.exports = router