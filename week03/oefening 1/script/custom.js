
for(let getal = 7 ; getal <= 100 ; getal ++)
{
    //document.write(getal + '<br>');

    if(getal%3 == 0)
    {
        document.write("bitter");
    }
    if(getal%5 == 0)
    {
        document.write("bal");
    }
    if(getal%5 != 0 && getal%3 != 0)
    {
        document.write(getal);
    }
    document.write('<br>');
}