var balls = [];

var animeList;

function setup() {
  createCanvas(1920, 1000);
  face1 = loadImage("Face1.png");
  face2 = loadImage("Face2.png");
  face3 = loadImage("Face3.png");
  face4 = loadImage("Face4.png");
  face5 = loadImage("Face5.png");
  face6 = loadImage("Face6.png");
  face7 = loadImage("Face7.png");
  face8 = loadImage("Face8.png");
  face9 = loadImage("Face9.png");

  noStroke();

  loadData();

  for (var i = 0; i < 100; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  var r = map(mouseX, 0, width, 100, 255);
  var g = map(mouseX, 0, height, 100, 255);
  var b = map(mouseY, 0, width, 255, 0);

  background(r, g, b);

  for (var i = 0; i < 100; i++) {
    balls[i].display();
    balls[i].rollover(mouseX, mouseY);
    balls[i].move();
    balls[i].checkBoundaries();
  }
}

function loadData() {
  animeList = loadTable("AnimeList.csv", "header");
  // balls = new Ball[animeList.getRowCount()];

  for (var i = 0; i < animeList.getRowCount(); i++) {
    var row = animeList.getRow(i);
    var score = row.getFloat("scored_by");
    var rating = color(255 - (row.getFloat("score") * 15), row.getFloat("score") * 30, row.getFloat("score") * 10);
    var n = row.getString("title");
    balls[i] = new Ball((score) / 2000 + 50, n, rating);
  }
}

class Ball {
  constructor(size, s, c, xPos, yPos, faceVal, over, xSpeed, ySpeed, xDir, yDir) {
    this.xPos = random(width);
    this.yPos = random(height);
    this.faceVal = round(random(1, 9));
    this.size = size;
    this.title = s;
    this.over = false;
    this.xSpeed = 0;
    this.ySpeed = 0;

    this.xDir = random(-1, 1);
    this.yDir = random(-1, 1);
    //speed in xdir and y dir
    if (this.xDir > 0) {
      this.xSpeed = 1;
    } else {
      this.xSpeed = -1;
    }

    if (this.yDir > 0) {
      this.ySpeed = 1;
    } else {
      this.ySpeed = -1;
    }

  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(0);
    ellipse(this.xPos, this.yPos, this.size, this.size);
    imageMode(CENTER);
    if (this.faceVal == 1) {
      image(face1, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.faceVal == 2) {
      image(face2, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.faceVal == 3) {
      image(face3, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.faceVal == 4) {
      image(face4, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.faceVal == 5) {
      image(face5, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.faceVal == 6) {
      image(face6, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.faceVal == 7) {
      image(face7, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.faceVal == 8) {
      image(face8, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.faceVal == 9) {
      image(face9, this.xPos, this.yPos, this.size, this.size);
    }
    if (this.over) {
      // PFont font;
      // font = loadFont ("Exo-Regular-48.vlw");
      // textFont(font);
      textSize(20);
      fill(100, 0, 100);
      textAlign(CENTER);
      text(title, xPos, yPos + size / 2 + 20);
    }
  }


  move() {

    this.xPos += this.xSpeed / this.size * 10;
    this.yPos += this.ySpeed / this.size * 10;


  }

  checkBoundaries() {
    if (this.xPos >= width - this.size / 2 || this.xPos <= 0 + this.size / 2) {
      this.xSpeed *= -1;
    }

    if (this.yPos >= height - this.size / 2 || this.yPos <= 0 + this.size / 2) {
      this.ySpeed *= -1;
    }
  }


  rollover(px, py) {
    var d = dist(px, py, this.xPos, this.yPos);
    if (d < this.size / 2) {
      this.over = true;
    } else {
      this.over = false;
    }
  }
}