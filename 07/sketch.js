var color_bg, color_rect, color_storke;
var rotation, angle, step;

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.parent('sketch-holder');

	//Define color
	color_bg = color(240, 64, 0);
	color_rect = color(255, 70, 0);
	color_line = color(255, 240, 230, 250);

	rotation = 0;
}

function draw() {
	//Draw Background
	background(color_bg);
	fill(color_rect);
	noStroke();
	rect(0, 0, width, height);

	//Draw Spin lines
	stroke(color_line);
	strokeWeight(1);

	spinRays(mouseX, mouseY);
	// noLoop();
}

function spinRays(center_x,center_y) {
		push()
			translate(center_x, center_y);
			// scale(-1, 1);

			rotate(rotation);
			rotation -= 0.5;
			rotation = rotation % 360;

			line(0, 0, width*1.5, 0)
			angle = 0;
			step = 3;
			// for (var i = 0; i < 360; i++) {
			// 	rotate(step)
			// 	line(0, 0, 1000, 20)
			// 	angle += step;
			// }
		pop();
		//
		// img_1 = get(0, 0, width, height);
		// img_1.loadPixels();
		// for (let i = 0; i < width / 2; i++) {
		// 	for (let j = 0; j < height / 2; j++) {
		// 		img_1.set(i + height / 2, j, color(0, 0, 0, 0));
		// 	}
		// }
		// img_1.updatePixels();
}


// var rotation = 0;
// var angle = 0;
// var background_color, rect_color, line_color;
// var img_1;
// var side_length = 250;

// function setup() {
// 	createCanvas(500, 500);

// 	background_color = color(240, 64, 0);
// 	rect_color = color(255, 70, 0);
// 	line_color = color(255, 240, 230, 250);

// 	angleMode(DEGREES);
// 	imageMode(CENTER);
// }


// function draw() {

// 	background(background_color);
// 	fill(rect_color);
// 	noStroke();
// 	rect(0, 0, width, height);

// 	stroke(line_color);
// 	strokeWeight(1);

// 	drawRays(mouseX, mouseY);
// 	background(background_color);

// 	fill(rect_color);
// 	noStroke();
// 	rect(10, 10, width - 20, height - 20);

// 	translate(width / 2, height / 2);
// 	rotate(180);
// 	translate(0, side_length * 0.25);
// 	image(img_1, 0, 0, side_length, side_length);
// 	rotate(180);
// 	image(img_1, 0, side_length / 2, side_length, side_length);
// }

// function drawRays(cx, cy) {

// 	push()
// 		translate(cx, cy);
// 		scale(-1, 1);
// 		rotate(rotation);
// 		rotation -= 0.5;
// 		rotation = rotation % 360;

// 		angle = 0;
// 		step = 3;
// 		for (var i = 0; i < 360; i++) {
// 			rotate(step)
// 			line(0, 0, 1000, 0)
// 			angle += step;
// 		}
// 	pop();

// 	img_1 = get(0, 0, width, height);
// 	img_1.loadPixels();
// 	for (let i = 0; i < width / 2; i++) {
// 		for (let j = 0; j < height / 2; j++) {
// 			img_1.set(i + height / 2, j, color(0, 0, 0, 0));
// 		}
// 	}
// 	img_1.updatePixels();
// }
