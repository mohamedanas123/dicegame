var rm1=Math.floor(Math.random()*6)+1;
var rm2=Math.floor(Math.random()*6)+1;
var element1=document.querySelector(".img1");
var element2=document.querySelector(".img2");
switch(rm1){
    case 1:element1.setAttribute("src","dice1.png");
    break;
    case 2:element1.setAttribute("src","dice2.png");
    break;
    case 3:element1.setAttribute("src","dice3.png");
    break;
    case 4:element1.setAttribute("src","dice4.png");
    break;
    case 5:element1.setAttribute("src","dice5.png");
    break;
    case 6:element1.setAttribute("src","dice6.png");
    break;

}
switch(rm2){
    case 1:element2.setAttribute("src","dice1.png");
    break;
    case 2:element2.setAttribute("src","dice2.png");
    break;
    case 3:element2.setAttribute("src","dice3.png");
    break;
    case 4:element2.setAttribute("src","dice4.png");
    break;
    case 5:element2.setAttribute("src","dice5.png");
    break;
    case 6:element2.setAttribute("src","dice6.png");
    break;

}
var win=document.querySelector(".container h1");
if(rm1>rm2){
    win.innerHTML="player1 win";

}
else if(rm1<rm2){
    win.innerHTML="player2 win";

}
else{
    win.innerHTML="Tie";


}