const mongoose=require('mongoose');
const noticiaSchema=mongoose.Schema({
    tipo:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    link_image:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});
module.exports=mongoose.model('Noticia',noticiaSchema);