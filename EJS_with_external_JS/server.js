const express=require("express")
const path=require("path")
const bodyParser=require("body-parser")

const app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join("public")))

app.set("view engine","ejs")

app.get("/",(req,res)=>{
  res.send("Welcome Buddy")
})

app.get("/home",(req,res)=>{
  res.render("home",{name:req.body.name})
})
app.post("/home",(req,res)=>{
  console.log(req.body.name)
  res.render("home",{name:req.body.name})
})

app.get("/login",(req,res)=>{
  res.render("login")
})


app.listen(3000,()=>{
  console.log("http://localhost:3000")
})