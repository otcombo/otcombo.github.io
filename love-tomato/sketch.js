var drawLength = 250;
var noiseScale = 0.005;
var strokeLength = 35;

var imgNames = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg"]; // Add your image's name here.
var imgs = [];
var imgIndex = -1;

var frame;


function preload() {
	// Pre-load all images.
	for (let i = 0; i < imgNames.length; i++) {
		imgs.push(loadImage(imgNames[i]));
	}
}


function setup() {
	// createCanvas(windowWidth, windowHeight);
	var container = select('#sketch');
	var canvas = createCanvas(container.width, container.height);
	canvas.parent('sketch');
	background(255);
	changeImage();
}


function draw() {
	if (frame > drawLength) {
		return;
	}

	let img = imgs[imgIndex];

	translate(
		width / 2 - img.width / 2,
		height / 2 - img.height / 2
	);

	// The smaller the stroke is the more the spawn count increases to capture more detail.
	let count = map(frame, 0, drawLength, 2, 40);

	for (let i = 0; i < count; i++) {
		// Pick a random point on the image.
		let x = int(random(img.width))
		let y = int(random(img.height))

		// Convert coordinates to its index.
		let index = (y * img.width + x) * 4;

		// Get the pixel's color values.
		let r = img.pixels[index];
		let g = img.pixels[index + 1];
		let b = img.pixels[index + 2];
		let a = img.pixels[index + 3];

		stroke(r, g, b, a);

		// Start with thick strokes and decrease over time.
		let sw = map(frame, 0, drawLength, 25, 0);
		strokeWeight(sw);

		push();
		translate(x, y);

		// Rotate according to the noise field so there's a 'flow' to it.
		let n = noise(x * noiseScale, y * noiseScale);
		rotate(radians(map(n, 0, 1, -180, 180)));

		let lengthVariation = random(0.75, 1.25);
		line(0, 0, strokeLength * lengthVariation, 0);

		// Draw a highlight for more detail.
		stroke(min(r * 3, 255), min(g * 3, 255), min(b * 3, 255), random(100));
		strokeWeight(sw * 0.8);
		line(0, -sw * 0.15, strokeLength * lengthVariation, -sw * 0.15);
		pop();
	}

	frame++;
}


function changeImage() {
	background(255);

	frame = 0;

	noiseSeed(int(random(1000)));

	imgIndex++;
	if (imgIndex >= imgNames.length) {
		imgIndex = 0;
	}

	imgs[imgIndex].loadPixels();
}


function mousePressed() {
	changeImage();
}