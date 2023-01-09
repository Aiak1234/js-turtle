var sideA=getWidth();
var sideB=getHeight()
var max=50
var sideLengthQ=sideA/12


var block=4
var up= 4

var block2=1.75
var up2= 2
function goomba(){
width(up2)
colour(0,0,0,1)
pendown();//start 1st layer
forward(block2*5)

penup();
forward(block2*2)

pendown();
forward(block2*5)//end of 1st layer

penup();
forward(block2)
right(90)
forward(up2)
right(90)

pendown();
forward(block2*6)//start 2nd layer

penup();
forward(block2*2)

pendown();
forward(block2*6)//end 2nd layer

penup();
left(90)
forward(up2)
left(90)

pendown();
forward(block2*5)//start 3rd layer

colour(100,80,9,4)
pendown();
forward(block2*4)

colour(0,0,0,1)
pendown();
forward(block2*5)//end 3rd layer

penup();
right(90)
forward(up2)
right(90)
forward(block2)//start 4th layer

colour(0,0,0,1)
pendown();
forward(block2*2)

colour(100,80,9,4)
pendown();
forward(block2*8)

colour(0,0,0,1)
pendown();
forward(block2*2)//end 4th layer

penup();
left(90)
forward(up2)
left(90)
forward(block2*2)//start 5th layer

colour(100,80,9,4)
pendown();
forward(block2*8)//end 5th layer

penup();
forward(block2*3)
right(90)
forward(up2)
right(90)

colour(90,8,7,4)//start 6th layer
pendown();
forward(block2*4)

colour(100,80,9,4)
pendown();
forward(block2*6)


colour(90,8,7,4)
pendown();
forward(block2*4)//end 6th layer


penup();
forward(block2)
left(90)
forward(up2)
left(90)

colour(90,8,7,4)//start 7th layer
pendown();
forward(block2*16)//end 7th layer

penup();
right(90)
forward(up2)
right(90)

colour(90,8,7,4)//start 8th layer
pendown();
forward(block2*4)

colour(100,80,9,4)
pendown();
forward(block2*3)

colour(90,8,7,4)
pendown();
forward(block2*2)

colour(100,80,9,4)
pendown();
forward(block2*3)


colour(90,8,7,4)
pendown();
forward(block2*4)//end 8th layer

penup();
left(90)
forward(up2)
left(90)


colour(90,8,7,4)//start 9th layer
pendown();
forward(block2*4)


colour(100,80,9,4)
pendown();
forward(block2)

colour(0,0,0,1)
pendown();
forward(block2)

colour(100,80,9,4)
pendown();
forward(block2)

colour(90,8,7,4)
pendown();
forward(block2*2)


colour(100,80,9,4)
pendown();
forward(block2)

colour(0,0,0,1)
pendown();
forward(block2)

colour(100,80,9,4)
pendown();
forward(block2)

colour(90,8,7,4)
pendown();
forward(block2*4)//end 9th layer

penup();
right(90)
forward(up2)
right(90)


forward(block2)//start 10th layer

colour(90,8,7,4)
pendown();
forward(block2*3)


colour(100,80,9,4)
pendown();
forward(block2)

colour(0,0,0,1)
pendown();
forward(block2)

colour(90,8,7,4)
pendown();
forward(block2*4)

colour(0,0,0,1)
pendown();
forward(block2)


colour(100,80,9,4)
pendown();
forward(block2)

colour(90,8,7,4)
pendown();
forward(block2*3)//end 10th layer

penup();
left(90)
forward(up2)
left(90)

colour(90,8,7,4)//start 11th layer
pendown();
forward(block2*3)


colour(100,80,9,4)
pendown();
forward(block2)

colour(0,0,0,1)
pendown();
forward(block2)

colour(90,8,7,4)
pendown();
forward(block2*4)

colour(0,0,0,1)
pendown();
forward(block2)


colour(100,80,9,4)
pendown();
forward(block2)

colour(90,8,7,4)
pendown();
forward(block2*3)//end 11th layer


penup();
right(90)
forward(up2)
right(90)
forward(block2)//start 12th layer

colour(90,8,7,4)
pendown();
forward(block2)

colour(0,0,0,1)
pendown();
forward(block2*2)


colour(90,8,7,4)
pendown();
forward(block2*6)

colour(0,0,0,1)
pendown();
forward(block2*2)

colour(90,8,7,4)
pendown();
forward(block2)//end 12th layer

penup();
left(90)
forward(up2)
left(90)
forward(block2)//start 13th layer

colour(90,8,7,4)
pendown();
forward(block2*10)//end 13th layer

penup();
right(90)
forward(up2)
right(90)
forward(block2)//start 14th layer

colour(90,8,7,4)
pendown();
forward(block2*8)//end 14th layer

penup();
left(90)
forward(up2)
left(90)
forward(block2)//start 15th layer

colour(90,8,7,4)
pendown();
forward(block2*6)//end 15th layer


penup();
right(90)
forward(up2)
right(90)
forward(block2)//start 16th layer

colour(90,8,7,4)
pendown();
forward(block2*4)//end 16th layer
}
function mario(){
   pendown();//start of legs layer 1
   width(up)
   colour(0,0,200,7)
   forward(block*4)

   penup();
   forward(block*4)

   pendown();
   forward(block*4)// end of legs layer 1 

   penup()
   right(90)
   forward(up)
   right(90)
   forward(4)

   pendown();
   forward(block*3)

   penup();
   forward(block*4)
   
   pendown();
   forward(block*3)//end of 2nd legs layer

   penup();
   forward(block)
   left(90)
   forward(up)
   left(90)
   forward(block*2)

   colour(20,50,6,78)//start of the 3rd layer 
   pendown();
   forward(block*3)

   penup();
   forward(block*2)

   pendown();
   forward(block*3)//end of 3rd layer 

   penup();
   forward(block*2)
   right(90)
   forward(up)
   right(90)

   colour(900,80,60,3)//start 4th layer
   pendown();
   forward(block*2)

   colour(20,50,6,78)
   forward(block*8)

   colour(900,80,60,3)
   forward(block*2)//end of 4th layer

   penup();
   left(90)
   forward(up)
   left(90)

   colour(900,80,60,3)//start of 5th layer 
   pendown();
   forward(block*3)

   colour(20,50,6,78)
   pendown();
   forward(block*6)

   colour(900,80,60,3)
   pendown();
   forward(block*3)//end of 5th layer

   penup();
   right(90)
   forward(up)
   right(90)

   colour(900,80,60,3)//start 6th layer
   pendown();
   forward(block*2)

   colour(0,0,200,7)
   pendown();
   forward(block*1)

   colour(20,50,6,78)
   pendown();
   forward(block*1)

   colour(80,190,53,2)
   forward(block)

   colour(20,50,6,78)
   forward(block*2)

   colour(80,190,53,2)
   forward(block)

   colour(20,50,6,78)
   pendown();
   forward(block*1)

   colour(0,0,200,7)
   pendown();
   forward(block*1)


   colour(900,80,60,3)
   pendown();
   forward(block*2)//end of 6th layer

   penup();
   left(90)
   forward(up)
   left(90)

   colour(0,0,200,7)//start of 7th layer
   pendown();
   forward(block*4)

   colour(20,50,6,78)
   pendown();
   forward(block*4)

   colour(0,0,200,7)
   pendown();
   forward(block*4)// end 7th layer

   penup();
   right(90)
   forward(up)
   right(90)
   forward(block)

   colour(0,0,200,7)//start of 8th layer
   pendown();
   forward(block*3)

   colour(20,50,6,78)
   pendown();
   forward(block*1)

   colour(0,0,200,7)
   pendown();
   forward(block*2)

   colour(20,50,6,78)
   pendown();
   forward(block*1)

   colour(0,0,200,7)
   pendown();
   forward(block*3)//end of 8th layer

   penup();
   forward(block)
   left(90)
   forward(up)
   left(90)
   
   penup();//start of 9th layer
   forward(block*4)

   colour(0,0,200,7)
   pendown();
   forward(block*3)
   
   colour(20,50,6,78)
   pendown();
   forward(block*1)

   colour(0,0,200,7)
   pendown();
   forward(block*2)//end of 9th layer

   penup();
   forward(block*2)
   right(90)
   forward(up)
   right(90)

   forward(block*3)// start of 10th layer

   colour(900,80,60,3)
   pendown();
   forward(block*7)//end of 10th layer

   penup();
   forward(block*2)
   left(90)
   forward(up)
   left(90)
   
   forward(block)//start 11th layer

   colour(0,0,200,7)
   pendown();
   forward(block*4)

   colour(900,80,60,3)
   pendown();
   forward(block*4)

   colour(0,0,200,7)
   pendown();
   forward(block*2)//end of 11th layer

   penup();
   forward(block)
   right(90)
   forward(up)
   right(90)

   forward(block)//start 12th layer
   colour(0,0,200,7)
   pendown();
   forward(block)

   colour(900,80,60,3)
   pendown();
   forward(block)

   colour(0,0,200,7)
   pendown();
   forward(block*2)

   colour(900,80,60,3)
   pendown();
   forward(block*3)

   colour(0,0,200,7)
   pendown();
   forward(block)

   colour(900,80,60,3)
   pendown();
   forward(block*3)//end 12th layer

   penup();
   
   left(90)
   forward(up)
   left(90)

   forward(block)//start 13th layer

    colour(900,80,60,3)
   pendown();
   forward(block*3)

   colour(0,0,200,7)
   pendown();
   forward(block)

   colour(900,80,60,3)
   pendown();
   forward(block*3)

   colour(0,0,200,7)
   pendown();
   forward(block)

   colour(900,80,60,3)
   pendown();
   forward(block)

   colour(0,0,200,7)
   pendown();
   forward(block)//end 13th layer

   penup();
   forward(block)
   right(90)
   forward(up)
   right(90)

   forward(block*2)//start 14th layer

   colour(0,0,200,7)
   pendown();
   forward(block*3)

   colour(900,80,60,3)
   pendown();
   forward(block*2)


   colour(0,0,200,7)
   pendown();
   forward(block)

   colour(900,80,60,3)
   pendown();
   forward(block)//end 14th layer


   penup();
   forward(block*3)
   left(90)
   forward(up)
   left(90)

   forward(block)//start 15th layer

   colour(20,50,6,78)
   pendown();
   forward(block*9)//end 15th layer

   penup();
   forward(block)
   right(90)
   forward(up)
   right(90)

   forward(block*2)//start 16th layer
   colour(20,50,6,78)
   pendown();
   forward(block*5)//end 16th layer

   }

