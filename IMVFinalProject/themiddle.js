var song;
var amp;
var yoff = 0.0

function setup() {
  createCanvas(800,500);
  song = loadSound("themiddle.mp3", loaded);
  amp = new p5.Amplitude();

}

function loaded (){
  song.play();
  draw();
}

function draw() {
 background(0);

stroke(255, 20, 90);
  noFill();

  beginShape();
    
  var xoff= 0;
    
  for (var x = 0; x <= width; x += 10) {
  	 var level = amp.getLevel();
 console.log(level);
 var size = map(level, 0, 1, 500, 800);

  // Map noise value (between 0 and 1) to y-value of canvas
    var y = map(level, noise(xoff, yoff), 0, 1, 500, 800);
    // Set the vertex
    vertex(x, y); 
    xoff += 0.05;
  }
    
  //Speed of moving waves
  yoff += 0.007;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

}