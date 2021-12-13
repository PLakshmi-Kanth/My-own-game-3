var backgroundImage;
var astronaut,astronautImage1,astronautImage2,astronautImage3;
var aliensGroup,alienImage;

function preload(){
 backgroundImage=loadImage("bg3.jpg");
 astronautImage1=loadGif("Astronaut1.gif");
 astronautImage=loadImage("Astronaut2.png");
 astronautImage3=loadImage("Astronaut3.png");
 alienImage=loadImage("alien.png");
}

function setup() {
  createCanvas(1000, 600);
  
  ground=createSprite(500,300,1000,600);
  ground.addImage("bgmars",backgroundImage);
  ground.velocityX=-2;
  
  astronaut=createSprite(20,500,15,15);
  astronaut.addImage("astronaut",astronautImage1);
  astronaut.scale=0.3;

  alienGroup = new Group();
  
}

function draw() {
  
  background(0);
 
 if(ground.x<0){
   ground.x=ground.width/2;
 } 
 
 if(keyDown(LEFT_ARROW)){
   astronaut.velocityX=-2;
 }
 
 if(keyDown(RIGHT_ARROW)){
   astronaut.velocityX=+2;
 }

 spawnObstacles();

  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 180 === 0){
    var alien=createSprite(1000,300,50,50)
        alien.addImage("alien",alienImage);
        alien.scale=0.5;
        alien.y=Math.round(random(300,450));;
        console.log(alien.y);
        alien.velocityX=-2;
        alien.lifetime=1000;
        alienGroup.add(alien);
        
  }
}



