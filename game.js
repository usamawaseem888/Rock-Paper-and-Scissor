
let array=["rock","paper","scissor"]
let btn=document.querySelectorAll(".b")
let player=document.getElementById("p")
let computer=document.getElementById("c")
let result=document.getElementById("result")
let playerT,computerT;

btn.forEach(button=> button.addEventListener("click",()=>{
    playerT=button.textContent.toLowerCase()
    computerT= computerTurn().toLowerCase()
    player.textContent=`Player: ${playerT}`
    computer.textContent=`Computer: ${computerT}`
    result.textContent=check();
    
}));

//
function computerTurn(){
    let random=Math.floor(Math.random()*3)
    return array[random]
}

function check(){
    result.textContent=playerT+computerT
    if(playerT==computerT){
        return "----Draw!---"
    }
    else if(playerT=="rock"){
        return (computerT=="paper") ? "Computer won": "You Won"
    }
    else if(playerT=="scissor" ){
         return (computerT=="rock")?   "Computer won": "You Won"  
    }
    else if(playerT=="paper"){
     return (computerT=="scissor")? "Computer won": "You Won" 
        
    }
    
}