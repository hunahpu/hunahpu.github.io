var radius;
var trianglePoints = [];
var nCirclePoints = 3;
var period = 2500;
var nPows = 5;

//-----------------------------------------
function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent("honeycomb")
  radius = 50;
}

//-----------------------------------------
function draw() {
  background(255,255,0);
  push();
  translate(width / 2, height / 2);
  step = radius * cos(HALF_PI/3)
  h=radius/2
  for(i=-10;i<10;i++){
    for(j=-10;j<10;j++)
    triangulod(i*2*step+j*step,j*3/2*radius)
  }
  for(i=-10;i<10;i++){
    for(j=-10;j<10;j++)
    triangulou(i*2*step+j*step+step,j*3/2*radius-h)
  }
}
function triangulou(x0,y0){
var t = int(millis() / period); // 0,1,2,3,4,5,6,7...
  var tupow = 3 ; // 3,6,12,24,48...
  var utpow = 3 ; // 48,24,12,6,3...

  var direction = t % 2; // 0,1,0,1...
  var bitupow = (direction === 0) ? tupow : utpow; //

  var frac = (millis() % period) / float(period);
  var tfrac = (direction === 0) ? frac : (1.0 - frac);
  tfrac = pow(tfrac, 3.0);

  fill(0,255,255);
  stroke(0);
  strokeWeight(3);
  strokeCap(ROUND);
  strokeJoin(BEVEL);
  push()
  translate(x0,y0);
  rotate(PI)
  beginShape();
  nCirclePoints = 2 * bitupow;

  for (var i = 0; i <(nCirclePoints + 1); i++) { // for good shape closure
    if (i % 2 === 0) {
      // the corner vertices
      var theta = map(i, 0, nCirclePoints, 0, TWO_PI)  - HALF_PI;
      var px = radius * cos(theta);
      var py = radius * sin(theta);
      vertex(px, py);

    } else {
      // the halfway vertices
      var thetaA = map(i - 1, 0, nCirclePoints, 0, TWO_PI) - HALF_PI;

      var thetaB = map(i + 0, 0, nCirclePoints, 0, TWO_PI) - HALF_PI;
      var thetaC = map(i + 1, 0, nCirclePoints, 0, TWO_PI) - HALF_PI;

      var pxA = radius * cos(thetaA);
      var pyA = radius * sin(thetaA);
      var pxB = radius * cos(thetaB);
      var pyB = radius * sin(thetaB);
      var pxC = radius * cos(thetaC);
      var pyC = radius * sin(thetaC);

      var pxAC = (pxA + pxC) / 2; // points halfway between flanking vertices
      var pyAC = (pyA + pyC) / 2;

      var px = map(tfrac, 0, 1, 0, pxB);
      var py = map(tfrac, 0, 1, 0, pyB);
      vertex(px, py);
    }
  }
  endShape(CLOSE);

  pop();
}

function triangulod(x0,y0){
var t = int(millis() / period); // 0,1,2,3,4,5,6,7...
  var tupow = 3 ; // 3,6,12,24,48...
  var utpow = 3 ; // 48,24,12,6,3...

  var direction = t % 2; // 0,1,0,1...
  var bitupow = (direction === 0) ? tupow : utpow; //

  var frac = (millis() % period) / float(period);
  var tfrac = (direction === 1) ? frac : (1.0 - frac);
  tfrac = pow(tfrac, 3.0);

  fill(255,0,255);
  stroke(0);
  strokeWeight(3);

  push()
  translate(x0,y0);
  beginShape();
  nCirclePoints = 2 * bitupow;

  for (var i = 0; i <(nCirclePoints + 1); i++) { // for good shape closure
    if (i % 2 === 0) {
      // the corner vertices
      var theta = map(i, 0, nCirclePoints, 0, TWO_PI)  - HALF_PI;
      var px = radius * cos(theta);
      var py = radius * sin(theta);
      vertex(px, py);

    } else {
      // the halfway vertices
      var thetaA = map(i - 1, 0, nCirclePoints, 0, TWO_PI) - HALF_PI;

      var thetaB = map(i + 0, 0, nCirclePoints, 0, TWO_PI) - HALF_PI;
      var thetaC = map(i + 1, 0, nCirclePoints, 0, TWO_PI) - HALF_PI;

      var pxA = radius * cos(thetaA);
      var pyA = radius * sin(thetaA);
      var pxB = radius * cos(thetaB);
      var pyB = radius * sin(thetaB);
      var pxC = radius * cos(thetaC);
      var pyC = radius * sin(thetaC);

      var pxAC = (pxA + pxC) / 2; // points halfway between flanking vertices
      var pyAC = (pyA + pyC) / 2;

      var px = map(tfrac, 0, 1, 0, pxB);
      var py = map(tfrac, 0, 1, 0, pyB);
      vertex(px, py);
    }
  }
  endShape(CLOSE);
  pop();
}
