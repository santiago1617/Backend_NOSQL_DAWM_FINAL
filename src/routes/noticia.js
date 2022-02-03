const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router=express.Router();
const noticiaSchema= require('../models/noticia');

router.post('/',(req,res)=>{
    res.send("Creando Noticia")
    const cita=noticiaSchema(req.body);
    cita.save().then((data)=>{
        data
    }).catch((error)=>res.send({message:error}))
});
router.get("/",(req,res)=>{
    noticiaSchema.find()
    .then((data)=>{res.send(data)});
});
router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    noticiaSchema.remove({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=>res.send({message:error}));
});
module.exports=router;