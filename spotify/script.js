console.log("welcome to spotify");

// initilize th variable
  let songindex=0;
  let audioElement = new Audio ('songs/1.mp3');
  let masterPlay = document.getElementById('masterplay');
  let myProgressBar = document.getElementById('myProgressBar');
  let gif = document.getElementById('gif');
  let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs =[
    { songName:"ambersariya",filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},   
    { songName:"besharam rang",filePath:" songs/2.mp3", coverPath:"cover/2.jpg"},   
    { songName:"one bottle down",filePath:" songs/3.mp3", coverPath:"cover/3.jpg"},   
    { songName:"bardaybash",filePath:" songs/4.mp3", coverPath:"cover/4.jpg"},   
    { songName:"experthjat",filePath:" songs/5.mp3", coverPath:"cover/5.jpg"},   
    { songName:"daud ki chori",filePath:" songs/6.mp3", coverPath:"cover/6.jpg"},   
    { songName:"angreji beat",filePath:" songs/6.mp3", coverPath:"cover/7.jpg"},   
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
//  audioElement.play();
//handle play/pause click
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('fa-regular')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
 })
}
 Array.from(document.getElementsByClassName('fa-regular')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src='songs/${index+1}.mp3';
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
   })
})

