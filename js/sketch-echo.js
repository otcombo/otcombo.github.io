p5.disableFriendlyErrors = true;

var play_it = 1;
var amount = 800;
var radius_scale = 2.5;
var rotate_speed = 0.000005
var M = 1000;


var X = new Array(amount + 1);
var Y = new Array(amount + 1);
var Z = new Array(amount + 1);

var VX = new Array(amount + 1);
var VY = new Array(amount + 1);
var VZ = new Array(amount + 1);

var dVX = new Array(amount + 1);
var dVY = new Array(amount + 1);
var dVZ = new Array(amount + 1);

var L,R,N,NN;

var KX,KY,KZ;
var KVX,KVY,KVZ;
var KdVX,KdVY,KdVZ;

//============================================================

function setup() {

	var container = select('#sketch');
	var canvas = createCanvas(container.width, container.height);
	canvas.parent('sketch');

	canvas.mouseOver(checkState);
	canvas.mouseOut(checkState);

	strokeWeight(5);
	noFill();

	R = 2 * sqrt((4 * PI * (200 * 200) / amount) / (2 * sqrt(3)));

	for (N = 0; N <= amount; N++) {
		X[N] = random(-300, +300);
		Y[N] = random(-300, +300);
		Z[N] = random(-300, +300);

		VX[N] = 0;
		VY[N] = 0;
		VZ[N] = 0;

		dVX[N] = 0;
		dVY[N] = 0;
		dVZ[N] = 0;


		if (Z[N] > 250) {
			L = sqrt((X[N] * X[N]) + (Y[N] * Y[N]));
			dVX[N] = Y[N] / L;
			dVY[N] = -1* X[N] / L;
		}
	}


}

//============================================================

