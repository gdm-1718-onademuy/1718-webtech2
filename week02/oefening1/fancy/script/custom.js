let number = document.getElementById('getal').value;
let button = document.getElementById('evenOfOnevenKnop');

button.addEventListener('click', function(){
    //alert('Hoera, nog 25 minuutjes en het is pauze!')

    if(number%2 ==0){
        document.write('Het getal is even');
    }
    else{
        document.write('Het getal is oneven');
        
    }
})


/*function isNummerEven(value){
    if(value%2 == 0){
        return true;
    }
    else{
        return false;
    }
}
*/
