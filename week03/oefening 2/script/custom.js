alert('test');

//waardes van fastfood

let popcornAlert = prompt("Geef de waarde in van een heerlijk emmertje popcorn");
let hamburgerAlert = prompt("Geef de waarde in van het aantal heerlijke hamburgers");
let donutAlert = prompt("Geef de waarde in van het aantal lekkere donuts");
popcorn = parseInt(popcornAlert);
hamburger = parseInt(hamburgerAlert);
donut = parseInt(donutAlert);


//inputvelden uit DOM declareren
let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3 = document.getElementById('result3');
let userSolution = document.getElementById('result3');

//inputvelden in vullen
input1.value = popcorn + popcorn + popcorn;
input2.value = popcorn + hamburger + hamburger;
input3.value = donut * 2 + hamburger + donut * 2;

//correcte oplossing berekenen
let correctSolution = hamburger + donut * popcorn;

//button declareren
let checkButton = document.getElementById('check');

//als er op de knop geklikt wordt
checkButton.addEventListener('click', function(){
    if(correctSolution == userSolution.value)
    {
        //correct
        alert("Goed bezig");
    }
    else
    {
        //wrong
        alert("uh oh")
    }
});

