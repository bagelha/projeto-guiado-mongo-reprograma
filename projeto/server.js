const express = require("express")
const app = express()

app.use(express.json())

// conectar db 
const db = require("./src/data/database")
db.connect()

// conectar database

// usar rotas
const titulo = require("./src/routes/titulos.routes")
const estudio = require("./src/routes/estudios.routes")

app.use("/titulos", titulo)
app.use("/estudios", estudio)





app.listen(3333, ()=> console.log("porta funcionando"))