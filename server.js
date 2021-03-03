const express =require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');

const app =express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.json({message:"welcome to home page"})
})



const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`start at port no ${port}`));

