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

// var players = [
//     { 
//         name: "Bob", 
//         scores: [15, 20] 
//     }, 
//     { 
//         name: "Bill", 
//         scores: [10, 15] 
//     }, 
//     { 
//         name: "Charlie", 
//         scores: [90, 10] 
//     }
// ]; // Displays "Charlie"

for(i = 0; i < players.length; i++){
    var playerString = "";
    playerString += '<div class="player">';
    playerString += '<h1> + players[i].name + </h1>';
    playerString += '<h3> + players[i].scores + </h3>;
    playerString += '</div>';
    console.log(playerString);
}

