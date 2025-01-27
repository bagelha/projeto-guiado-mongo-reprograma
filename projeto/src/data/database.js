require("dotenv").config()
const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(console.log("DATABASE conectada")).catch(err => console.error)
}

module.exports = {connect}