penup();

function brickblock(){penup();
  left(90)
  forward(15)
  right(90)
  
  pendown();
  colour(200,0,100,1)
  width(30)
  forward(sideA/12)
  
  
  penup();
  right(180)
  forward(sideA/12)
  left(90)
  forward(15)
  left(90)
  
  
  penup();
  width(2)
  colour(0,0,0,1)
  
  
  pendown();
  forward(sideA/12)
  left(90)
  forward(10)
  left(90)
  forward(sideA/12/2)
  left(90)
  forward(10)
  penup();
  left(180)
  forward(10)
  
  pendown();
  left(90)
  forward(sideA/12/2)
  
  penup();
  left(180)
  forward(sideA/24/2)
  
  pendown();
  left(90)
  forward(10)
  right(90)
  forward(sideA/12/2)
  right(90)
  forward(10)
  
  penup();
  left(90)
  forward(sideA/24/2)
  left(90)
  forward(20)
  left(90)
  
  pendown();
  
  
  left(90)
  forward(10)
  right(90)
  forward(sideA/24/2)
  
  penup();
  forward(sideA/12/2)
  
  pendown();
  forward(sideA/24/2)
  
  penup();
  left(180)
  forward(sideA/12/2)
  
  pendown();
  left(90)
  forward(10)
  
  penup();
  left(180)
  forward(30)
  left(90)
  forward(sideA/12/2)
  }

