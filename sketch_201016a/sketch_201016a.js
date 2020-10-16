let state = 0;

function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(0);
  noStroke();
  if(state == 0){
    fill(255,0,0);
    ellipse(mouseX, mouseY, 50, 50);
  }
  else if(state == 1){
    fill(0,255,0);
    ellipse(mouseX, mouseY, 50, 50);
  }
  else if(state == 2){
    fill(0,0,255);
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function mousePressed(){
  if(state==0){
    state = 1;
  }
  else if(state==1){
    state = 2;
  }
  else if(state==2){
    state = 0;
  }
}
