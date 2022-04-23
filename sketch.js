let a, b;
let title1, title2;
let heading;

function preload(){
  a = createA('Pirate2(Copy_2).html', '<img src = "Images/shipBritish.png" alt="pirate ship">', '_blank');
  title1 = createP('Pirates and Navy Game');

  b = createA('mouseMovement/index.html', '<img src = "mouseMovement/smile.jpg" alt="smile">', '_blank');
  title2 = createP('Random Rectangles');

  heading = createP("Welcome to my website");
}


function setup() {
  a.parent("mainBody");
  title1.parent("mainBody");

  b.parent('mainBody');
  title2.parent("mainBody");

  heading.parent('top');
}
