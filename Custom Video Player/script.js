const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

// functions

// function to toggle video status 
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
}

//function to change the icon when video is playing / paused
function updatePlayIcon(){
    if(video.paused){
    play.innerHTML = `<i class="fa fa-play fa-2x">`
    } else{
    play.innerHTML = `<i class="fa fa-pause fa-2x">` 
    }
}
//function to update the progress bar & timestamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100

    // get minutes
 let mins = Math.floor(video.currentTime / 60);
 if(mins < 10){
     mins = "0" + String(mins)
 }

// get seconds
let secs = Math.floor(video.currentTime % 60);
if(secs < 10){
    secs = "0" + String(secs)
}

timestamp.innerHTML = `${mins}:${secs}`;
}
//function to set the video progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100


}
//function to stop the video
function stopVideo(){
    video.currentTime=0;
    video.pause()
}






// events

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress )

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress)