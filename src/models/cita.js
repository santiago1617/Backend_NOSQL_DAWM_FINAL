const mongoose=require('mongoose');
const citaSchema=mongoose.Schema({
    fecha:{
        type:Date,
        required:true
    },
    id_persona:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model('Cita',citaSchema);