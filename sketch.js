
const c = 30;
const G = 2;
const dt = 0.1;

let m87;

const particles = [];
let start, end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Implementing image into sketch.js
  img = loadImage('yusuke.png');
  
  m87 = new Blackhole(width / 2, height / 2, 10000);

  start = height / 2;
  end = height / 2 - m87.rs * 2.6;
  
  //Implementing random position for particles from presentation
  particles.push(new Photon(width,random(20,800)));

}
function draw() {
  background(255);

  stroke(0);
  strokeWeight(1);
  line(0, start, width, start);
  line(0, end, width, end);

  for (let p of particles) {
    m87.pull(p);
    p.update();
    p.show();
  }
  m87.show();
}
