// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked!");
// }
// document.querySelector("button").addEventListener("click",function () {
//     alert("i got Clicked");
// }) 
// function HouseKeeper(yearOfExperience,name,cleaningreport){
//     this.name=name;
//     this.yearOfExperience=yearOfExperience;
//     this.cleaningreport=cleaningreport;
// }
var drumcount = document.querySelectorAll(".drum").length;
for(var i=0;i<drumcount;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
   var buttonInnerHtml = this.innerHTML;
  makesound(buttonInnerHtml);
  buttonamination(buttonInnerHtml);
});
}

function makesound(key){
    switch(key){
        case 'w':
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("tom-2.mp3");
    audio.play();
            break;
        case 's':
            var audio = new Audio("tom-3.mp3");
    audio.play();
            break;
        case 'd':
            var audio = new Audio("tom-4.mp3");
    audio.play();
            break;
        case 'j':
            var audio = new Audio("snare.mp3");
    audio.play();
            break;
        case 'k':
            var audio = new Audio("crash.mp3");
    audio.play();
            break;
        case 'l':
            var audio = new Audio("kick-bass.mp3");
    audio.play();
            break;
            default:console.log(ch);

    }
}
// var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
function buttonamination(currentkey){
    var activebutton=document.querySelector("."+currentkey);
     activebutton.classList.add("pressed");
     setTimeout(()=>{
         activebutton.classList.remove("pressed");
     },100);
}
addEventListener("keypress",(event)=>{
    console.log(event); 
    var ch=event.key;
   makesound(ch);
   buttonamination(ch);
})