var buttonhtml = document.querySelectorAll(".voice").length
for(var i = 0 ; i<buttonhtml ; i++){
   var buttonhtml = this.innerHTML
   makesound(buttonhtml)//pressing button
}
document.addEventListener("keypress",function(event){
makesound(event.key)
})
function makesound(key){
    switch (key) {
    case "w":
    var crash = new Audio("/sounds/crash.mp3")
    crash.play()
    break;
    case "i":
    var snare = new Audio("/sounds/snare.mp3");
    snare.play();
    break;
    case "j":
   var tom1 = new Audio("/sounds/tom-1.mp3");
   tom1.play();
   break;
   default:
 }
 }
