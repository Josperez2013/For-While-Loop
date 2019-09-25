var winner=document.body.querySelector(".winner");
var userhealth=document.body.querySelector(".userhealth");
var dragonhealth=document.body.querySelector(".dragonhealth");
var userhp=5;
var dragonhp=10;
var hpscript='';
var hp2script='';
var userHits=0;
var winnerscript='';

document.write("<br>Fight Log:<br>");

while (userhp>0 && dragonhp>0) {
  document.write("<br>");
  userHits = Number(prompt("How many times will you attack the dragon?"));
  var dragonHit=Math.round(Math.random()  ) + 1;
  
  document.write("User hits for "+ userHits + "<br>");
  
  dragonhp=dragonhp-userHits;
  if(dragonhp==0){
    document.write("Dragon has died");
    break;
  }
  document.write("Remaining dragon health is "+ dragonhp + "<br>");

  document.write("Dragon hits for "+ dragonHit + "<br>");
  
  userhp=userhp-dragonHit;
   if(userhp==0){
    document.write("User has died");
    break;
  } 
 
  document.write("Remaining user health is "+ userhp + "<br>"); 

}

if(userhp<=0){
  winnerscript="Winner is Dragon";
}
else{
  winnerscript="Winner is User";
}

winner.innerHTML=winnerscript;
hpscript="Final User health is " + userhp;
hp2script="Final Dragon health is " + dragonhp;
userhealth.innerHTML = hpscript;
dragonhealth.innerHTML = hp2script;