function draw() {
	translate(width * 0.7,height*0.3);
	background(220, 33, 7, 200);

	for (N = 0; N <= amount; N++) {
		for (NN = N + 1; NN <= amount; NN++) {
			L = sqrt(((X[N] - X[NN]) * (X[N] - X[NN])) + ((Y[N] - Y[NN]) * (Y[N] - Y[NN])));
			L = sqrt(((Z[N] - Z[NN]) * (Z[N] - Z[NN])) + (L * L));

			if (L < R) {
				X[N] = X[N] - ((X[NN] - X[N]) * ((R - L) / (2 * L)));
				Y[N] = Y[N] - ((Y[NN] - Y[N]) * ((R - L) / (2 * L)));
				Z[N] = Z[N] - ((Z[NN] - Z[N]) * ((R - L) / (2 * L)));

				X[NN] = X[NN] + ((X[NN] - X[N]) * ((R - L) / (2 * L)));
				Y[NN] = Y[NN] + ((Y[NN] - Y[N]) * ((R - L) / (2 * L)));
				Z[NN] = Z[NN] + ((Z[NN] - Z[N]) * ((R - L) / (2 * L)));

				dVX[N] = dVX[N] + ((VX[NN] - VX[N]) / M);
				dVY[N] = dVY[N] + ((VY[NN] - VY[N]) / M);
				dVZ[N] = dVZ[N] + ((VZ[NN] - VZ[N]) / M);

				dVZ[NN] = dVZ[NN] - ((VZ[NN] - VZ[N]) / M);
				dVX[NN] = dVX[NN] - ((VX[NN] - VX[N]) / M);
				dVY[NN] = dVY[NN] - ((VY[NN] - VY[N]) / M);
			}

			if (Z[N] > Z[NN]) {
				KX = X[N];
				KY = Y[N];
				KZ = Z[N];

				KVX = VX[N];
				KVY = VY[N];
				KVZ = VZ[N];

				KdVX = dVX[N];
				KdVY = dVY[N];
				KdVZ = dVZ[N];

				X[N] = X[NN];
				Y[N] = Y[NN];
				Z[N] = Z[NN];

				VX[N] = VX[NN];
				VY[N] = VY[NN];
				VZ[N] = VZ[NN];

				dVX[N] = dVX[NN];
				dVY[N] = dVY[NN];
				dVZ[N] = dVZ[NN];

				X[NN] = KX;
				Y[NN] = KY;
				Z[NN] = KZ;

				VX[NN] = KVX;
				VY[NN] = KVY;
				VZ[NN] = KVZ;

				dVX[NN] = KdVX;
				dVY[NN] = KdVY;
				dVZ[NN] = KdVZ;
			}
		}

		L = sqrt((X[N] * X[N]) + (Y[N] * Y[N]));
		L = sqrt((Z[N] * Z[N]) + (L * L));

		X[N] = X[N] + (X[N] * (200 - L) / (2 * L));
		Y[N] = Y[N] + (Y[N] * (200 - L) / (2 * L));
		Z[N] = Z[N] + (Z[N] * (200 - L) / (2 * L));

		KX = X[N] + VX[N];
		KY = Y[N] + VY[N];
		KZ = Z[N] + VZ[N];

		L = sqrt((KX * KX) + (KY * KY));
		L = sqrt((KZ * KZ) + (L * L));

		VX[N] = VX[N] - (KX * (L - 200) / (2 * L));
		VY[N] = VY[N] - (KY * (L - 200) / (2 * L));
		VZ[N] = VZ[N] - (KZ * (L - 200) / (2 * L));

		Z[N] = (Z[N] * cos(mouseX * rotate_speed)) - (X[N] * sin(mouseX * rotate_speed));
		X[N] = (Z[N] * sin(mouseX * rotate_speed)) + (X[N] * cos(mouseX * rotate_speed));

		Z[N] = (Z[N] * cos(mouseY * rotate_speed)) - (Y[N] * sin(mouseY * rotate_speed));
		Y[N] = (Z[N] * sin(mouseY * rotate_speed)) + (Y[N] * cos(mouseY * rotate_speed));

		VZ[N] = (VZ[N] * cos(mouseX * rotate_speed)) - (VX[N] * sin(mouseX * rotate_speed));
		VX[N] = (VZ[N] * sin(mouseX * rotate_speed)) + (VX[N] * cos(mouseX * rotate_speed));

		VZ[N] = (VZ[N] * cos(mouseY * rotate_speed)) - (VY[N] * sin(mouseY * rotate_speed));
		VY[N] = (VZ[N] * sin(mouseY * rotate_speed)) + (VY[N] * cos(mouseY * rotate_speed));

		dVZ[N] = (dVZ[N] * cos(mouseX * rotate_speed)) - (dVX[N] * sin(mouseX * rotate_speed));
		dVX[N] = (dVZ[N] * sin(mouseX * rotate_speed)) + (dVX[N] * cos(mouseX * rotate_speed));

		dVZ[N] = (dVZ[N] * cos(mouseY * rotate_speed)) - (dVY[N] * sin(mouseY * rotate_speed));
		dVY[N] = (dVZ[N] * sin(mouseY * rotate_speed)) + (dVY[N] * cos(mouseY * rotate_speed));

		VX[N] = VX[N] + dVX[N];
		VY[N] = VY[N] + dVY[N];
		VZ[N] = VZ[N] + dVZ[N];

		L = sqrt((VX[N] * VX[N]) + (VY[N] * VY[N]));
		L = sqrt((VZ[N] * VZ[N]) + (L * L));

		if (L > 10) {
			stroke(255, 85+ Z[N] / 8, 62+ Z[N] / 8, 150 + Z[N] / 4);
			let x1 = (X[N] + (VX[N] * (L - 12.5) / L)) * radius_scale;
			let y1 = (Y[N] + (VY[N] * (L - 12.5) / L)) * radius_scale;
			let x2 = X[N] * radius_scale;
			let y2 = Y[N] * radius_scale
			line(x1, y1, x2, y2);
		}
	}

}

//============================================================

function mousePressed() {

	for (N = 0; N <= amount; N++) {
		if (Z[N] > 190 ) {

			L = sqrt((X[N] * X[N]) + (Y[N] * Y[N]));

			dVX[N] = dVX[N] + (Y[N] / L);
			dVY[N] = dVY[N] - (X[N] / L);
		}
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
