
function preload() {
  
  //sounds
  FFI = loadSound('FamFeudIntro.mp3');
  click = loadSound('click.mp3');
  start = loadSound('start.mp3');
  //images
  FFL = loadImage('FamFeudLogo.png');
  //fonts
  ESP = loadFont('Clarendon Regular.otf');
  AF = loadFont('Berthold Akzidenz Grotesk BE Extra Bold Condensed.ttf');
  
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

var a = 1;
if(a===1){
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

var play = false; // sees if the play button has been pressed
var pso = 0;

var sx2 = 0;
var arrow = function(ax, ay, as, lr, sw){
  
  strokeWeight(as/10+sw);
    
  if(lr === 2) {
    line(ax, ay, ax + as/4*3, ay + as/2);
    line(ax + as/4*3, ay + as/2, ax, ay + as);
  }
  if(lr === 1) {
    line(ax, ay, ax - as/4*3, ay + as/2);
    line(ax - as/4*3, ay + as/2, ax, ay + as);
  }
    
}
var left = false;
var right = false;
var aswl = 0;
var aswr = 0;

var a1 = 0;
var a2 = 0;
var b1 = 0;
var b2 = 0;
var c1 = 0;
var c2 = 0;
var d1 = 0;
var d2 = 0;
var e1 = 0;
var e2 = 0;
  
var panelW
var panelH
var cornerRadius
var yPos1

var playing = false;

var b5 = false;
let sw5b = ['hombre', 'mujer', 'joven', 
'alto', 'bajo', 'corto', 'guapo', 'largo', 'viejo', 
'pelo', 'canoso', 'castaño', 'negro', 'rubio', 'pelirrojo',
'delicioso', 'desear', 'plato', 'postre', 'rico',
'azúcar', 'cuchara', 'cuchillo', 'pimienta', 'sal', 'servilleta', 'tenedor', 'vaso',
'camarero', 'cuenta', 'menú',
'querer', 'pedir', 'traer', 'traigo',
'ahora', 'nada', 'otro', 'qué']
let ew5b = ['man', 'woman', 'young',
'short', 'good-looking', 'long', 'old', 
'hair', 'gray', 'brown', 'black', 'blond', 'red-haired',
'delicious', 'want', 'main', 'dish', 'dessert', 'rich', 'tasty',
'sugar', 'spoon', 'knife', 'pepper', 'plate', 'salt', 'napkin', 'fork', 'glass',
'waiter', 'waitress', 'bill', 'menu',
'bring', 'will', 'I', 'me',
'now', 'anything', 'else', 'another', 'how']

var osp = 0;
var osp2 = 0;
var cf = 255;
var ro = 0;
var rule = false;
var close = false;
var aswr2 = 2;
var aswl2 = 2;

}

function draw() {
  
  if(a===1){
  createCanvas(windowWidth, windowHeight);
  background(33); 
  
  image(FFL, windowWidth/2 - windowHeight/4, 25, windowHeight/2, windowHeight/3.5); // Family Feud Logo
  textFont(ESP);
  textSize(windowHeight/15);
  fill(61, 94, 171);
  stroke(255);
  strokeWeight(4);
  textAlign(CENTER);
  text('ESPAÑOL', windowWidth/2, windowHeight/3); // Spanish text for logo
  
  strokeWeight(ps*2 + 4);
  fill(br, bg, bb);
  rect(windowWidth/2 - windowWidth/5, windowHeight/2, windowWidth/2.5, windowHeight/7.5, 25);
  strokeWeight(ps);
  fill(255);
  text('PLAY', windowWidth/2, windowHeight/2 + windowHeight/11); // play button
  
  noStroke();
  fill(61, 95, 171);
  rect(sx, windowHeight - sy, ss, ss, 5);
  triangle(30, windowHeight - 40, sy + 10, windowHeight - sy - 10, sy + 10, windowHeight - sx + 10); // speaker button
  }
  
  if(a===1){
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
    
    start.setVolume(0);
  }  // music pause
  if(pause === false) {
    xw = 0;
    start.setVolume(0.25);
  }
  }
  
  if(play === true) {
    
    pso += 3;
    fill(33, 33, 33, pso);
    rect(0, 0, windowWidth, windowHeight);
    
    fill(61, 94, 171, pso);
    stroke(255, 196, 44, pso);
    strokeWeight(5);
    
    panelW = windowWidth / 14 * 5 - 25;
    panelH = windowHeight / 20 * 3 - 25;
    cornerRadius = 15;
    yPos1 = windowHeight / 5 + 20;
    
    // --- Draw Panels ---
      // Group 1 (1A, 1B)
        fill(61 + a1, 94 + a1, 171 + a1, pso);
        rect(windowWidth / 7 + 20 + sx2, yPos1, panelW, panelH, cornerRadius); //1A
        if (mouseX > windowWidth/7+20+sx2 && mouseX < windowWidth/7+20+sx2+panelW && mouseY > yPos1 && mouseY < yPos1+panelH) { a1 = -10 }
        else { a1 = 0; }
        fill(61 + a2, 94 + a2, 171 + a2, pso);
        rect(windowWidth / 2 + 5 + sx2, yPos1, panelW, panelH, cornerRadius); //1B
        if (mouseX > windowWidth/2+5+sx2 && mouseX < windowWidth/2+5+sx2+panelW && mouseY > yPos1 && mouseY < yPos1+panelH) { a2 = -10 }
        else { a2 = 0; }

      // Group 2 (2A, 2B)
        let yPos2 = windowHeight / 20 * 7 + 15;
        fill(61 + b1, 94 + b1, 171 + b1, pso);
        rect(windowWidth / 7 + 20 + sx2, yPos2, panelW, panelH, cornerRadius); //2A
        if (mouseX > windowWidth/7+20+sx2 && mouseX < windowWidth/7+20+sx2+panelW && mouseY > yPos2 && mouseY < yPos2+panelH) { b1 = -10 }
        else { b1 = 0; }
        fill(61 + b2, 94 + b2, 171 + b2, pso);
        rect(windowWidth / 2 + 5 + sx2, yPos2, panelW, panelH, cornerRadius); //2B
        if (mouseX > windowWidth/2+5+sx2 && mouseX < windowWidth/2+5+sx2+panelW && mouseY > yPos2 && mouseY < yPos2+panelH) { b2 = -10 }
        else { b2 = 0; }

      // Group 3 (3A, 3B)
        let yPos3 = windowHeight / 20 * 10 + 10;
        fill(61 + c1, 94 + c1, 171 + c1, pso);
        rect(windowWidth / 7 + 20 + sx2, yPos3, panelW, panelH, cornerRadius); //3A
        if (mouseX > windowWidth/7+20+sx2 && mouseX < windowWidth/7+20+sx2+panelW && mouseY > yPos3 && mouseY < yPos3+panelH) { c1 = -10 }
        else { c1 = 0; }
        fill(61 + c2, 94 + c2, 171 + c2, pso);
        rect(windowWidth / 2 + 5 + sx2, yPos3, panelW, panelH, cornerRadius); //3B
        if (mouseX > windowWidth/2+5+sx2 && mouseX < windowWidth/2+5+sx2+panelW && mouseY > yPos3 && mouseY < yPos3+panelH) { c2 = -10 }
        else { c2 = 0; }

      // Group 4 (4A, 4B)
        let yPos4 = windowHeight / 20 * 13 + 5;
        fill(61 + d1, 94 + d1, 171 + d1, pso);
        rect(windowWidth / 7 + 20 + sx2, yPos4, panelW, panelH, cornerRadius); //4A
        if (mouseX > windowWidth/7+20+sx2 && mouseX < windowWidth/7+20+sx2+panelW && mouseY > yPos4 && mouseY < yPos4+panelH) { d1 = -10 }
        else { d1 = 0; }
        fill(61 + d2, 94 + d2, 171 + d2, pso);
        rect(windowWidth / 2 + 5 + sx2, yPos4, panelW, panelH, cornerRadius); //4B
        if (mouseX > windowWidth/2+5+sx2 && mouseX < windowWidth/2+5+sx2+panelW && mouseY > yPos4 && mouseY < yPos4+panelH) { d2 = -10 }
        else { d2 = 0; }

      // Group 5 (5A, 5B) - These are the panels to the right
      // yPos for these is the same as Group 1
        fill(61 + e1, 94 + e1, 171 + e1, pso);
        rect(windowWidth / 14 * 12 + sx2, yPos1, panelW, panelH, cornerRadius); //5A
        if (mouseX > windowWidth/14*12+sx2 && mouseX < windowWidth/14*12+sx2+panelW && mouseY > yPos1 && mouseY < yPos1+panelH) { e1 = -10 }
        else { e1 = 0; }
        fill(61 + e2, 94 + e2, 171 + e2, pso);
        rect(windowWidth / 14 * 17 - 15 + sx2, yPos1, panelW, panelH, cornerRadius); //5B
        if (mouseX > windowWidth/14*17+sx2 && mouseX < windowWidth/14*17+sx2+panelW && mouseY > yPos1 && mouseY < yPos1+panelH) { e2 = -10 }
        else { e2 = 0; }
    
    // --- Draw Text on Panels ---
      push(); // Start isolated styling for text
      textFont(AF); // Use the Clarendon font
      textSize(windowHeight / 20); // Adjust size as needed
      fill(255, 255, 255, pso); // White text, with fade-in alpha
      strokeWeight(3);
      textAlign(CENTER, CENTER);
    
    //text
      text('1A', (windowWidth / 7 + 20 + sx2) + panelW / 2, yPos1 + panelH / 2);
      text('1B', (windowWidth / 2 + 5 + sx2) + panelW / 2, yPos1 + panelH / 2);
      text('2A', (windowWidth / 7 + 20 + sx2) + panelW / 2, yPos2 + panelH / 2);
      text('2B', (windowWidth / 2 + 5 + sx2) + panelW / 2, yPos2 + panelH / 2);
      text('3A', (windowWidth / 7 + 20 + sx2) + panelW / 2, yPos3 + panelH / 2);
      text('3B', (windowWidth / 2 + 5 + sx2) + panelW / 2, yPos3 + panelH / 2);
      text('4A', (windowWidth / 7 + 20 + sx2) + panelW / 2, yPos4 + panelH / 2);
      text('4B', (windowWidth / 2 + 5 + sx2) + panelW / 2, yPos4 + panelH / 2);
      text('5A', (windowWidth / 14 * 12 + sx2) + panelW / 2, yPos1 + panelH / 2);
      text('5B', (windowWidth / 14 * 17 - 15 + sx2) + panelW / 2, yPos1 + panelH / 2);
    
    pop(); // Restore previous styles

    // --- Original masking and decorative elements ---
      noStroke();
      fill(33, 33, 33, pso); // Match the background for masking
      rect(0, 0, windowWidth / 7, windowHeight); // Mask left side
      rect(windowWidth / 7 * 6, 0, windowWidth / 7 + 5, windowHeight); // Mask right side (added +5 to ensure full cover with sx2)

      noFill();
      stroke(255, 196, 44, pso);
      strokeWeight(10);
      ellipse(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
      rect(windowWidth / 7, windowHeight / 5, windowWidth / 7 * 5, windowHeight / 5 * 3, 25);

      arrow(windowWidth / 2 - windowHeight / 15, windowHeight / 14 * 12, windowHeight / 15, 1, aswl);
      arrow(windowWidth / 2 + windowHeight / 15, windowHeight / 14 * 12, windowHeight / 15, 2, aswr);
    
    //opacity of everything
      if(pso === 255) { pso -= 3; }
    
    //boxes moving left and right
      if(left === true) { sx2 -= 10; }
      if(sx2 < -windowWidth/14*10 + 15) { sx2 += 10; }

      if(right === true) { sx2 += 10; }
      if(sx2 > 0) { sx2 -= 10; }
    
    //arrows turning thicker
      if(mouseX < windowWidth/2 - windowHeight/15 && mouseX > windowWidth/2 - windowHeight/15 - windowHeight/20 && mouseY > windowHeight/14*12 && mouseY < windowHeight/14*12 + windowHeight/15) { aswl = 1; }
      else { aswl = 0; }
      if(mouseX > windowWidth/2 + windowHeight/15 && mouseX < windowWidth/2 + windowHeight/15 + windowHeight/20 && mouseY > windowHeight/14*12 && mouseY < windowHeight/14*12 + windowHeight/15) { aswr = 1; }
      else { aswr = 0; }
    
    noStroke();
    fill(255, 15, 15, pso);
    rect(0, 0, windowWidth, windowHeight/30);
    fill(255, pso);
    textAlign(CENTER);
    textFont(AF);
    textSize(windowHeight/30);
    text('ONLY 5B IS ACTIVE', windowWidth/2, 20);

    
  }
  
  if(playing === true) {
    
    if(a===1){
      
    osp += 5;
    osp2 += 5;
    if (osp > 255) { osp -= 5; osp2 -= 5; }
      
    fill(33, 33, 33, osp);
    rect(0, 0, windowWidth, windowHeight);
      
    fill(61, 94, 171, osp);
    stroke(255, 255, 255, osp);
    rect(10, windowHeight/4, windowWidth/2-20, windowHeight/4*3-20, 20);
      
    rect(windowWidth/2+10, windowHeight/4, windowWidth/2-20, windowHeight/4*3-20, 20);
    
    if(a===1){
    noStroke();
    fill(0, 0, 0, osp2-122);
    rect(0, 0, windowWidth, windowHeight);
      
    fill(61, 94, 171, osp2);
    stroke(255, 255, 255, osp2);
    rect(windowWidth/15*2, windowHeight/15, windowWidth/15*11, windowHeight/15*13, 20);
    fill(255, 255, 255, osp2);
    noStroke();
    textSize(windowHeight/15);
    text('How To Play', windowWidth/2, windowHeight/15*2);
    textSize(windowHeight/20);
    text("• each round there's 8 vocab words \n • two people buzz to get the top word (highest wins) \n • whoever wins' side gets to go in order to guess the other answers \n • if the team gets three strikes then it goes to the other team to steal all the points (any answer can steal) \n • the team that is going can also pass it off so they don't get all their points stolen", windowWidth/15*2, windowHeight/15*3, windowWidth/15*11);
    
    stroke(255, 255, 255, osp2);    
    arrow(windowWidth/2 - windowWidth/15, windowHeight/15*12.25, windowHeight/15, 1, aswl2);
    arrow(windowWidth/2 + windowWidth/15, windowHeight/15*12.25, windowHeight/15, 2, aswr2);
    }
    
    if(mouseX > windowWidth/2 + windowWidth/15 && mouseX < windowWidth/2 + windowWidth/15 + windowHeight/15 && mouseY > windowHeight/15*12.25 && mouseY < windowHeight/15*12.25 + windowHeight/15) { aswr2 = 3; }
    else { aswr2 = 2; }
    if(mouseX > windowWidth/2 - windowWidth/15 - windowHeight/15 && mouseX < windowWidth/2 - windowWidth/15 && mouseY > windowHeight/15*12.25 && mouseY < windowHeight/15*12.25 + windowHeight/15) { aswl2 = 3; }
    else { aswl2 = 2; }
      
    }    
    if(rule === true) {
      
      ro += 5;
      if (ro > 255) { ro -= 5; }
      
      fill(61, 94, 171, ro);
      stroke(255, 255, 255, ro);
      rect(windowWidth/15*2, windowHeight/15, windowWidth/15*11, windowHeight/15*13, 20);
      fill(255, 255, 255, ro);
      noStroke();
      textSize(windowHeight/15);
      text('How To Play', windowWidth/2, windowHeight/15*2);
      textSize(windowHeight/20);
      text("• at the end of each round the points are tallied up \n • on rounds 3&4 point doubled \n • on round 5 points tripled", windowWidth/15*2, windowHeight/15*3, windowWidth/15*11);
      
      stroke(255, 255, 255, ro);    
      arrow(windowWidth/2 - windowWidth/15, windowHeight/15*12.25, windowHeight/15, 1, aswl2);
      arrow(windowWidth/2 + windowWidth/15, windowHeight/15*12.25, windowHeight/15, 2, aswr2);
      
      noStroke();
      fill(cf, cf, cf, ro);
      rect(windowWidth/2 - windowWidth/6, windowHeight/2, windowWidth/3, windowHeight/8, 20);
      fill(61, 94, 171, ro);
      textSize(windowHeight/9);
      text('close', windowWidth/2, windowHeight/2 + windowHeight/10);
      
      if(mouseX > windowWidth/2 - windowWidth/6 && mouseX < windowWidth/2 + windowWidth/6 && mouseY > windowHeight/2 && mouseY < windowHeight/2 + windowHeight/8) {
        cf = 235;
      }
      else { cf = 255; }
      
    }
    
    if(close === true) {
      
      osp2 -= 5;
      ro = -5;
      
      
      
    }    
    
  }
  
}


function mousePressed() {
  
  if(a===1){
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
    play = true;
    click.play();
    start.play(0.5);
  }
  if(mouseX < windowWidth/2 - windowHeight/15 && mouseX > windowWidth/2 - windowHeight/15 - windowHeight/20 && mouseY > windowHeight/14*12 && mouseY < windowHeight/14*12 + windowHeight/15) { 
    right = true; 
    left = false;
  }
  if(mouseX > windowWidth/2 + windowHeight/15 && mouseX < windowWidth/2 + windowHeight/15 + windowHeight/20 && mouseY > windowHeight/14*12 && mouseY < windowHeight/14*12 + windowHeight/15) { 
    left = true;
    right = false;
  }
  }
  
  if (mouseX > windowWidth/14*17+sx2 && mouseX < windowWidth/14*17+sx2+panelW && mouseY > yPos1 && mouseY < yPos1+panelH) {
    playing = true;
  }
  if(mouseX > windowWidth/2 + windowWidth/15 && mouseX < windowWidth/2 + windowWidth/15 + windowHeight/15 && mouseY > windowHeight/15*12.25 && mouseY < windowHeight/15*12.25 + windowHeight/15 && playing === true) {
    rule = true;
  }
  if(mouseX > windowWidth/2 - windowWidth/15 - windowHeight/15 && mouseX < windowWidth/2 - windowWidth/15 && mouseY > windowHeight/15*12.25 && mouseY < windowHeight/15*12.25 + windowHeight/15 && playing === true && rule === true) {
    rule = false;
    ro = 0;
  }
  
  if(mouseX > windowWidth/2 - windowWidth/6 && mouseX < windowWidth/2 + windowWidth/6 && mouseY > windowHeight/2 && mouseY < windowHeight/2 + windowHeight/8 && playing === true && rule === true) {
    close = true;
  }

}