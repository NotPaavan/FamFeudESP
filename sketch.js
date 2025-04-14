
function preload() {
  
  FFI = loadSound('FamFeudIntro.mp3');
  FFL = loadImage('FamFeudLogo.png');
  ESP = loadFont('Clarendon Regular.otf');
  
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
  background(33); 
  
  image(FFL, windowWidth/2 - windowHeight/4, 25, windowHeight/2, windowHeight/3.5);
  textFont(ESP);
  textSize(windowHeight/15);
  fill(61 , 94, 171);
  stroke(255);
  strokeWeight(4);
  text('ESPAÑOL', windowWidth/2 - windowHeight/6, windowHeight/3);
  
}
