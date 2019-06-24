var canvas, play_it = 1;
var particles = [];

class PARTICLE {
  constructor() {
    this.position = position.get();
    this.LiveT = 255.0;
    this.createCanvas = 0;
  }

  run() {
    this.position.y += (width / 2 - this.position.y) * 0.02;
    this.position.x += (height / 2 - this.position.x) * 0.02;
    this.createCanvas += 3.5;
    stroke(constrain(this.createCanvas / 2.2, 0, 250));
    ellipse(this.position.x, this.position.y, this.createCanvas, this.createCanvas);
  }

  isDead() {
    if (this.createCanvas >= 700) {
      return true;
    }
  }
}

class WALKER {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = 0;
    this.ty = 10000;
    this.t = 0;
  }
  display() {
    this.t++;
    if (this.t >= 3) {
      this.t = 0;
      particles.push(new Particle(new
        var (this.x, this.y)));
    }
  };
  walk() {
    this.x = map(noise(this.tx), 0, 1, -400, 800);
    this.y = map(noise(this.ty), 0, 1, -400, 800);
    this.tx += 0.003;
    this.ty += 0.003;
  };
}

var w = new Walker();


function setup() {
  canvas = createCanvas(800, 800);
  // frameRate(60);
}


function draw() {
  background(250);
  noFill();
  strokeWeight(35);

  w.walk();
  w.display();

  for (var i = particles.length - 1; i >= 0; i--) {
    var p = particles[i];
    p.run();
    if (p.isDead()) {
      particles.splice(i, 1);
    }
  }
}
