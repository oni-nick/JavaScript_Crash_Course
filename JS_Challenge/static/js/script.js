// alert("Wlecome to my new world! \n I Fell Very Good~!!")
// console.log("hello")
//Challenge 1
function ageInDays()
{
var birthYear = prompt("What's your birth year?")
var days = (2020 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are' + days + 'days old.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
}
