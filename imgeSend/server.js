const express = require("express")
const app=express()
const http=require("http")
const jsonParser=express.json()

const server=http.createServer(app)
const io =require("socket.io")(server)

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("index")
})


io.on("connection",socket=>{
    console.log("a user connected")
    socket.on("stream",(url)=>{
        socket.broadcast.emit("stream",url)
    })
})

server.listen(3000,()=>{
    console.log("http://localhost:3000")
})


