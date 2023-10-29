const express = require('express')
const SerieRouter = express.Router()
const Serie = require('../model/Serie')

SerieRouter.get("/", (req,res)=>{
    Serie.find()
    .then(datos=> res.json(datos))
    .catch(err=> res.json({error: err}))
})

SerieRouter.get("/Hola", (req,res)=>{
    res.render("Hola Mundo")
})

SerieRouter.post("/", (req,res)=>{
    const serie = new Serie(req.body)
    serie.save()
    .then(datos => res.json(datos))
    .catch(err => res.json({error: err}))
})

SerieRouter.patch("/", (req,res)=>{
    const serie = new Serie(req.body)
    serie.updateOne({_id: serie._id},serie)
    .then(datos => res.json(datos))
    .catch(err => res.json({error: err}))
})

SerieRouter.delete("/:id", (req,res)=>{
    Serie.deleteOne({_id: req.params.id})
    .then(datos=> res.json(datos))
    .catch(err=> res.json({error: err}))
})

module.exports = SerieRouter;