const mongoose = require("mongoose")
const Estudio = require("../models/estudio")

// post
const create = async(request, response)=>{
    const estudio = new Estudio({
        _id: mongoose.Types.ObjectId(),
        nome:request.body.nome,
        criadoEm:request.body.criadoEm
    })

    const estudioJaExiste = await Estudio.findOne({nome:request.body.nome})
    if(estudioJaExiste){
        return response.status(409).json({error:"estudio já cadastrado"})
    }

    try{
        const novoEstudio = await estudio.save()
        response.status(201).json({novoEstudio})
    }catch(err){
        response.status(500).json({message: err.message})
    }
}


// get
const getAll = async(request, response)=>{
    const estudios = await Estudio.find()
    return response.status(200).json(estudios)
}






module.exports = {
    create,
    getAll
}