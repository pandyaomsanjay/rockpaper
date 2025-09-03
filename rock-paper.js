let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara= document.querySelector("#playerScore");
const comscorepara = document.querySelector("#computerScore");


const computerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}
const draw = () =>{
   console.log("game was draw");
    msg.innerText="DRAW GAME...PLAY AGAIN";
    msg.style.backgroundColor="black";
}
const showwinner = (userwin,userchoice,computer)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText=`YOU WON  ${userchoice} beats ${computer}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        comscorepara.innerText = computerScore;
        msg.innerText=`COMPUTER WON  ${computer} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    //genrate computer choice
    const computer = computerChoice();
    console.log("computer choice = ",computer);

    if(userchoice === computer){
        draw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissor,paper
          userwin = computer === "paper" ? false : true;
    }else if(userchoice === "paper"){
        //rock,scissor
        userwin = computer === "scissors" ? false : true;
    }else{
        //rock,paper
    userwin = computer === "rock" ? false : true;
}
  showwinner(userwin,userchoice,computer);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});

