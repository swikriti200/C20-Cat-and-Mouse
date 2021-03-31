var bgImg;
var cat, catRunning;
var mouse, mouseTeasing;

function preload() {
    //load the images here
       bgImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png");
    mouseImg = loadAnimation("images/mouse.png")
    catImg3 = loadAnimation("images/cat3.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
}

function draw() {

    background(255);
    //Write condition here to evalute if cat and mouse collide

    if(cat.x - mouse.x < (cat.width- mouse.width)/2);
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");

    drawSprites();
}


function keyPressed(){

    //for moving and changing animation write code here
      if(keyCode === LEFT_ARROW){
          mouse.addAnimation("mouseTeasing",mouseImg2);
          mouse.changeAnimation("mouseTeasing");
          mouse.frameDelay = 25;
      }
}