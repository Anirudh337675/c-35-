//Create variables here
var dog, database, foodS, foodStock
var dog1,dog2
var x=20

function preload()
{
  //load images here
  dog1=loadImage("dogImg.png");
  dog2=loadImage("dogImg1.png");
}

function setup() {

  database=firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,350,10,10);
  dog.addImage(dog1) 
  dog.scale=0.4;
  
    foodStock=database.ref('food')
    foodStock.on("value",readStock)
  
}


function draw() {  

  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(x);
    dog.addImage(dog2);
    dog.scale=0.4
    }
  drawSprites();
  //add styles here

  textSize(20);
  fill("blue");
  text("Note:Press UP_ARROW key to feed drago milk",50,100);
  text("food remaining :"+x,50,250);
  
 

}

function readStock(data){
  x=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({ 
    food:x
  })
  
  

}