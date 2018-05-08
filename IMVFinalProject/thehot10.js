function setup() {
  createCanvas(windowWidth, 1700);
  background(0, 0, 0);
  smooth();

  var xstart = random(10),
      xnoise = xstart,
      ynoise = random(10);

  for (var y = 0; y <= height; y+=5) {
    ynoise += 0.1;
    xnoise  = xstart;
    for (var x = 0; x <= width; x+=5) {
      xnoise += 0.1;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}

function drawPoint(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(300));

  stroke(204,177,68);
  line(0, 0, 7, 2);
  pop();
}