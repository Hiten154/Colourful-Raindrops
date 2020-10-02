



function setup() {
  createCanvas(800,400);
}

function draw() {
  background("red"); 
  drops(); 
  drawSprites();

}

function drops (){
  var drop = createSprite(random(15,800), 0, random(5,10), random(10,100));
  drop.velocityY = random(2,10);
  drop.shapeColor = color(random(0,255), random(0,255), random (0,225));

}