audioElement = new Audio("sound.mp3")
let car = document.body

car.addEventListener("click",()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.loop=true
        audioElement.play();
    }
    else{
        audioElement.pause()
    }
})