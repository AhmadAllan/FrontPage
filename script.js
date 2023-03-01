const beat = document.querySelector(".beat");
const funTime = document.querySelector(".funTimebtn");
const audioBeat = document.querySelector(".audioBeat");
const auidoFun = document.querySelector(".audioFun")
const img = document.querySelector(".press");

//this function play the audio when click on beat button
beat.addEventListener('click', () => {
   if(audioBeat.paused){
    audioBeat.currentTime = 0;
    audioBeat.play();
    img.src = "image/tootgif.gif"
   } else{
    audioBeat.pause();
    img.src = "image/toot.png"
   }
   
   audioBeat.onended = function(){
    img.src = "image/toot.png"
   }
});


funTime.addEventListener("mouseover", () => {
    auidoFun.play();
}); 


