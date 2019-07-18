p5.disableFriendlyErrors = true;

var play_it = 1;

class BUBBLE {
  constructor() {
    this.first_time = 1;
    this.mass = 1;

    if (width < 800) {
      this.size = 100;
      this.g = createVector(-0.01, 0);
    } else {
      this.size = 300;
      this.g = createVector(-0.03, 0);
    }



    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  initial() {
    this.pos = createVector(width, random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    let t = map(this.pos.y, 0, height / 2, 0, PI / 2);
    this.life = sin(t) * this.size;
    this.color_H = map(sin(t), 0, 1, 200, 270);
    this.color_S = 90;
    this.color_B = 100;
    this.opacity = 0;
  }

  show() {
    // push();
    colorMode(HSB);
    fill(this.color_H, this.color_S, this.color_B, this.opacity);
    noStroke();

    ellipse(this.pos.x, this.pos.y, this.life, this.life);
    // pop();
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  move() {
    this.applyForce(this.g);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  update() {
    let offset = map(this.pos.y, 0, height, 1, 0) / 3;
    if (this.first_time) {
      this.opacity = 0;
    } else {
      this.opacity += offset;
    }
    this.life -= this.size / 220;
    this.color_H -= offset * 2;

    if (this.life <= 0) {
      this.first_time = 0;
      this.initial();
    }
  }
}


var bubbles = new Array(100);
var bubble_amount;

//============================================================

function setup() {
  var container = select('#sketch');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('sketch');

  if (width < 800) {
    bubble_amount = 50;
  } else {
    bubble_amount = 100;
  }

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i] = new BUBBLE();
    bubbles[i].initial();
  }

  if (width > 800) {
    canvas.mouseOver(checkState);
    canvas.mouseOut(checkState);
  }

  frameRate(60);
  noStroke();
}

//============================================================

function draw() {
  background('#C3EBFF');

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].update();
    bubbles[i].show();
  }
}

//============================================================

function checkState() {
  if (play_it) {
    loop();
    play_it = 0;
  } else {
    noLoop();
    play_it = 1;
  }
}
