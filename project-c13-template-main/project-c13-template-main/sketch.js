var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  criarfolha1();
  criarfolha2();
  criarMaca();
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  

  }


function draw() {
  background(0);
 var escolher_sprite = Math.round(random(1,3));    

    if (frameCount % 80 == 0) {
      if (escolher_sprite == 1){
        criarMaca();
      }
      else if (escolher_sprite == 2) {
        criarfolha1();
      }else {

        criarfolha2();
      }
    
    }
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
 
  drawSprites();
  
  
}

function criarMaca() {

maca = createSprite(random(50, 350),40, 10, 10);
maca.addImage(appleImg)
maca.scale=0.07;
maca.velocityY = 3;
maca.lifeTime = 150;
}

function criarfolha1() {

  red = createSprite(random(50, 350),40, 10, 10);
  red.addImage(redImg)
  red.scale=0.07;
  red.velocityY = 3;
  red.lifeTime = 150;
  }


  function criarfolha2() {

    orange = createSprite(random(50, 350),40, 10, 10);
    orange.addImage(orangeImg)
    orange.scale=0.08;
    orange.velocityY = 3;
    orange.lifeTime = 150;
    }

 
    
  













