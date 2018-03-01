//draw a mountain

drawMountain(2);
drawMountain(8);
drawMountain(6);
drawMountain(10);
drawMountain(2);

setInterval(function) {
    let randomTrueFalse = Math.random() >= 0.5;
    let randomBetween = Math.floor(Math.random() * 4) +1;

    //random een true of false
    if(randomTrueFalse == true) {
        drawMountain(randomBetween); //teken berg
    }
    else {
        drawFlatArea(randomBetween); //teken dal
    }
}

function drawMountain(lengthOfMountain) {

    //initiële toplengte
    let i = 1;

    //helling
    document.write('/');

    //zolang het einde van de top nog zichtbaar is
    while(i <= lengthOfMountain) {
        document.write("'");
        i++;
    }

    //afdaling
    document.write("\\");
}

function drawFlatArea(lengthOfFlat) {

    //initiële toplengte
    let i = 1;
    
    //vlakke gedeelte
    while(i <= lengthOfFlat) {
        document.write('_');
        i++;
    }

}