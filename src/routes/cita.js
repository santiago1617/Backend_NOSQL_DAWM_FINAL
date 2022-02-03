const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router=express.Router();
const citaSchema= require('../models/cita');

router.post('/',(req,res)=>{
    res.send("Creando cita")
    const cita=citaSchema(req.body);
    cita.save().then((data)=>{
        data
    }).catch((error)=>res.send({message:error}))
});
router.get("/",(req,res)=>{
    citaSchema.find()
    .then((data)=>{res.send(data)});
});
router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    citaSchema.remove({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=>res.send({message:error}));
});
module.exports=router;