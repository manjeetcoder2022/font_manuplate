function setup(){
    canvas= createCanvas(600,500)

   
    video= createCapture(VIDEO)
    video.size(400,400)
    canvas.center()
    poseNet= ml5.poseNet(video,modelloaded)
    poseNet.on('pose',getPoses)
}
leftWristX=0
rightWristX=0
noseX=0
noseY=0
differnce=0
function modelloaded(){
    console.log("modelLoaded Successfully")
}
function getPoses(results){
if(results.length>0){
   
         
            console.log(results)
        leftWristX= Math.floor(results[0].pose.leftWrist.x)
        rightWristX= Math.floor( results[0].pose.rightWrist.x)
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
        differnce= leftWristX-rightWristX
    }
   
}
var text_get=""
function changeText(){
    text_get= document.getElementById("user_text").value
    
}
function draw(){
   
    background("pink")
   
    console.log(noseX,noseY)
   
textSize(differnce)
random_r= Math.floor((Math.random()*255))
random_G= Math.floor((Math.random()*255))
random_B= Math.floor((Math.random()*255))

fill(random_r,random_G,random_B)
stroke(random_r,random_G,random_B)

text(text_get,100,300)
console.log("text size " + differnce)
}
