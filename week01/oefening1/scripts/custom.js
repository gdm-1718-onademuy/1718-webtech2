let number = prompt('Geef een getal in');
let text = 'Het getal dat je invoerde was: ' + number;


let amount = number.length;
let text2= `Het getal is ${amount} karakters lang`;

let getal1 = parseInt(prompt('Geef getal 1'));
let getal2 = parseInt(prompt('Geef getal 2'));
let sum = getal1 + getal2;
let text3 = 'De som van de 2 getallen is ' + sum;

document.write(text);
document.write('<br>');
document.write(text2);
document.write('<br>');
document.write(text3);


let i = 7;
console.log(i); //7, want ongewijzigd
console.log(i++); //7, want eerst gelogd, dan pas 1 aan toegevoegd
console.log(i); //8, 1 is toegevoegd in voorgaande statement
console.log(++i); //9, ééntje toevoegen, dan loggen


let students= ['Yentl', 'Steffi', 'Casper', 'Ona', 'Fleur'];
let name = students[0];
students.push('Simon');
students[2] = 'Gilles';

students[2] = students[3];
console.log(students[2]);

document.write(students.length);
document.write(students[0] + " " + students[2] + " " + students[4]);

let seconden = prompt('Geef het aantal seconden');
let uren = Math.floor(seconden/3600);
let minuten = Math.floor((seconden%3600)/60);
let sec = Math.floor((seconden%3600)%60);
let text4 = uren + "u " + minuten + "m " + sec + "s";
document.write(text4);