'use strict'
const socket=io()

const constraints = {
  video: {
    width: {min:300,max:350},
    height: {min:300,max:300},
    facingMode:"user",
  },
  audio:true,
};

//displaying stream
  
const localVideo = document.querySelector("#localVideo");
const img=document.querySelector("img")

function gotLocalStream(stream) {
  localVideo.srcObject=stream;
}

//accessing mediaDevices
if (navigator.mediaDevices.getUserMedia) {
 
  navigator.mediaDevices
    
    .getUserMedia(constraints)

    .then(stream=>gotLocalStream(stream))
    
    .catch(err=>console.log(err));
}


//capture image

function capture(){

    var image=document.querySelector(".screenshot")
    const canvas=document.createElement("canvas")
    const ctx=canvas.getContext('2d')

    canvas.width = 300;
    canvas.height = 300;

    ctx.drawImage(localVideo,0,0)

    
    // if(!image.childElementCount){
    //     image.append(canvas)
    // }
    // else{
    //     image.replaceChild(canvas,image.firstElementChild)
    // }

    console.log(canvas.toDataURL())
    // img.src=canvas.toDataURL()

    socket.emit("stream",canvas.toDataURL())
}

// document.addEventListener("dblclick",capture)
setTimeout(()=>{
    setInterval(capture,0)
},1000)

socket.on("stream",url=>{
  img.src=url
})


