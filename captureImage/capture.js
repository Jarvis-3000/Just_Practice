'use strict'

const constraints = {
  video: {
    width: {min:300,max:350},
    height: {min:300,max:300},
    facingMode:"user",
  },
  audio:false,
};

//displaying stream
  
const localVideo = document.querySelector("#localVideo");

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

    canvas.width = image.clientWidth;
    canvas.height = image.clientHeight;

    ctx.drawImage(localVideo,0,0)

    
    if(!image.childElementCount){
        image.append(canvas)
    }
    else{
        image.replaceChild(canvas,image.firstElementChild)
    }
}

document.addEventListener("click",capture)
// setTimeout(()=>{
//     setInterval(capture,0)
// },1000)