function Greentube(sideLength){

  //This makes the first rectangle 

  strafe(sideLength / 2);
  width(sideLength/1.5);
  colour(78, 188, 0,1);
  forward(sideLength*1.2);
  penup();
  forward(sideLength/2);
  left(180);
  strafe(-sideLength/2);
  width(2);
  colour(0,0,0,1);

  // This makes the 2nd rectangle adding it to the frist rectangle making the tube 
  strafe(sideLength / 2);
  width(sideLength/1.1);
  colour(78, 188, 0,1);
  forward(sideLength/2);
  penup();
  left(180);
  forward(sideLength/2);
  left(180);
  strafe(-sideLength/2);
  width(2);
  colour(0,0,0,1);
 
  //This moves the turtle into an optimal positon for the 2nd tube 
  penup();
  forward(sideLength/2);
  forward(sideLength*1.2);
  right(90);
  forward(sideLength*5);
  right(90);

  //This makes the first rectangle part of the 2nd tube 
  strafe(sideLength / 2);
  width(sideLength/1.5);
  colour(78, 188, 0,1);
  forward(sideLength);
  penup();
  forward(sideLength/2);
  left(180);
  strafe(-sideLength/2);
  width(2);
  colour(0,0,0,1);

  //This makes the 2nd rectangle part of the 2nd tube 
  strafe(sideLength / 2);
  width(sideLength/1.1);
  colour(78, 188, 0,1);
  forward(sideLength/2);
  penup();
  left(180);
  forward(sideLength/2);
  left(180);
  strafe(-sideLength/2);
  width(2);
  colour(0,0,0,1);

  //This moves the turtle into an optimal positon for the 3nd tube 
  penup();
  forward(sideLength/2);
  forward(sideLength);
  right(90);
  forward(sideLength*4);
  right(90);


  //This makes the first rectangle part of the 3rd tube 
  strafe(sideLength / 2);
  width(sideLength/1.5);
  colour(78, 188, 0,1);
  forward(sideLength*1.6);
  penup();
  forward(sideLength/2);
  left(180);
  strafe(-sideLength/2);
  width(2);
  colour(0,0,0,1);

  //This makes the 2nd rectangle part of the 3nd tube 
  strafe(sideLength / 2);
  width(sideLength/1.1);
  colour(78, 188, 0,1);
  forward(sideLength/2);
  penup();
  left(180);
  forward(sideLength/2);
  left(180);
  strafe(-sideLength/2);
  width(2);
  colour(0,0,0,1);
  penup();    
  
  //this moves it back to the bottom left 
  goto(0,0);
  forward(max);
  right(90);
  forward(max);
  right(90);
}

