var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
weight=random(400,1500);

wall=createSprite(1500,200,60,height/2)
wall.shapeColor=color(80,80,80);
car=createSprite(50, 200, 50, 50);

}

function draw() {
  background("black");  
 car.velocityX=speed;
  boom();
  drawSprites();
}
function boom(){
if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var d=0.5 * weight * speed * speed/22509;
  if(d<100){
  car.shapeColor="green";
  }
  if(d>100 && d<180){
		car.shapeColor="yellow";
  }
   if(d>180){
  car.shapeColor="red";
  }
  }
}
