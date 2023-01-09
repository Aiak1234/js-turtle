var sideA=getWidth();
var sideB=getHeight()

left(90)
mario();

function mario(){
    pendown();
    width(6)
    colour(0,0,200,7)
forward(sideA/12/2.5)

penup();
forward(sideA/12/2.5)

pendown();
forward(sideA/12/2.5)

penup();
right(90)
forward(6)
right(90)
forward(6)//end of first layer

pendown();
forward(sideA/12/2.5 -6)

penup();
forward(sideA/12/2.5)


pendown();
forward(sideA/12/2.5 -6)

penup();
left(90)
forward(6)
left(90)
forward(6)

pendown();//start of 3rd layer
width(7)
forward(sideA/12/2.5 -6)

penup();
right(180)
forward(6)
right(180)
forward(sideA/12/2.5 -6)

pendown();
forward(sideA/12/2.5 -6)//end of 3rd layer

penup();
goto(0,0)
right(90)
forward(17)
left(90)

width(6) // start of body
colour(0,0,0,1)
pendown();
forward(sideA/12/2.5/2)

colour(50,90,80,1)
pendown();
forward((sideA/12/2.5*3) - (sideA/12/2.5/2*2))

colour(0,0,0,1)
pendown();
forward(sideA/12/2.5/2)// end of first layer of body

penup();//start of second layer
right(180)
forward(sideA/12/2.5*3)

left(90)
forward(6)
left(90)

colour(0,0,0,1)
pendown();
forward(sideA/12/2.5 -6)
forward(2)

colour(50,90,80,1)
pendown();
forward((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)

penup();
right(180)
forward(2)
right(180)

pendown();
colour(0,0,0,1)
pendown();
forward(sideA/12/2.5 -6)
forward(2)// end of sencond layer 

penup();//start of 3rd layer 
right(90)
forward(6)
right(90)

colour(0,0,0,1)
pendown();
forward(sideA/12/2.5/2)

pendown();
colour(0,0,200,7)
forward((sideA/12/2.5 -6) - (sideA/12/2.5/2))
forward(2)

colour(50,90,80,1)
pendown();
forward(((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)

colour(700,89,40,3)
pendown();
forward(((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)

colour(50,90,80,1)
pendown();
forward((((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/5)*2)

colour(700,89,40,3)
pendown();
forward(((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)


colour(50,90,80,1)
pendown();
forward(((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)


colour(0,0,0,1)
pendown();
forward(sideA/12/2.5/2)//end of 3rd layer

penup();
left(90)
forward(6)
left(90)

right(180)
forward(0.5)
right(180)

pendown();// start of the 4th layer
colour(0,0,200,7)
forward(sideA/12/2.5)

colour(50,90,80,1)
forward(sideA/12/2.5)


colour(0,0,200,7)
forward(sideA/12/2.5)//end of 4th layer


penup();
right(90)
forward(6)
right(90)

forward(6)
pendown();// start of 5th layer
forward(sideA/12/2.5 -6)

colour(50,90,80,1)
pendown();
forward(((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)

colour(0,0,200,7)
forward((((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)*2)

colour(50,90,80,1)
pendown();
forward(((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)

colour(0,0,200,7)
forward(sideA/12/2.5 -6)//end of 5th layer


penup();
forward(6)
left(90)
forward(6)
left(90)

penup();
forward(sideA/12/2.5)

colour(0,0,200,7)
pendown();
forward((sideA/12/2.5)-(((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6))
forward(1)

colour(50,90,80,1)
pendown();
forward(((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)


colour(0,0,200,7)
forward(sideA/12/2.5 -6-6)//end of body 


penup();
right(90)
forward(6)
right(90)
forward(6)

colour(0,0,0,1)
pendown();
forward((((sideA/12/2.5*3) -((sideA/12/2.5 -6)*2)-2)/6)*6)

penup();
forward(6)
left(90)
forward(6)
left(90)

colour(0,0,200,7)
pendown();
forward(sideA/12/2.5)


}

penup();
forward(50)