const express = require("express")
const router = express.Router()

const controller = require("../controllers/estudioController")

// create -> post -> save()
router.post("/create", controller.create)



// read -> get -> find()
router.get("/", controller.getAll)

// update -> patch -> save()

// delete -> delete -> remove()


module.exports = router