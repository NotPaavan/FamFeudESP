
function preload() {
  
  FFI = loadSound('FamFeudIntro.mp3');
  click = loadSound('click.mp3');
  start = loadSound('start.mp3');
  
  FFL = loadImage('FamFeudLogo.png');
  ESP = loadFont('Clarendon Regular.otf');
  
} // loads the music and sounds

function setup() { bgmusic(); }
function bgmusic() { 
  
  if (startMenu === true) {
    FFI.play();
    FFI.loop();
    FFI.setVolume(0.25);     
  }
  
  click.setVolume(0.5);
  start.setVolume(0.25);
  
} // plays the background music in the menu

var startMenu = true; // sees if the menu is open

var br = 61; // play button red
var bg = 94; // ~ green
var bb = 171; // ~ blue
var ps = 0; // ~ outline

var ss = 30; // speaker button size
var sx = 25; // ~ x
var sy = 55; // ~ y

var pause = false; // sees if the music is paused
var xw = 0; // the X for the speaker button when the music is paused

function draw() {
  
  createCanvas(windowWidth, windowHeight);
  background(33); 
  
  image(FFL, windowWidth/2 - windowHeight/4, 25, windowHeight/2, windowHeight/3.5); // Family Feud Logo
  textFont(ESP);
  textSize(windowHeight/15);
  fill(61 , 94, 171);
  stroke(255);
  strokeWeight(4);
  text('ESPAÑOL', windowWidth/2 - windowHeight/6, windowHeight/3); // Spanish text for logo
  
  strokeWeight(ps*2 + 4);
  fill(br, bg, bb);
  rect(windowWidth/2 - windowWidth/5, windowHeight/2, windowWidth/2.5, windowHeight/7.5, 25);
  strokeWeight(ps);
  fill(255);
  text('PLAY', windowWidth/2 - windowHeight/6 + windowHeight/15, windowHeight/2 + windowHeight/11); // play button
  
  noStroke();
  fill(61, 95, 171);
  rect(sx, windowHeight - sy, ss, ss, 5);
  triangle(30, windowHeight - 40, sy + 10, windowHeight - sy - 10, sy + 10, windowHeight - sx + 10); // speaker button
  
  if(mouseX > windowWidth/2 - windowWidth/5 && mouseX < windowWidth/2 + windowWidth/5 && mouseY > windowHeight/2 && mouseY < windowHeight/2 + windowHeight/7.5) {
    br = 51;
    bg = 84;
    bb = 161;
    ps += 0.1;
    
    if (ps > 1) { ps -= 0.1; }
  }
  else {
    br = 61;
    bg = 94;
    bb = 171;
    ps -= 0.1;
    
    if(ps < 0) { ps += 0.1; }
  } // play button hover

  if(startMenu === false) { FFI.stop(); } // play button press
  
  if(mouseX > 20 && mouseX < 75 && mouseY > windowHeight - 75 && mouseY < windowHeight - 10) {
    ss += 1;
    sx -= 1;
    sy += 1;
    if (ss > 35) { ss -= 1; }
    if (sx < 22.5) { sx += 1; }
    if (sy > 57.5) { sy -= 1; }
  }
  else {
    ss -= 1;
    sx += 1;
    sy -= 1;
    if (ss < 30) { ss += 1; }
    if (sx > 25) { sx -= 1; }
    if (sy < 55) { sy += 1; }
  } // speaker hover
  
  if(pause === true) {
    noFill();
    stroke(61, 95, 171);
    strokeWeight(xw);
    line(80, windowHeight - 55, 105, windowHeight - 25); 
    line(80, windowHeight - 25, 105, windowHeight - 55);
    
    xw ++;
    if(xw > 5) { xw --; }
  }  // music pause
  if(pause === false) {
    xw = 0;
  }
  
}

function mousePressed() {
  
  if(mouseX > 20 && mouseX < 75 && mouseY > windowHeight - 75 && mouseY < windowHeight - 10 && pause === false && startMenu === true) {
    click.play();
    FFI.stop();
    pause = true;
  }
  else if(pause === true) {
    click.play();
    FFI.play();
    pause = false;
  }
  
  if(mouseX > windowWidth/2 - windowWidth/5 && mouseX < windowWidth/2 + windowWidth/5 && mouseY > windowHeight/2 && mouseY < windowHeight/2 + windowHeight/7.5 && startMenu === true) {
    startMenu = false;
    click.play();
    start.play(0.5);
  }
}