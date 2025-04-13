
function preload() {
  
  FFI = loadSound('FamFeudIntro.mp3');
  FFL = loadImage('FamFeudLogo.png');
  
}

function setup() { bgmusic(); }
function bgmusic() { 
  
  if (startMenu === true) {
    //FFI.play();
    //FFI.loop();
    FFI.setVolume(0.25);     
  }
  else {
    FFI.stop();
  }
  
}

var startMenu = true;

function draw() {
  
  createCanvas(windowWidth, windowHeight);
  background(220); 
  image(FFL, windowWidth/2 - 211, 25, windowHeight/2, windowHeight/3.5);
  
}