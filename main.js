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


//____________________________CHALLENGE2____________________________

var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
  ];
//   var country = 'Spain'  // should return 9
//   var country = 'Portugal'  // should return 1
//   var country = 'Russia'  // should return 0
var countries = [];

  for(var i = 0; i < winnerList.length; i++){
    countries.push(winnerList[i].country);
    var spain = [];
    var spain = [];
    var spain = [];
    for(var j = 0; j < countries.length; j ++){

    }
  }
  console.log(countries);