function strafe(distance)
{
  penup();
  if (distance < 0)
  {
      left(90);
      forward(Math.abs(distance));
      right(90);
  }
  else
  {
      right(90);
      forward(Math.abs(distance));
      left(90);
  }
  pendown();
}

function drawCloud(x, y) {
goto(-45, 30);
drawQuarterCircle(2, 0.5, 90);
drawQuarterCircle(2, 0.5, 0);
left(90);
drawQuarterCircle(2, 0.5, 90);
right(90);
drawQuarterCircle(1, 0.25, 90)
right(90);
forward(144);
drawQuarterCircle(1, 0.25, 90);
right(90);
hideTurtle();
}


function drawQuarterCircle(count, size, angle) {
for (var i = 0; i < count; i++) {
    for (var n = 0; n < 90; n++) {
        forward(size);
        right(1);
    }
    left(angle);
}
}
function questionMark(){
  penup();
  forward(sideLengthQ/6);
  pendown();
  forward(sideLengthQ/12);
  penup();
  forward(sideLengthQ/14);
  pendown();
  forward(sideLengthQ/12);
  right(90);
  for (var i = 0; i < 270; i++)
  {
      width(1);
      forward(sideLengthQ/300);
      left(1);
  }
}
penup();
right(180)
forward(sideB/2)
left(180)
forward(30)




right(90)
forward(sideA)
right(90)
penup();
forward(30)
right(90)
forward(sideA)
penup();
forward(sideA/2)
right(90)
forward(30)
left(90)


var numbricks=24
//numbricks = prompt("number of bricks:(12 is a row) If you want lines darker repeat code(Maximum twice)");





