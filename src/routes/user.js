const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router=express.Router();
const userSchema= require('../models/user');

router.post('/users',(req,res)=>{
    res.send("Creando usuario")
    const user=userSchema(req.body);
    user.save().then((data)=>{
        data
    }).catch((error)=>res.send({message:error}))
});

router.get('/users',(req,res)=>{
    userSchema.find()
    .then((data)=>{res.send(data)});
});
router.put("/users/:id",(req,res)=>{
    const {id}=req.params;
    const {user,password,tipo}=req.body;
    userSchema.
    updateOne({_id:id},{$set:{user,password,tipo}})
    .then((data)=> res.json(data))
    .catch((error)=>res.send({message:error}));
});
router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    userSchema.remove((data)=> res.json(data))
    .catch((error)=>res.send({message:error}));
});

router.get("/roles/:idRol",(req,res)=>{
    userSchema.find({tipo:req.params.idRol})
    .then(data=>{res.send(data)})
    .catch((error)=>res.send({message:error}));
});

module.exports=router;