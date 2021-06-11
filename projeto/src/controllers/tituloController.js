const mongoose = require("mongoose")
const Titulo = require("../models/titulo")

const create = async (request, response)=>{
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        genero: request.body.genero,
        descricao: request.body.descricao,
        estudio: request.body.estudio,
        criadoEm: request.body.criadoEm
    })

    // lembrar de criar regra de não criar titulo que ja existe

    try{
        const novoTitulo = await titulo.save()
        response.status(201).json(novoTitulo)
    }catch(err){
        response.status(400).json({message: err.message})
    }
}


// get
const getAll = async(request,response)=>{
    const titulos = await Titulo.find().populate("estudio")
    return response.status(200).json(titulos)
}


// mostra titulos marvel
const mostraMarvel = async(request, response)=>{
    const titulos = await Titulo.find().populate("estudio")
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "marvel")

    response.status(200).json(titulosFiltrado)
}


module.exports = {
    create, 
    getAll,
    mostraMarvel
}