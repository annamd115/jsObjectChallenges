//____________________________CHALLENGE1____________________________//

var players = [
    { 
        name: "Bob", 
        scores: [10, 65] 
    }, 
    { 
        name: "Bill", 
        scores: [90, 5] 
    }, 
    { 
        name: "Charlie", 
        scores: [40, 55] 
    }
]; // Displays "Bill"

var div1 = document.getElementById("challenge-1");
var winningScore = 0;
var winnerName = [];

// Loop through players array
for(var i = 0; i < players.length; i++){
    //to find the score of that player
    var playerScores = players[i].scores;
    var sumScore = 0;
    //to loop through
    for(var j = 0; j < playerScores.length; j++){
        //and sum the scores
        sumScore += playerScores[j];
    }
    //get rid of any scores over 100
    if(sumScore > 100){
        winner = false;
        //compare the player's sumScore to existing winningScore
    } else if(sumScore > winningScore){
        //need to have locally scoped winnerName variable to only print first name in a tie
        winnerName = [];
        //if players[i].scores sum is greater than current winningScore, replace with sumScore
        winningScore = sumScore;
        //pushes to locally scoped array, will only add one name to global variable
        winnerName.push(players[i].name);
    }
}

div1.innerHTML = "<h3> Challenge1: </h3>" + winnerName;







