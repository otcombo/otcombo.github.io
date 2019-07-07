p5.disableFriendlyErrors = true;

var play_it = 1,first_time = 1;
var particle_amount;
var speed;
var gap;
var limit;
var init_x,init_y;

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
  // canvas.mouseClicked(setParticles);

  if( width < 800){
    particle_amount = 5000;
    gap = 30;
    speed = 30;
    limit = width;
  } else {
    particle_amount = 10000;
    gap = 40;
    speed = 30;
    limit = width * 0.6;
  }

  init_x = random(width);
  init_y = random(height);

  setParticles();
  frameRate(60);
  noFill();
}

//============================================================

function draw() {
  background(44,118,49);
  if( mouseX != 0 || mouseY != 0 ){
    first_time = 0;
  }
  // if (mouseIsPressed) {
  for (var i = 0; i < particle_amount; i++) {
    var r = dist( mouseX, mouseY, x[i], y[i])

    if ( first_time ){
      r = dist( init_x, init_y, x[i], y[i]);
    }

    if ( r > limit ) {
      x[i] = mouseX + limit * randomGaussian();
    }

    var circle = Math.sin( r / gap ) / r;

    //the decimals decide the length of each "step"
    dis_x[i] = dis_y[i] * 0.5 + circle * (x[i] - mouseX) * speeds[i];
    dis_y[i] = dis_y[i] * 0.7 + circle * (y[i] - mouseY) * speeds[i];

  }
  // }

  for (var t = 0; t < particle_amount; t++) {
    x[t] += dis_x[t];
    // y[t] += dis_y[t];

    if (x[t] < 0) x[t] = width;
    if (x[t] > width) x[t] = 0;
    if (y[t] < 0) y[t] = height;
    if (y[t] > height) y[t] = 0;

    if (speeds[t] < 0) {
      stroke(128, 153, 94);
      y[t] += dis_y[t];
      // x[t] += dis_x[t];
    } else {
      stroke(181, 176, 126);
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

    dis_x[i] = x[i] + speeds[i];
    dis_y[i] = y[i] + speeds[i];
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
