function play(){
    var x = document.getElementById('music').src;
   document.getElementById('demo').innerHTML = x;
}

function rpsGame(yourChoice) {
console.log(yourChoice);
var humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numToChoice(randomNum());

console.log('computerChoice:', botChoice);

results = decideWinner(humanChoice,botChoice);
console.log(results);
message = finalMessage(results);
console.log(message);
frontEnd(yourChoice.id,botChoice,message);
}



function randomNum(){
    return Math.floor(Math.random() * 3);
}
function numToChoice(number) {
    return ['rock', 'paper', 'scissors'] [number];

}

function decideWinner(yourChoice,computerChoice) {
    var rpsDataBase = {
        'rock': {'scissors': 1, 'paper': 0, 'rock': 0.5},
        'paper': {'scissors': 0, 'paper': 0.5, 'rock': 1},
        'scissors': {'scissors': 0.5, 'paper': 1, 'rock': 0}
        
    };
    var yourScore = rpsDataBase[yourChoice] [computerChoice];
    var computerScore = rpsDataBase[computerChoice] [yourChoice];
     return[yourScore,computerScore];


}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0)
    {
        return {'message': 'you lost !', 'color': 'red'};
    }
    else if(yourScore === 0.5)
    {
         return {'message': 'you tied !', 'color': 'yellow'};
    }
    else{
        return {'message': 'you won !', 'color': 'green'};
    }
}


function frontEnd(humanImageChoice,botImageChoice,finalMessage) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba( 37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] +"</h1>"
    botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('front').appendChild(humanDiv);
    document.getElementById('front').appendChild(messageDiv);
    document.getElementById('front').appendChild(botDiv);
}

function refr() {
    window.location.reload(true);
}