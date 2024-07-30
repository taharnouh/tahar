   
let player = 'x' ;
let texte = document.getElementById('win');
let box1= document.getElementById("box1.innerHTML");
let box2= document.getElementById('box2.innerHTML');
let box3= document.getElementById('box3.innerHTML');
let box4= document.getElementById('box4.innerHTML');
let box5= document.getElementById('box5.innerHTML');
let box6= document.getElementById('box6.innerHTML');
let box7= document.getElementById('box7.innerHTML');
let box8= document.getElementById('box8.innerHTML');
let box9= document.getElementById('box9.innerHTML');


function playing(id){
    let place = document.getElementById(id);
    let texte = document.getElementById('win');
 if (player === 'x' && place.innerHTML == '' ) {
    place.innerHTML='X'
    player = 'O' 
    texte.innerHTML='O will play'

}
else if (player === 'O' && place.innerHTML == '') {
    place.innerHTML='O'
    player = 'x' 
    texte.innerHTML='X will play'
}
function win(){
        let texte = document.getElementById('win');
    if (document.getElementById('box1').innerHTML==document.getElementById('box2').innerHTML && document.getElementById('box2').innerHTML==document.getElementById('box3').innerHTML && document.getElementById('box1').innerHTML!='' ) {
        texte.innerHTML=`${document.getElementById('box1').innerHTML} is the winner`;
        document.getElementById('box1').style.backgroundColor="black"
        document.getElementById('box2').style.backgroundColor="black"
        document.getElementById('box3').style.backgroundColor="black"
        setInterval(function() {  texte.innerHTML="let's play another round"}, 1000);
        setTimeout( function() {location.reload()},3000);
        }
    else if (document.getElementById('box4').innerHTML==document.getElementById('box5').innerHTML && document.getElementById('box5').innerHTML==document.getElementById('box6').innerHTML && document.getElementById('box6').innerHTML!='' ) {
        texte.innerHTML=`${document.getElementById('box4').innerHTML} is the winner`;
        document.getElementById('box4').style.backgroundColor="black"
        document.getElementById('box5').style.backgroundColor="black"
        document.getElementById('box6').style.backgroundColor="black"
        setInterval(function() {  texte.innerHTML="let's play another round"}, 1000)
        setTimeout( function() {location.reload()},3000)
        }
    else if (document.getElementById('box7').innerHTML==document.getElementById('box8').innerHTML && document.getElementById('box8').innerHTML==document.getElementById('box9').innerHTML && document.getElementById('box9').innerHTML!='' ) {
        texte.innerHTML=`${document.getElementById('box9').innerHTML} is the winner`;
        document.getElementById('box7').style.backgroundColor="black"
        document.getElementById('box8').style.backgroundColor="black"
        document.getElementById('box9').style.backgroundColor="black"
        setInterval(function() {  texte.innerHTML="let's play another round"}, 1000);
        setTimeout( function() {location.reload()},3000);
        }
    else if (document.getElementById('box1').innerHTML==document.getElementById('box4').innerHTML && document.getElementById('box4').innerHTML==document.getElementById('box7').innerHTML && document.getElementById('box7').innerHTML!='' ) {
        texte.innerHTML=`${document.getElementById('box1').innerHTML} is the winner`;
        document.getElementById('box4').style.backgroundColor="black"
        document.getElementById('box1').style.backgroundColor="black"
        document.getElementById('box7').style.backgroundColor="black"
        setInterval(function() {  texte.innerHTML="let's play another round"}, 1000);
        setTimeout( function() {location.reload()},3000);
        }
    else if (document.getElementById('box2').innerHTML==document.getElementById('box5').innerHTML && document.getElementById('box5').innerHTML==document.getElementById('box8').innerHTML && document.getElementById('box8').innerHTML!='' ) {
        texte.innerHTML=`${document.getElementById('box5').innerHTML} is the winner`;
        document.getElementById('box2').style.backgroundColor="black"
        document.getElementById('box5').style.backgroundColor="black"
        document.getElementById('box8').style.backgroundColor="black"
        setInterval(function() {  texte.innerHTML="let's play another round"}, 1000);
        setTimeout( function() {location.reload()},3000);
        }
    else if (document.getElementById('box3').innerHTML==document.getElementById('box6').innerHTML && document.getElementById('box6').innerHTML==document.getElementById('box9').innerHTML && document.getElementById('box6').innerHTML!='' ) {
        texte.innerHTML=`${document.getElementById('box6').innerHTML} is the winner`;
        document.getElementById('box3').style.backgroundColor="black"
        document.getElementById('box9').style.backgroundColor="black"
        document.getElementById('box6').style.backgroundColor="black"
        setInterval(function() {  texte.innerHTML="let's play another round"}, 1000);
        setTimeout( function() {location.reload()},3000);
        }
    else if (document.getElementById('box1').innerHTML==document.getElementById('box5').innerHTML && document.getElementById('box5').innerHTML==document.getElementById('box9').innerHTML && document.getElementById('box9').innerHTML!='' ) {
        texte.innerHTML=`${document.getElementById('box1').innerHTML} is the winner`;
        document.getElementById('box1').style.backgroundColor="black"
        document.getElementById('box5').style.backgroundColor="black"
        document.getElementById('box9').style.backgroundColor="black"
        setInterval(function() {  texte.innerHTML="let's play another round"}, 1000);
        setTimeout( function() {location.reload()},3000);
       
    }
    else if (document.getElementById('box3').innerHTML==document.getElementById('box5').innerHTML && document.getElementById('box5').innerHTML==document.getElementById('box7').innerHTML && document.getElementById('box7').innerHTML!='' ) {
        texte.innerHTML=`${document.getElementById('box3').innerHTML} is the winner`;
        document.getElementById('box3').style.backgroundColor="black"
        document.getElementById('box5').style.backgroundColor="black"
        document.getElementById('box7').style.backgroundColor="black"
        setInterval(function() {  texte.innerHTML="let's play another round"}, 1000);
        setTimeout( function() {location.reload()},3000);
       
    }
    }
    win();
}












