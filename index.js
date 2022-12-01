let designation = ["Software Developer", "Fullstack Developer", "Game Enthusiast", "UI/UX designer"];
let spanColors = ["4285F4", "34A853", "FBBC05", "EA4335"];
let spanElement = document.querySelector("span");

function loopThrough(){

    for(let i =0; i < designation.length; i++){
        
        setTimeout(function(){
            
            spanElement.innerHTML = designation[i] + "..";
            spanElement.style.color = "#"+ spanColors[i];

            if (i>= designation.length - 1 ){
                setTimeout(loopThrough, 3000);
            }
        }, i* 3000);
    }

    //await loopThrough();

}


loopThrough();