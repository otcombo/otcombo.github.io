var px, py, r, degree;
var minWeight = 1;
var maxWeight = 4;
var currWeight;
var spacing = maxWeight + 2;
var goldenRatio = ((sqrt(5) + 1) / 2);
var iter = 0,
	imgNum = random(4);
var smallChaos = false;
var img;

function setup() {
	img = loadImage("self3.jpg");
	createCanvas(500, 500);
	background('#F2F7F4');
	px = width / 2;
	py = height / 2;
}

function draw() {
	if (frameCount > 120) {
		for (var i = 34; i > 0; --i) { // for more speed
			degree = (iter * goldenRatio) * 360;
			r = sqrt(iter++) * spacing;
			calcPovarPos(width / 2, height / 2, r, (degree % 360));

			color pix = img.get(px, py);
			currWeight = map(brightness(pix), 255, 0, minWeight, maxWeight);
			strokeWeight(currWeight);
			stroke(#523939); // stroke(pix);
      povar(px, py);
      
      if (px-10 <= 0 || px + 10 >= width || py - 10 <= 0 || py + 10 >= height) {
				noLoop();
			}
		}
	}
}

function calcPovarPos(x,
	y,
	r,
	graden) {
	px = x + cos(radians(graden)) * (r / 2);
	py = y + sin(radians(graden)) * (r / 2);
	if (smallChaos) {
		px = x + random(maxWeight) + cos(radians(graden)) * (r / 2);
		py = y + random(maxWeight) + sin(radians(graden)) * (r / 2);
	}
}