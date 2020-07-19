

var number1= Math.floor(Math.random()* 6) +1;

var randomimage="images/dice"+ number1 +".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimage);


var number2= Math.floor(Math.random()* 6)+1;

var randomimage1="images/dice"+ number2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage1)



if(number1>number2)
{
  document.querySelector("h1").innerHTML = "⛳Player 1 wins";
}
else if(number1<number2)
{
  document.querySelector("h1").innerHTML = "⛳Player 2 wins";
}
else
{
  document.querySelector("h1").innerHTML= "⛳Draw Match⛳";
}
