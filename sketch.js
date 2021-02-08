var cat, cat1, cat2, cat4, garden, mouse, mouse1, mouse2, mouse4;
var catImg1,catImg2,catImg4, gardenImg, mouseImg1, mouseImg2, mouseImg4;

function preload() {
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);

  cat = createSprite(500,450,20,50);
  cat.addAnimation("cat1", catImg1);
  cat.scale = 0.1;

  mouse = createSprite(50, 450,30,50);
  mouse.scale = 0.1;
  mouse.addAnimation("mouse1", mouseImg1);

  garden = createSprite(200,180,400,200);
  garden.addImage("garden",gardenImg);

    garden.depth = cat.depth;
    cat.depth = cat.depth + 1;
}

function draw() {

    background(255);

if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
    cat.addAnimation("catLastImage", catImg4);
    cat.changeAnimation("catLastImage");
    cat.velocityX = 0;
    mouse.addAnimation("mouseLastImage", mouseImg4);
    mouse.changeAnimation("mouseLastImage");
    
}

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2)
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseteasing",mouseImg2);
        mouse.changeAnimation("mouseteasing");
    }
}
