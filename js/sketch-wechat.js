var play_it = 1;
var particle_amount = 2000;

var m = new Array(particle_amount);
var x = new Array(particle_amount);
var y = new Array(particle_amount);
var vx = new Array(particle_amount);
var vy = new Array(particle_amount);

//============================================================

function setup() {
  var container = select('#section-sketch-wechat');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('section-sketch-wechat');
  canvas.id('section-sketch-wechat-canvas')

  canvas.mouseOver(checkState);
  canvas.mouseOut(checkState);
  // canvas.mouseClicked(setParticles);

  setParticles();
  frameRate(60);

}

//============================================================

function draw() {
  background('#2C7631');

  for (var i = 0; i < particle_amount; i++) {
    //Set particle position, using equation of a circle (x-x0)2+(y-y0)2=r2
    var target_x = mouseX - x[i];
    var target_y = mouseY - y[i];

    var r = sqrt(sq(target_x) + sq(target_y));

    var f = sin(r * 0.04) * m[i] / r;
    // var f = m[i] / r;

    vx[i] = vx[i] * 0.5 + f * target_x;
    vy[i] = vy[i] * 0.5 + f * target_y;

  }


  for (var t = 0; t < particle_amount; t++) {
    x[t] += vx[t];
    y[t] += vy[t];

    if (x[t] < 0 || x[t] > width) {
      x[t] = x[t - 1];
    }

    if (y[t] < 0 || y[t] > height) {
      y[t] = y[t - 1];
    }

    if (m[t] < 0) {
      stroke(255, 255, 255, 50);
    } else {
      stroke(215, 190, 140, 250);
    }

    point(x[t], y[t]);
  }
}


//============================================================

function setParticles() {
  for (var i = 0; i < particle_amount; i++) {
    m[i] = randomGaussian() * 20;
    x[i] = random(width);
    y[i] = random(height);

    vx[i] = 0;
    vy[i] = 0;
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
