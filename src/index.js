const express=require("express");
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const userRoutes=require('./routes/user');
const citasRoutes=require('./routes/cita');
const noticiasRoutes=require('./routes/noticia');
const port= process.env.PORT ||9000;
//middleware
app.use(express.json());
app.use('/api',userRoutes);
app.use('/citas',citasRoutes);
app.use('/noticias',noticiasRoutes);


app.listen(port,()=> console.log("server listening on port ",port));
app.get("/",(req,res)=>{
res.send("Bienvenido")
});
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to ATLASS"))
.catch((error)=>console.log("Erorr porque no se conecto a ATLAS"));
