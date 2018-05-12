var NUMSINES = 3; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable

// play with these to get a sense of what's going on:
var fund = 0.005; // the speed of the central sine
var ratio = 3; // what multiplier for speed is each additional sine?
var alpha = 70; // how opaque is the tracing system

var trace = true; // are we tracing?

var song, analyzer;

var fft;
var fftBands = 1024;

var waveform = [];


// for red, green, and blue color values
var r, g, b;

function preload(){
  song = loadSound('whatif.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
background(0);
  rad = height/4; // compute radius for central circle
  //background(204); // clear the screen

  for (var i = 0; i<sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }

    song.loop();

        // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);

  fft = new p5.FFT(.99, fftBands);

    r = random(255);
  g = random(255);
  b = random(255);

}

function draw() {

    // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen

  for (var i = 0; i<sines.length; i++) {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      stroke(r, g, b*(float(i)/sines.length), alpha); // blue
      fill(r, g, b, 127, alpha/2); // also, um, blue
      erad = 5.0*(1.0-float(i)/sines.length); // pen width will be related to which sine
    }
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    push(); // go up one level
    translate(0, radius); // move to sine edge


 var rms = random(analyzer.getLevel());
     //if (trace) ellipse(width/2, height/2, rms, rms); // draw with erad if tracing

    var radius = random(40*rms)
    if (trace) ellipse(random(100), random(100), radius, radius); // draw with erad if tracing


    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
  pop(); // pop down final transformation

}
            

function mousePressed() {

    r = random(255);
    g = random(255);
    b = random(255);
}

function keyReleased() {
  if (key==' ') {
    trace = !trace; 
    background(0);
  }
}