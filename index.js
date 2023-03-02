const express=require("express");
const { connection } = require("./config/db");
const cors=require("cors");
const crypto=require("crypto");
const { UserModel } = require("./model/user.model");
require("dotenv").config()
const app=express();
app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page");
})
app.get("/word",(req,res)=>{
    let lowerCase="abcdefghijklmnopqrstuvwxyz"
    let word="";
    let length=0;
    const level=req.query.level
    if(level===undefined){
        res.send("Pass Level")
    }
    if(level==='easy'){
       length=4
    }else if(level=="medium"){
        length=6
    }else{
        length=8
    }
    for(let i=0;i<length;i++){
        word=word+lowerCase[crypto.randomInt(25)]
    }
    res.send(word)
})
app.post("/user",async (req,res)=>{
    console.log(req.body);
    const newuser=new UserModel(req.body);
    newuser.save();
    res.send(req.body);
})
app.get("/user",async(req,res)=>{
    const users=await UserModel.find().sort({score:-1});
    res.send(users)
})
app.listen(process.env.PORT,async ()=>{
    try {
        await connection
       console.log("Connected to DB") 
    } catch (error) {
        console.log(error)
    }
})