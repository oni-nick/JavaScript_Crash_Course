console.log('Hello');
console.log('Hello');
// alert('Warning!!');

// var age = prompt("What's your age?");
// document.getElementById("someText").innerHTML = 'your age is ' + age;

var num1 = 19;
num1 += 12;
var string1 = 'kang'
var result = string1 + '\'s age is '+ num1
document.getElementById("someText").innerHTML = result

function summation(num1, num2){
    var result = num1 + num2;
    return result;
}
console.log(summation(12.6, 14));


// var num = 0
// while(num < 100){
//     console.log(num)
//     num ++;
//     alert("change")
//     document.getElementById("someText").innerHTML = num
// }

for (let num = 100; num <= 200; num++){
    console.log(num);
}
// object in javascript
// Dictionary in python
let student = {
    first:"kang",
    last:"nick",
    age:22, 
    height:172,
    weight:59.5,
    studentInfo: function (){
        return this.first + this.last + '\n' + this.age
    }
// OOP in JS, cause Object == Dictionary
};
console.log(student.weight)
student.weight=68
// student[wright] is deplicated
console.log(student.studentInfo())
