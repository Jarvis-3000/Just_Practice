const express = require("express")
const ejsLayouts=require("express-ejs-layouts")
const app=express()
const path=require("path")
const PORT=process.env.PORT || 3000

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
app.set("layout","layouts/layout")

app.use(express.static(path.join(__dirname,"public")))
app.use(ejsLayouts)

const {indexRouter,homeRouter}=require("./routes/index")
app.use(indexRouter)
app.use(homeRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})