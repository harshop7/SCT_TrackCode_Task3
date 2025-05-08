let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainers=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerX,//playerO

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="0";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
box.disabled=true;

checkWinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainers.classList.remove("hide");
       disableboxes();
}
const checkWinner=()=>{
    for( let ptrn of winpattern){
      let pos1=boxes[ptrn[0]].innerText; 
      let pos2=boxes[ptrn[1]].innerText; 
      let pos3=boxes[ptrn[2]].innerText; 

      if(pos1 !="" && pos2!="" && pos3!="")
      {
        if(pos1==pos2 && pos2==pos3){
           console.log("WINNER",pos1);
           showWinner(pos1);
        }
      }
    }
};

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainers.classList.add("hide");
    
};

newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
