// alert("Wlecome to my new world! \n I Fell Very Good~!!")
// console.log("hello")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ageInDays()
{
var birthYear = prompt("What's your birth year?")
var days = (2020 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You lived on ' + days + ' days.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
     document.getElementById("ageInDays").remove();
     // id of <div> is "flex-box-result"
     // id of <h1. is "ageInDays"
 }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Challenge 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function generateCat(){
    var image= document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small'
    image.width = '200';
    image.height = '200';
    div.appendChild(image);
 }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Challenge 3: Rock Paper Scissor
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randTorpsInt());
    console.log('human choice : ' + yourChoice.id);
    console.log('bot choice : ' + botChoice);
    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result); // object {message:~, color:~}
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message); //error #12 botChoice.id => botChoice
 }
    // functional programming, botChoice를 만들기위함
    function randTorpsInt(){
        return Math.floor(Math.random() * 3);
    }
    function numberToChoice(number){
        return ['rock', 'paper', 'scissor'][number];
    }
    
    function decideWinner(humanChoice, botChoice){
        // This is traditional way, for 9 cases just using if-else
        // if (humanChoice == 'rock' && botChoice == 'rock') || (humanChoice == 'rock' && botChoice == 'rock') || (humanChoice == 'rock' && botChoice == 'rock')
        // return [0.5, 0.5] 

        // This is brilliant way~!
        // obj in obj <= OOP in JS 
        //This is looks like JSON ~~~~~~~~~~~~~~~~
        var rpsDatBase = {
            'rock' : {'scissor': 1, 'rock': 0.5, 'paper' : 0},
            'paper' : {'rock' : 1, 'paper' : 0.5, 'scissor': 0},
            'scissor' : {'paper' : 1,  'scissor': 0.5,'rock' : 0} //'scissoer': 0.5
        } 
        humanScore = rpsDatBase[humanChoice][botChoice];
        botScore = rpsDatBase[botChoice][humanChoice];
        return [humanScore, botScore];
    }
    function finalMessage([humanScore, botScore]){  // return Object : {'message':'You Lost!', 'color':'red'}
        if(humanScore === 0){
        return {'message':'You Lost!', 'color':'red'};
        } else if (humanScore === 0.5){
            return {'message': 'You tied', 'color':'green'};
        } else {
            return {'message': 'You Won!!', 'color':'blue'};
        }
    }
    function rpsFrontEnd(humanChoice, botChoice, message){
        var imagesDatabase = {
            'rock' : document.getElementById('rock').src,
            'paper' : document.getElementById('paper').src,
            'scissor' : document.getElementById('scissor').src
        } // so now we are easy for access any image i want
        // Let's remove all images in flex-box
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();
        
        var humandiv = document.createElement('div');
        var botdiv = document.createElement('div');
        var messagediv = document.createElement('div');

        humandiv.innerHTML = "<img src='" + imagesDatabase[humanChoice] + "' width=150 height=150 style='box-shadow : 0px 10px 50px  rgba(37, 50, 233, 1);'>";
        messagediv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size 60px; padding: 30px; '>" + message['message'] + "</h1>";  //어려운 부분, style하고 result 헷갈림
        botdiv.innerHTML = "<img src='" + imagesDatabase[botChoice] + "' width=150 height=150 style='box-shadow : 0px 10px 50px  rgba(243, 38, 24, 1);'>";
        console.log(messagediv);
        document.getElementById('flex-box-rps-id').appendChild(humandiv);    
        document.getElementById('flex-box-rps-id').appendChild(messagediv);    
        document.getElementById('flex-box-rps-id').appendChild(botdiv);        
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Challenge 4  : Change button color
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);
let copyAllButtons = [];
for(let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1])
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    console.log(buttonThingy.value);
    if (buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if (buttonThingy.value === 'green'){
        buttonsGreen();
    }
    else if (buttonThingy.value === 'blue'){
        buttonsBlue();
    }
    else if (buttonThingy.value === 'reset'){
        buttonsReset();
    }
    else if (buttonThingy.value === 'random'){
        randomColor();
    }
}
function buttonsRed(){
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsBlue(){
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}
function buttonsGreen(){
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonsReset(){
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColor(){
    var choices = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'];
    for (let i=0; i<all_buttons.length; i++){
    let randnumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randnumber]);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Challenge 5 : Blackjack
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let blackjackGame = {
    'you' : {'scoreSpan' : '#your-blackjack-score', 'div' : '#your-box', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-blackjack-score', 'div' : '#dealer-box', 'score' : 0},
    'cards' : [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K'],
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', balckjackDeal);

function blackjackHit(){
    showCard(YOU);
    showCard(DEALER);
}
// WOwowowoww Dynamic Programming~!! Cool Parameter
function showCard(activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = 'static/images/Q.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();

}

function balckjackDeal(){
    let yourImage = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
    console.log(dealerImage);

    for(let i=0; i<yourImage.length; i++){
        yourImage[i].remove();
    }
    for(let i=0; i<dealerImage.length; i++){
        dealerImage[i].remove();
    }
}
