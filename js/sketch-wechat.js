var play_it;
var particle_amount;
var speed;
var gap;
var limit_x, limit_y;

var speeds = new Array(particle_amount);
var x = new Array(particle_amount);
var y = new Array(particle_amount);
var dis_x = new Array(particle_amount);
var dis_y = new Array(particle_amount);

//============================================================

function setup() {
  var container = select('#sketch-wechat');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('sketch-wechat');
  canvas.id('sketch-wechat-canvas')

  canvas.mouseOver(checkState);
  canvas.mouseOut(checkState);
  canvas.mouseClicked(setParticles);

  play_it = 1;
  particle_amount = 10000;
  speed = 20;
  gap = 40;
  limit_x = width * 0.6;

  setParticles();
  frameRate(60);
}

//============================================================

function draw() {
  background(44,118,49,233);

  // if (mouseIsPressed) {
  for (var i = 0; i < particle_amount; i++) {
    //(x-a)2+(y-b)2=r2
    var r_x = x[i] - mouseX;
    var r_y = y[i] - mouseY;

    if ( abs(r_x) > limit_x ) {
      x[i] = mouseX + limit_x * randomGaussian();
      r_x = x[i] - mouseX;
    }

    var r = sqrt( sq(r_x) + sq(r_y) );

    if(r < 1){
      r = 1;
    }

    //shape of circle
    var circle = sin( r / gap ) / r;

    //the decimals decide the length of each "step"
    dis_x[i] = dis_y[i] * 0.5 + circle * r_x * speeds[i];
    dis_y[i] = dis_y[i] * 0.7 + circle * r_y * speeds[i];

  }

  // }
  for (var t = 0; t < particle_amount; t++) {
    x[t] += dis_x[t];
    // y[t] += dis_y[t];

    if (x[t] < 0) {
      x[t] = width;
    } else if (x[t] > width) {
      x[t] = 0;
    }


    if (y[t] < 0) {
      y[t] = height;
    } else if (y[t] > height) {
      y[t] = 0;
    }


    if (speeds[t] < 0) {
      stroke(215, 190, 140, 40);
      y[t] += dis_y[t];
    } else {
      stroke(215, 190, 140, 180);
      // y[t] -= dis_y[t];
    }


    point(x[t], y[t]);
  }
}
//============================================================

function setParticles() {
  for (var i = 0; i < particle_amount; i++) {
    speeds[i] = randomGaussian() * speed;
    x[i] = random(width);
    y[i] = random(height);

    dis_x[i] = 0;
    dis_y[i] = 0;
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
