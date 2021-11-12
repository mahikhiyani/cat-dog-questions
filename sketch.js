var player;
var catImg, dogImg;
var car,dog;
var flag=0;
function preaload(){
catImg=loadImage("images/Cat.png");
dogImg=loadImage("images/Dog.png");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);
 // createSprite(100, 100, 50, 50);
   player=new Player()
   cat=createSprite(450,320,100,100);
   cat.visible=false;

   dog=createSprite(760,320,100,100);
   dog.visible=false;
}
function draw() {
  background(255,255,255);
  text(mouseX + ","+mouseY,mouseX,mouseY)  
player.display()
if(flag){
cat.visible=true;
dog.visible=true;
}
drawSprites();
}