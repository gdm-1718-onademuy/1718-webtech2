/**************************************************
 * @author: Ona Demuytere
 * @created: 22/02/2018
 * @modified: 22/02/2018
 * @copyright: Artevelde University College Ghent
***************************************************/
 
let resultaat = prompt("Welke punten heb je behaald?")
function isResultaatGoed(number) {
    if(number < 68 && number >50){
        return "Voldoende";
    }
    else if(number >= 68){
        return "Onderscheiding";
    }
    else if(number >= 77){
        return "Grote onderscheiding";
    }
    else if(number >= 85){
        return "Grootste onderscheiding";
    }
    else if(number >= 90){
        return "Grootste onderscheiding en de gelukwensen van de examencommissie";
    }
    else{
        return "Je hebt onvoldoende";
    }
}
document.write(isResultaatGoed);