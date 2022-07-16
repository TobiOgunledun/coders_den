//LEVEL 1
//Q1
var firstName = "Oluwatobi", lastName = "Ogunledun", country = "Nigeria", city = "Ogun State", age = 22, isMarried = false, year;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Q2
console.log("10" === 10); //false
//Q3
console.log(parseInt('9.8') === 10); //false

//Q4

//TRUTHY VALUE
//Boolean true
//all string except empty string
//all numbers except zero

//FALSY VALUE
//zero
//Boolean false
//empty string

//Q5
(4 > 3); //true
(4 >= 3); //true
(4 < 3); //false
(4 <= 3); //false
(4 == 4); //true
(4 === 4); //true
(4 != 4); //false
(4 !== 4); //false
(4 != '4'); //false
(4 == '4'); //true
(4 === '4'); //false
("python".length > "jargon".length); //false
//Q6
(4 > 3 && 10 < 12); //true
(4 > 3 && 10 > 12); //false
(4 > 3 || 10 < 12); //true
(4 > 3 || 10 > 12); //true
(!(4 > 3)); //false
(!(4 < 3)); //true
(!(false)); //true
(!(4 > 3 && 10 < 12)); //false
(!(4 > 3 && 10 > 12)); //true
(!(4 === '4')); //true
(!('dragon'.includes('on') && 'python'.includes('on'))); //false
//Q7
const theTime = new Date();
console.log(theTime.getFullYear());
console.log(theTime.getMonth())
console.log(theTime.getDate())
console.log(theTime.getDay())
console.log(theTime.getHours())
console.log(theTime.getMinutes())
console.log(theTime.getTime())

//LEVEL 2

//Q1
let base = prompt('Enter base value:', 20);
let heigth = prompt('Enter height value:', 10);
let area = 0.5 * base * heigth;
console.log(area);
//Q2
let a = prompt('Enter side value for a:', 5);
let b = prompt('Enter side value for b:', 4);
let c = prompt('Enter side value for c', 3);
let perimeter = parseInt(a) + parseInt(b) + parseInt(c)
console.log(`The perimeter of the triangle is ${perimeter}`)
//Q3
let width = prompt('Enter width value: ');
let length = prompt('Enter length value: ');
let areaOfRectangle = parseInt(length) * parseInt(width);
let perimeterOfRectangle = 2 * (parseInt(length) + parseInt(width));
console.log(`The Area of the rectangle is ${areaOfRectangle}`);
console.log(`The Perimeter of the rectangle is ${perimeterOfRectangle}`);
//Q4
let radius = prompt('Enter radius value');
const PI = 3.14;
let areaOfCircle = PI * parseInt(radius) * parseInt(radius);
let circumference = 2 * PI * parseInt(radius); 
console.log( `The Area of Circle is ${areaOfCircle}`)
console.log( `The circumference of Circle is ${circumference}`);
//Q5
let x = prompt('Enter value for x-intercept', 2);
let y = 2 * parseInt(x) - 2;
console.log(`y-intercept is ${y}`);
//Q6
let x1 = prompt('Enter first x coordinate', 2);
let x2 = prompt('Enter second x coordinate', 6);
let y1 = prompt('Enter first y coordinate', 2);
let y2 = prompt('Enter second y coordinate', 10);
let yValue = parseInt(y2) - parseInt(y1)
let xValue = parseInt(x2) - parseInt(x1)
let slope =yValue / xValue
console.log(`The slope between the points is ${slope}`);
//Q7
console.log(`${y}` && `${slope}`);
//Q8
let randXValue = prompt('Enter fixed Value:', -3)
valueOfY = Math.pow(parseInt(randXValue), 2)  + ( 6 * parseInt(randXValue)) + 9;
console.log(`The value of X, ${randXValue} will make Y = ${valueOfY}`);
//Q9
var hrs = prompt('Enter Hours:', 40);
var rate = prompt('Enter rate per hour: ', 28);
var earn = parseInt(hrs) * parseInt(rate);
console.log(`Your weekly earning is; ${earn}`);
//Q10
if("firstName".length > 7){
    console.log("Your name is long");
}else{
    console.log("Your name is short")
}
//Q11
if("firstName".length > 7 && "lastname".length < 7){
    console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}`);
}else{
    console.log(`Your first name, ${firstName}, is not longer than your family name, ${lastName}`)
}
//Q12
let myAge = 35;
let yourAge = 25;
console.log(`I am ${myAge - yourAge}years older than you`)
//Q13
let birthYear = prompt('Enter birth year',)
let userAge = new Date().getFullYear() - parseInt(birthYear);
if(userAge >= 18){
    console.log(`You are ${userAge}.\nYou are old enough to drive`);
}else{
    console.log(`You are ${userAge}.\nYou are not old enough to drive`);
}
//Q14
let years = prompt('Enter number of Years you want to live:')
let seconds = new Date().getTime() * parseInt(years)
console.log(`You will live for ${seconds}seconds`);
//Q15
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let sec = now.getSeconds();
console.log(year + "-" + month + "-" + day + " " + hours + ":" + sec)
console.log(day + "-" + month + "-" + year + " " + hours + ":" + sec)
console.log(day + "/" + month + "/" + year + " " + hours + ":" + sec)
