const diameter = 25;
let colore = 0;
let testo = 'Slide right to make the colors brighter \n \n Slide down to speed the animation\n \n Press S for spring, F for fall and W for winter \n \n Press any key to get back to the whole spectrum';


function setup() {
  createCanvas(windowWidth, windowHeight)

  background(0)

}

function draw() {

//initialize random color value variable - whole spectrum
  let colnum1 = map(mouseX, -300, width, 0, 255);
  let colnum2 = map(mouseX, -300, width, 0, 255);
  let colnum3 = map(mouseX, -300, width, 0, 255);

  //change palette to winter
  if (key == 'w' || key == 'W') {
    colnum1 = random(0, 10)
  }

  // change palette to spring
  else if (key == 's' || key == 'S') {
    colnum2 = random(0, 10)
  }

  // change palette to fall
  else if (key == 'f' || key == 'F') {
    colnum3 = random(0, 10)
  } else {
    colnum1 = map(mouseX, -300, width, 0, 255);
    colnum2 = map(mouseX, -300, width, 0, 255);
    colnum3 = map(mouseX, -300, width, 0, 255);
  }

  //set framerate mapping
  let frare = map(mouseY, 0, height, 1, 120);
  frameRate(frare)

//create grid
  for (let x = 4; x < width; x += diameter + 4) {
    for (let y = 4; y < height; y += diameter + 4) {
      stroke(0)
      fill(colore);

//animate colors
      colore = color(random(colnum1), random(colnum2), random(colnum3));
      rect(x, y, diameter);
    }
  }


//text box
  push();
  fill(0);
  rectMode(CENTER);
  rect(width / 2, height / 2-15, 800, 300, 60);

  pop()

  //text
  push()
  textSize(25);
  fill (255)
  textAlign(CENTER);
  textFont('monaco');
  text(testo, windowWidth / 2, windowHeight / 2 -100);
  pop();



}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0)

}
