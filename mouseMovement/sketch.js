let arrayA = [55, 40, 50];

function setup(){
  createCanvas(1800, 1200);
}


function draw(){
  background(255, 127, 50);

  var randNum = Math.floor(Math.random()*255);
  var randNum1 = Math.floor(Math.random()*255);
  var randNum2 = Math.floor(Math.random()*255);

  var area1 = Math.floor(Math.random()*1800);
  var area2 = Math.floor(Math.random()*1200);
  var area3 = Math.floor(Math.random()*255);


  //was experimenting with arrays to try to get the
  //latest random numbers to be the block that appeared
  //when the mouse was on the left half


  let num1 = arrayA.length - 3;
  let num2 = arrayA.length - 2;
  let num3 = arrayA.length - 1;

  let num1a = arrayA[num1];
  let num2a = arrayA[num2];
  let num3a = arrayA[num3];

  console.log(arrayA);


  if (mouseX < width/2){

    console.log(mouseX);
    console.log(mouseY);

    fill(255, 0, 0);
    rect(mouseX - 20, mouseY - 30, 40, 60);


      fill(num1a, num2a, num3a);
      rect(num1a, num2a, num3a, num1a);


      console.log(arrayA);
      console.log(num1a);


  }else{

    console.log(mouseX);
    console.log(mouseY);

    fill(randNum, randNum1, randNum2);
    rect(area1, area2, area2, area1);

    arrayA.push(randNum1);
    arrayA.push(randNum2);
    arrayA.push(randNum);

    console.log(arrayA);


  }
}
