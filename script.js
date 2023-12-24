var numOfButtons=document.querySelectorAll(".song").length;

for(var i=0; i<numOfButtons; i++){
    document.querySelectorAll(".song")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "C":
        var tom1=new Audio("tune-1.mp3");
        tom1.play();
        break;

        case "H":
        var tom2=new Audio("tom-2.mp3");
        tom2.play();
        break;

        case "R":
        var tom3=new Audio("tom-3.mp3");
        tom3.play();
        break;

        case "I":
        var tom4=new Audio("tune-4.mp3");
        tom4.play();
        break;

        case "S":
        var snare=new Audio("snare.mp3");
        snare.play();
        break;

        case "T":
        var kick=new Audio("kick-bass.mp3");
        kick.play();
        break;

        case "M":
        var crash=new Audio("tune-3.mp3");
        crash.play();
        break;

        case "A":
        var snare1=new Audio("snare.mp3");
        snare1.play();
        break;

        case "S":
        var newtom2=new Audio("tom-1.mp3");
        newtom2.play();
        break;

        default: console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);

}
