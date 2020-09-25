let x, y, p1, p2;

function setup() {
  createCanvas(500, 500);
  noFill();
  for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
      x = int(random(0, 500));
      y = int(random(0, 500));
      p1 = int(random(0, 500));
      p2 = int(random(0, 500));
      rect(p1, p2, x, y);
    }           
  }
}


function draw() {
  
}
