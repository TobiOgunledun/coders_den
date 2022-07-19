//LEVEL 1

//Q1
let userAge = parseInt(prompt("Enter your age:"))
if(userAge >= 18){
    console.log("You are old enough to drive.")
}else{
    console.log(`You are left with ${18 - userAge}years to drive`)
}
//Q2
let yourAge = parseInt(prompt("Enter your age:"))
let myAge = 22;
if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge}year(s) older than me`)
}else{
    console.log(`I am ${myAge - yourAge}year(s) older than you`)
}
//Q3
let a = 4;
let b = 3;
//using if else
if(a > b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${a} is less than ${b}`)
}
//using tenary operation
a > b 
    ?  console.log(`${a} is greater than ${b}`)
    :  console.log(`${a} is less than ${b}`);

//Q4


//LEVEL 2
//Q1
let userGrade = parseInt(prompt("Enter your Exam score"));
if(userGrade >= 90 && userGrade <= 100){
    console.log(`You have a grade A`);
}else if(userGrade >= 70 && userGrade < 90){
    console.log(`You have a grade B`);
}else if(userGrade >= 60 && userGrade < 70){
    console.log(`You have a grade C`);
}else if( userGrade >= 50 && userGrade < 60){
    console.log(`You have a grade D`);
}else if(userGrade >= 0 && userGrade < 50){
    console.log(`You have a grade F`);
}else{
	console.log(`the value you entered is NaN`)
}
//Q2
let season = prompt("Enter the month of the Year").toLowerCase()
if(season === "september" ||season === "october" || season === "november"){
		console.log(`${season} Season is Autumn`);
}else if(season === "december" || season === "january" || season === "february"){
		console.log(`${season} Season is Winter`);
}else if(season === "march" || season === "april" || season === "may"){
		console.log(`${season} Season is Spring`);
}else if(season === "june" || season === "july" ||season === "august"){
		console.log(`${season} Season is Summer`)
}else{
		console.log(`${season} is not a valid month`)
}
//Q3
let day = prompt("Enter day of the week", "saturday").toLowerCase();
switch (true){
    case day === "monday" :
        console.log(`${day} is a working day`);
        break
    case day === "tuesday" :
        console.log(`${day} is a working day`);
        break
    case day === "wednessday" :
        console.log(`${day} is a working day`);
        break
    case day === "thursday" :
        console.log(`${day} is a working day`);
        break
    case day === "friday" :
        console.log(`${day} is a working day`);
        break
    case day === "saturday" :
        console.log(`${day} is a weekend`);
        break
    case day === "sunday" :
        console.log(`${day} is a weekend`);
        break
   	 default:
        console.log(`enter a valid day`)
}
