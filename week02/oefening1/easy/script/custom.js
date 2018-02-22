let number = prompt('Geef een getal in');
let berekening = number%2;
let text = "";
if (berekening ==0){
    text = "Het getal is even.";
}
else{
    text = "Het getal is oneven.";
}
document.write(text);