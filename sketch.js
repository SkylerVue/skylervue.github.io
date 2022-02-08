let img1;

function preload(){
  cloud = createImg("Images/Cloud.png", "A cloud");
  websiteHeading = createP("Rain drop sized news");
  fakeNFT = createImg("Images/FakeNFT.png", "World's most expensive NFT");
  ad1 = createImg("Images/ad1.png", "Ad");
  ad2 = createImg("Images/ad2.png", "Ad");
  ad3 = createImg("Images/ad3.png", "Ad");
  ad1a = createImg("Images/ad1.png", "Ad");
  ad2a = createImg("Images/ad2.png", "Ad");
  ad3a = createImg("Images/ad3.png", "Ad");
  elonMuskTweet = createImg("Images/FAKEElonMuskTweet.png", "A tweet from Elon Musk that says \"Bitcoin will drop! Try to sell your coins to someone else if you can! Buy Dogecoin instead!\"");
  heading1 = createP("Most Expensive NFT Sold!");
  heading2 = createP("Bitcoin Projected to Drop Even More!");
  websiteTitle = createP("Sky News");
  txt1 = createP("This week, the most expensive NFT has been sold. The NFT named \"Smile Boi\" has been sold for $3.9 million. This life changing NFT has such a heavy price to it since it has been created AND signed by the world famous artist, \"Suewoop ヅ\". Everyone is now trying to reach for the stars to get this priceless NFT.");
  txt2 = createP("Bitcoin has dropped to the lowest it has been in awhile. It is projected to drop even lower than it is now. This has caused many people to lose trust in Bitcoin. The drop in Bitcoin may have stemmed from this Tweet from Elon Musk (screenshot on the right). Though it is not confirmed, Mr. Musk does have a large following and has enough influence to cause such an impact.")
  nftCaption = createP("\"Smile Boi\" by Suewoopヅ");
  elonTweetCaption = createP("Tweet from Elon Musk");

  ads = createP("Ads");
  ads1 = createP("Ads");
}

function setup() {
  createCanvas(1519, 1080);

  cloud.position(487, 0);

  websiteHeading.style("font-size", "25px");
  websiteHeading.size(500, 50);
  websiteHeading.position(650, 150);

  websiteTitle.size(300, 300)
  websiteTitle.style("font-size", "50px");
  websiteTitle.position(670 , 10);

  heading1.style("font-size", "35px");
  heading1.size(500, 40);
  heading1.position(550,205);

  fakeNFT.size(300, 164);
  fakeNFT.position(1000, 300)

  txt1.size(750, 450);
  txt1.style("font-size", "20px");
  txt1.position(230, 310);

  nftCaption.style("font-size", "15px");
  nftCaption.size(500, 50);
  nftCaption.position(1050, 455);

  heading2.style("font-size", "35px");
  heading2.size(700, 40);
  heading2.position(500,610);

  txt2.size(750, 450);
  txt2.style("font-size", "20px");
  txt2.position(230, 715);

  elonMuskTweet.size(300, 164);
  elonMuskTweet.position(1000, 725);

  elonTweetCaption.style("font-size", "15px");
  elonTweetCaption.size(500, 50);
  elonTweetCaption.position(1050, 880);


  ads.style("font-size", "15px");
  ads.position(91, 200);

  ads1.style("font-size", "15px");
  ads1.position(1413, 200);

  ad1.size(180, 120);
  ad1.position(17, 250);

  ad2.size(180, 120);
  ad2.position(17, 475);

  ad3.size(180, 120);
  ad3.position(17, 700);

  ad1a.size(180, 120);
  ad1a.position(1335, 250);

  ad2a.size(180, 120);
  ad2a.position(1335, 475);

  ad3a.size(180, 120);
  ad3a.position(1335, 700);
}

function draw() {
  background(255, 255, 255);
  //background(140, 216, 255);

  stroke(102);
  fill(230, 230, 230);
  rect(1319, 0, 200, 1080)
  rect(0, 0, 200, 1080)


  fill(140, 216, 255);
  rect(0, 0, 1519, 200)

}
