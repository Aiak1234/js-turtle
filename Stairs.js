var sideA=getWidth();
var sideB=getHeight()
var sideC=pythagorean(sideA,sideB)

penup();
right(135)
forward(sideC/2)
left(135)



var x= prompt("number of steps: (max=16)");

for (var i = 0; i < x; i++)
  {
pendown();
forward(30)
right(90)
forward(30)
left(90)
  }



function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));}