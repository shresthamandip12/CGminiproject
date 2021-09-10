let gap = 10;
let cirNum =40;
let cirSize =20;
let angle = 0 ;
let ptNum = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}

function draw() {
  background("black");
  noCursor();
  noStroke();
  fill("white");
  circle(mouseX,mouseY,5);
  
  push();
  translate(width/2,height/2),
    rotate(angle),
    angle = angle + map(mouseX,0,width,-0.5,0.5);
  
  noFill();
  stroke("white");
  strokeWeight(1);
  
  for(let i = 0 ; i <cirNum ; i++){
    arc(0,0,cirSize + gap*i,cirSize +gap*i,angle*i ,360 - angle/2);
  }
  
  pop();
  
  
  for(let i = 0 ; i<ptNum ; i++){
    point(random(width),random(height));
  }
  push();
  translate(width/2,height-20);
  textFont("Arial");
  textSize(15);
  text("U.F.O",0,0);
  
  pop();
}