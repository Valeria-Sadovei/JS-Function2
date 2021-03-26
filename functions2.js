const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput ==='paper'|| userInput==='scissors'){
    return userInput;
  }else {
    console.log('Error!');
  } 
};
//console.log(getUserChoice('paper'));



const getComputerChoice = () => {
  let number = Math.floor(Math.random()*3);
  switch(number){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2 : 
      return 'scissors';
      break;
  default :
      console.log('Error!');    
  };
  
};
//console.log(getComputerChoice('rock'));



const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return ' game is tie';
  } 
  if (userChoice ==='rock'){
    if(computerChoice ==='paper'){
      return 'computer won';
    }else {
      return 'you won';
    }
  }
  if( userChoice ==='paper'){
    if(computerChoice ==='rock' || computerChoice === 'scissors'){
      return 'you won';
    }else {
      return 'computer won';
    }
  } 
  if( userChoice ==='scissors'){
    if(computerChoice ==='paper' || computerChoice === 'rock') {
      return 'you won';
    }else {
      return 'computer won';
    } 
  }
    
};



const playGame = () =>{
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice() ;
console.log('you choose :'+ userChoice);
console.log('computer choose : ' + getComputerChoice());
console.log(determineWinner(userChoice, computerChoice));
};

playGame();