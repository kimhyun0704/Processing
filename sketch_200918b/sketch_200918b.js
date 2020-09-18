 function setup() {
  createCanvas(500, 500);
  for(let i = 0; i<500; i += 10){
    line(i, 0, i, 500);
  }
  for(let i = 0; i<500; i += 10){
    line(0, i, 500, i);
  }
}
 

function draw() {

}