var num = numbricks;
var x = num-12;
if (num < 13)
{
    console.log();
    for (var i = 0; i < x; i++)
  {
      
   penup();
left(90)
forward(15)
right(90)

pendown();
colour(200,0,100,1)
width(30)
forward(sideA/12)


penup();
right(180)
forward(sideA/12)
left(90)
forward(15)
left(90)


penup();
width(2)
colour(0,0,0,1)


pendown();
forward(sideA/12)
left(90)
forward(10)
left(90)
forward(sideA/12/2)
left(90)
forward(10)
penup();
left(180)
forward(10)

pendown();
left(90)
forward(sideA/12/2)

penup();
left(180)
forward(sideA/24/2)

pendown();
left(90)
forward(10)
right(90)
forward(sideA/12/2)
right(90)
forward(10)

penup();
left(90)
forward(sideA/24/2)
left(90)
forward(20)
left(90)

pendown();


left(90)
forward(10)
right(90)
forward(sideA/24/2)

penup();
forward(sideA/12/2)

pendown();
forward(sideA/24/2)

penup();
left(180)
forward(sideA/12/2)

pendown();
left(90)
forward(10)

penup();
left(180)
forward(30)
left(90)
forward(sideA/12/2)




  }

}
if (x > 0)
{
    for (var i = 0; i < x; i++)
  {
      
   penup();
left(90)
forward(15)
right(90)

pendown();
colour(200,0,100,1)
width(30)
forward(sideA/12)


penup();
right(180)
forward(sideA/12)
left(90)
forward(15)
left(90)


penup();
width(2)
colour(0,0,0,1)


pendown();
forward(sideA/12)
left(90)
forward(10)
left(90)
forward(sideA/12/2)
left(90)
forward(10)
penup();
left(180)
forward(10)

pendown();
left(90)
forward(sideA/12/2)

penup();
left(180)
forward(sideA/24/2)

pendown();
left(90)
forward(10)
right(90)
forward(sideA/12/2)
right(90)
forward(10)

penup();
left(90)
forward(sideA/24/2)
left(90)
forward(20)
left(90)

pendown();


left(90)
forward(10)
right(90)
forward(sideA/24/2)

penup();
forward(sideA/12/2)

pendown();
forward(sideA/24/2)

penup();
left(180)
forward(sideA/12/2)

pendown();
left(90)
forward(10)

penup();
left(180)
forward(30)
left(90)
forward(sideA/12/2)




  }
    

forward(sideA/24/2)
right(90)
forward(5)
left(90)
for (var i = 0; i < x*2; i++)//one row middle bricks
{


width(10)
colour(200,0,100,1)

pendown();
forward(sideA/12/2)
right(90)
forward(5)
right(180)

pendown();
width(3)
colour(0,0,0,1)
forward(10)

penup();
right(180)
forward(5)
left(90)


}
penup();
left(90)
forward(5)
right(90)

right(180)
forward(sideA/12*x)
left(90)
forward(40)
left(90)
forward(sideA/24/2)
for (var i = 0; i < x; i++)
  {
      
   penup();
left(90)
forward(15)
right(90)

pendown();
colour(200,0,100,1)
width(30)
forward(sideA/12)


penup();
right(180)
forward(sideA/12)
left(90)
forward(15)
left(90)


penup();
width(2)
colour(0,0,0,1)


pendown();
forward(sideA/12)
left(90)
forward(10)
left(90)
forward(sideA/12/2)
left(90)
forward(10)
penup();
left(180)
forward(10)

pendown();
left(90)
forward(sideA/12/2)

penup();
left(180)
forward(sideA/24/2)

pendown();
left(90)
forward(10)
right(90)
forward(sideA/12/2)
right(90)
forward(10)

penup();
left(90)
forward(sideA/24/2)
left(90)
forward(20)
left(90)

pendown();


left(90)
forward(10)
right(90)
forward(sideA/24/2)

penup();
forward(sideA/12/2)

pendown();
forward(sideA/24/2)

penup();
left(180)
forward(sideA/12/2)

pendown();
left(90)
forward(10)

penup();
left(180)
forward(30)
left(90)
forward(sideA/12/2)




  }

penup();
right(180)
forward(sideA/12*x)
right(90)
forward(30)
right(90)

pendown();
forward(sideA/12*x)
}

penup();

goto(0,0)
left(90)
forward(sideB/2)
right(180)
forward(70)
left(90)
forward(140)
right(90)

forward(1)
pendown();
Greentube(50);
pendown();
goto(0,0)

width(3)
colour(0,0,0,1)
drawCloud();

penup();
goto(0,0)
right(180)
forward(sideB/2)
right(90)//
forward(sideA/2)
right(90)//
forward(40)
right(90)
forward(sideA/12)
left(90)

pendown();
width(sideA/12)
colour(255, 233, 0,1);
forward(30)

width(2)
colour(0, 0, 0,1);
penup();
right(180)
forward(34)
right(180)
questionMark();

goto(0,0)
penup();
forward(100)
right(90)
forward(13)

pendown();
brickblock();

pendown();
left(90)
forward(30)
left(90)
forward(sideA/12)
left(90)
forward(30)
left(90)
forward(sideA/12)

penup();
goto(0,0)// mario placment
left(90)
forward(sideB/2)
right(90)
forward(sideA/2)
right(90)
forward(73)
left(90)
left(180)
forward(60)
right(180)

pendown();
mario();

penup();// goomba placment
goto(0,0)
forward(100)
right(90)
forward(sideB/2-70)
right(90)
forward(10)

pendown();
goomba();