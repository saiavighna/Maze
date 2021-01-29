var player;
var kingImage
var mummyGroup;
var gameState
var life
var mummyImage
var score;
var coinsImage;
var coins=[];
var coin;
var coin2;
var coin3;
var coin4;
var coin5;
var coin6;
var coin7;
var coin8;
var coinGroup;
var treasure;
var treasureImage;
var displaytext ='win'
var youwin,youlost,winImage,lostImage;
function preload (){
  kingImage=loadImage("images/king.jpg")
  mummyImage1=loadImage("images/obstacle1.jpg")
  mummyImage2=loadImage("images/obstacle2.jpg")
  mummyImage3=loadImage("images/obstacle3.jpg")
  //mummyImage4=loadImage("images/obstacle4.jpg")
  coinImage=loadImage("images/coin2.jpg")
  beamImage=loadImage("images/wood.jpg")
  treasureImage=loadImage("images/Treasure.png")
  winImage=loadImage("images/youwin.png")
  lostImage=loadImage("images/gameover.jpg")
  
}
var beam1;
var beam2;
var beam3;
var beam4;
var beam5;
var beam6;
var beam7;
var beam8;
var beam9;
var beam10;
var beam11;

function setup () {
  createCanvas (windowWidth,windowHeight)
  textSize(20)
  player=createSprite(50,height,10,10);
  treasure=createSprite(25,40,5,5)
  youwin=createSprite(25,40,5,5)
  youlost=createSprite(25,40,5,5)
  treasure.addImage("Treasure",treasureImage)
  player.addImage("king",kingImage)
  youwin.addImage("win",winImage)
  youlost.addImage("lost",lostImage)
  coin1=createSprite(267,330,5,5)
  coin2=createSprite(120,220,5,5)
  coin3=createSprite(20,130,5,5)
  coin4=createSprite(200,170,5,5)
  coin5=createSprite(300,100,5,5)
  coin6=createSprite(250,30,5,5)
  coin7=createSprite(200,90,5,5)
  coin8=createSprite(50,90,5,5)
  
  coin1.addImage("coin",coinImage)
  coin2.addImage("coin2",coinImage)
  coin3.addImage("coin3",coinImage)
  coin4.addImage("coin4",coinImage)
  coin5.addImage("coin5",coinImage)
  coin6.addImage("coin6",coinImage)
  coin7.addImage("coin7",coinImage)
  coin8.addImage("coin8",coinImage)
 
  coin1.scale=0.08
  coin2.scale=0.08
  coin3.scale=0.08
  coin4.scale=0.08
  coin5.scale=0.08
  coin6.scale=0.08
  coin7.scale=0.08
  coin8.scale=0.08
  player.scale=0.20
  treasure.scale=0.10
  youwin.scale=.50
  youlost.scale=0.40
  
 
 
  beam1=createSprite(350,200,width,10)
  beam2=createSprite(6,300,500,10)
  beam3=createSprite(8,110,500,10)

  beam4=createSprite(397,129,150,10)
  beam5=createSprite(188,306,10,100)
  beam6=createSprite(300,250,10,100)
  beam7=createSprite(260,350,80,10)

  beam8=createSprite(98,205,10,70)
  beam9=createSprite(257,101,10,100)
  beam10=createSprite(257,46,200,10)
  beam11=createSprite(70,70,10,70);
  
beam1.shapeColor = "brown";
beam2.shapeColor = "brown";
beam3.shapeColor = "brown";
beam4.shapeColor = "brown";
beam5.shapeColor = "brown";
beam6.shapeColor = "brown";
beam7.shapeColor = "brown";
beam8.shapeColor = "brown";
beam9.shapeColor = "brown";
beam10.shapeColor = "brown";
beam11.shapeColor = "brown";
youwin.visible=false;
youlost.visible=false;


  mummyGroup=new Group();
  gameState="play"
  score=0
 



}

function draw (){
  background("yellow")
  if (gameState==="play"){
  if (keyDown(UP_ARROW)) {
    player.y=player.y-5
  
  }
  if (keyDown(DOWN_ARROW)){
    player.y=player.y+5
  }
  if (keyDown(RIGHT_ARROW)){
    player.x=player.x+5
  }
  if (keyDown(LEFT_ARROW)){
    player.x=player.x-5
  }
  if (mummyGroup.isTouching(player)){
    gameState="END"
    displaytext="lost"
  }
  player.bounceOff(beam1)
  player.bounceOff(beam2)
  player.bounceOff(beam3)
  player.bounceOff(beam4)
  player.bounceOff(beam5)
  player.bounceOff(beam6)
  player.bounceOff(beam7)
  player.bounceOff(beam8)
  player.bounceOff(beam9)
  player.bounceOff(beam10)
  player.bounceOff(beam11)
  
  if (player.isTouching(coin1)){
   score=score+10
    coin1.destroy();
  }
  if (player.isTouching(coin2)){
   score=score+10
    coin2.destroy();
  }
   if (player.isTouching(coin3)){
   score=score+10
    coin3.destroy();
  }
  
   if (player.isTouching(coin4)){
   score=score+10
    coin4.destroy();
  }
  
   if (player.isTouching(coin5)){
   score=score+10
    coin5.destroy();
  }
  
   if (player.isTouching(coin6)){
   score=score+10
    coin6.destroy();
  }
  
   if (player.isTouching(coin7)){
   score=score+10
    coin7.destroy();
  }
    if (player.isTouching(coin8)){
   score=score+10
    coin8.destroy();
  }
    if(player.isTouching(treasure)){
      score=score+100
      displaytext= 'win'
      gameState = 'END'
    }
  
  text ("Score:"+score,330,20)
  
  SpawnMummies()
  }
  else if(gameState==="END"){
    mummyGroup.setVelocityEach(0,0)
    displaymessage (displaytext)
    
  }
  
  drawSprites();
}

function displaymessage (txt){
  if (txt === 'win'){
    //text("You Won!",200,190)
    youwin.x=200
    youwin.y=190
    youwin.visible=true;
  }
  else if (txt === 'lost') {
   // text("You lost",200,190)
     youlost.x=200
    youlost.y=210
    youlost.visible=true;
  }
}

function SpawnMummies(){
  if (frameCount % 20===0){
    var mummy = createSprite(200,200,10,10);
    mummy.velocityY=Math.round(random(-10,10))
    mummy.velocityX=Math.round(random(-10,10))
    mummy.y=Math.round(random(0,400))
    mummy.x=Math.round(random(0,400))
    mummy.lifetime = 200
    mummyGroup.add (mummy);
    mummy.scale=0.04;
  
  var rand = Math.round(random(1,4));
  switch(rand) {
      case 1: mummy.addImage(mummyImage1);
              break;
      case 2: mummy.addImage(mummyImage2);
              break;
      case 3: mummy.addImage(mummyImage3);
              break;
      //case 4: mummy.addImage(mummyImage4);
             // break;
     
      default: break;
    }
  } 


    }
function displaycoins (){
   coin=createSprite(267,330,5,5)
   coin.addImage("coin",coinImage)
   coin.scale=0.08
}