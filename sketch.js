var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1500,200,60,height/2);
 

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  if(wall.x-car.x < (car.Width+car.Width)/2){

car. velocityX=0;
var deformation= 0.5*weight*weight*speed*speed/22059;
if(deformation>180){
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
  
  car.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(0,255,0);
}

  }
}
  drawSprites();
}