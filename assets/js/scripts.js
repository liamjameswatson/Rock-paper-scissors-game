var rounds = 0;
var win = 0;
var loss = 0;
var draw = 0;
var choice = ["rock", "paper", "scissors"];
var userChoice;
var computerChoice;

function numberOfRounds() {
  rounds = prompt("How many? ");
  // for number of rounds
  for (var i = 0; i < rounds; i++) {
    // generate a random number (*3) -- link to computerChoice
    console.log("Round number " + (i + 1));
    playGame();
    function playGame() {
      randomNumber = Math.floor(Math.random() * 3);
      computerChoice = choice[randomNumber];

      // prompt for userChoice
      userChoice = prompt(
        "What is your choice?\nEnter:\n r for rock\n p for paper\n s for scissors"
      );
      // Validate userChoice
      if (userChoice.toLowerCase() === "r") {
        userChoice = "rock";
      } else if (userChoice.toLowerCase() === "p") {
        userChoice = "paper";
      } else if (userChoice.toLocaleLowerCase() === "s") {
        userChoice = "scissors";
      } else {
        console.log("invalid choice");
        playGame();
      }

      console.log(
        "Computer says..." + computerChoice + ".\n You said..." + userChoice
      );
      //If a draw
      if (computerChoice === userChoice) {
        console.log("DRAW");
        draw++;
        //If computer wins
      } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
      ) {
        console.log("Computer wins");
        loss++;
      } else {
        //user wins
        console.log("You win");
        win++;
      }
    }

    console.log("Wins:" + win + "\nLosses:" + loss + "\nDraws:" + draw);
  }
  //play again?
  playAgain = confirm("Do you want to play again?");
  if (playAgain === true) {
    numberOfRounds();
  } else {
    alert("Have a nice day!");
    return false;
  }
}

numberOfRounds();
