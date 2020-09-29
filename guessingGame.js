<script>
// Guessing Game
let secretNumber = 9;
let guessedNumber = Number(prompt("Guess a number between 1 and 10"));

if(guessedNumber === secretNumber){
	alert("You guessed that right!");
    }else if(guessedNumber > secretNumber){
    alert("Too high, go lower!");
    }else{
    alert("Too low, go higher!");
    };
    
</script>
