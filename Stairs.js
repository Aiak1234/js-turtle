var sideA=getWidth();
var sideB=getHeight()
var sideC=pythagorean(sideA,sideB)

penup();
left(135)
forward(sideC/2)
right(135)


pendown();

left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)

left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)

left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)

left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)

left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)

left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)

left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)

left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)

left(90)
forward(15)




function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));}