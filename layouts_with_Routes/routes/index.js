const express=require("express")
const indexRouter=express.Router()
const homeRouter=express.Router()

indexRouter.get("/",(req,res)=>{
    console.log("router is working")
    res.render("index")
})

homeRouter.get("/home",(req,res)=>{
    console.log("router is working")
    res.render("home")
})



module.exports={indexRouter,homeRouter}