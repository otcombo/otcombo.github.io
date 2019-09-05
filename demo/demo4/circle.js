var xoff, yoff, zoff, phase;
var maxSize, currentSize, currentX, currentY, targetX, targetY, directionX, directionY;
var pos, startY, endY;
//===========================================================================

function setup() {
  var container = select('#sketch-container');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('sketch-container');
  canvas.id('sketch-container');

  fill(255);
  noStroke();

  phase = 0;
  zoff = 0;
  speed = 1;
  maxSize = width / 1.8;
  currentSize = 1;
  currentX = 1;
  currentY = 1;
  pos = 0;
  startY = 1440;
  endY = 3000;
}

//===========================================================================

function draw() {
  if (millis() > 2000 && pos < 2000) {
    background(249);



    push();
    updateSize();
    updatePos();

    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.01) {
      let xoff = map(cos(a + phase), -1, 1, 0, 0.5);
      let yoff = map(sin(a + phase), -1, 1, 0, 0.5);

      let r = map(noise(xoff, yoff, zoff), 0, 1, currentSize, currentSize * 1.1);

      let x = cos(a) * r;
      let y = sin(a) * r;

      vertex(x, y);
    }
    endShape(CLOSE);
    phase += 0.015;
    zoff += 0.005;
    pop();
  }

  if (pos > startY) {
    push();
    translate(0, 0);
    let c = map(pos, startY, endY, 0, 255);
    fill(0, c);
    rect(0, 0, width, height);
    pop();
    // if (c > 255) {
    //   noLoop();
    // } else {
    //   loop();
    // }
  }
}

//===========================================================================

function updateSize() {
  let speed = 8 * Math.sin((currentSize / maxSize) * PI) + 0.5;
  if (currentSize < maxSize) {
    currentSize += Math.log(maxSize - currentSize) * speed;
  } else {
    currentSize -= Math.log(currentSize - maxSize);
  }
}

//===========================================================================

function updatePos() {

  let tx = map(mouseX, 0, width, width / -40, width / 40);
  let ty = map(mouseY, 0, height, height / -40, height / 40);

  targetX = map(noise(zoff), 0, 1, tx + width / 4, tx + width / 1.5);
  targetY = map(noise(zoff), 0, 1, ty, ty + height / 1.5);

  let speedX = 2 * Math.cos((currentX / targetX) * PI);
  let speedY = 2 * Math.cos((currentY / targetY) * PI);

  if (targetX => currentX) {
    directionX = 1;
  } else {
    directionX = -1;
  }

  if (targetY => currentY) {
    directionY = -1;
  } else {
    directionY = 1;
  }
  // console.log("b : " + speedY.toFixed(1), currentY.toFixed(0), targetY.toFixed(1));


  currentX += Math.log(Math.abs(targetX - currentX)) * speedX * directionX;
  currentY += Math.log(Math.abs(targetY - currentY)) * speedY * directionY;

  translate(currentX, currentY);
}

//===========================================================================

function mouseWheel(event) {
  pos += event.delta;
  // print(event.delta, pos);
}