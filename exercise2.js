//Q1
var challenge = '30 Days Of JavaScript';
//Q2
console.log(challenge);
//Q3
console.log(challenge.length);
//Q4
console.log(challenge.toUpperCase());
//Q5
console.log(challenge.toLowerCase());
//Q6
console.log(challenge.substr(0, 2));
console.log(challenge.substring(0,3));
//Q7
console.log(challenge.substr(3, 21));
//Q8
console.log(challenge.includes('Script'));
//Q9
console.log(challenge.split());
//Q10
console.log(challenge.split(' '));
//Q11
var tech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(tech.split(','));
//Q12
console.log(challenge.replace('JavaScript', 'Python'));
//Q13
console.log(challenge.charAt(15));
//Q14
console.log(challenge.charCodeAt('J'));
//Q15
console.log(challenge.indexOf('a'));
//Q16
console.log(challenge.lastIndexOf('a'))
//Q17
var sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
//Q18
console.log(sentence.lastIndexOf('because'));
//Q19
console.log(sentence.search(/because/gi));
//Q20
console.log(challenge.trim());
//Q21
console.log(challenge.startsWith('30'));
//Q22
console.log(challenge.endsWith('JavaScript'));
//Q23
console.log(challenge.match('a'));
//Q24
console.log(challenge.concat('30 Days of', 'JavaScript'));
//Q25
console.log(challenge.repeat(2));


//LEVEL 2
//Q1
var quote = "\'There is no exercise better for the heart than reaching down and lifting people up.\'";
console.log("The quote " + `${quote}` + " " + "by John Holmes teaches us to help one another" );
//Q2
var quoteTwo = "Love is not patronizing and charity isn't about pity, it is about love. \nCharity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead"
console.log(quoteTwo);
//Q3
var typeOfData = '10';
console.log(typeof parseInt(typeOfData));
//Q4
var num ='9.8';
var parse = parseFloat(num);
console.log(Math.ceil(parse));
//Q5
var stringOne = 'python';
var stringTwo = 'jargon';
console.log(stringOne.includes('on'));
console.log(stringTwo.includes('on'));
//Q6
var string = 'I hope this course is not full of jargon';
console.log(string.includes('jargon'));
//Q7
var num = Math.random();
var randNum = num * 100 + 1;
console.log(Math.floor(randNum));
//Q8
var theNum = Math.random();
var newRandNum = theNum * 50 + 1;
console.log(Math.floor(newRandNum) + 50);
//Q9
console.log(Math.floor(Math.random() * 225 + 1));
//Q10
var stringName = 'JavaScript';
var stringLength = stringName.length;
console.log(Math.floor(Math.random() * stringLength + 1))
//Q11
var characters = '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125'
console.log(characters);
//Q12
var statement = "You cannot end a sentence with because because because is a conjunction"
var indexOfData = statement.indexOf('because');
var lastIndex = statement.lastIndexOf('because')
console.log(indexOfData);
console.log(lastIndex);
console.log(statement.substr(31, 23));


//LEVEL 3


//Q1
var sent = "Love is the best thing in this world. Some found their love and some are still looking for their love";
console.log(sent.match('love'));
//Q2
var statement = "You cannot end a sentence with because because because is a conjunction"
console.log(statement.match('because'));
//Q4

//Q5
var earning = 5000;
var annualBonus = 10000;
var onlineCourse = 15000;
